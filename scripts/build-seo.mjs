#!/usr/bin/env node
// Offline build. Reads only checked-in public content; no CMS, credentials or network.
import {readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {pages,pageDescriptions,renderers} from '../about-content.mjs';
import {esc,visibleItems,renderFeatured,renderCards,renderHome} from '../sermon-content.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=name=>readFile(path.join(root,name),'utf8');
const write=(name,html)=>writeFile(path.join(root,name),html);
const origin='https://mchurch.online/';
const routes={about:'about.html',faith:'about-faith.html',team:'about-team.html',myc:'about-myc.html',contact:'about-contact.html'};
const json=value=>JSON.stringify(value).replaceAll('<','\\u003c');
function replaceOnce(source,pattern,value){
 const matches=[...source.matchAll(new RegExp(pattern.source,pattern.flags.includes('g')?pattern.flags:pattern.flags+'g'))];
 if(matches.length!==1)throw Error(`Expected one build target: ${pattern}`);
 return source.replace(pattern,()=>value);
}
const template=await read('scripts/templates/about.html');
for(const [page,route] of Object.entries(routes)){
 const title=`${pages[page].title}｜M+大雅教會`,url=origin+route;
 let html=template.replaceAll('{{PAGE}}',page).replace('{{CONTENT}}',renderers[page]());
 html=replaceOnce(html,/<title>[^<]*<\/title>/,`<title>${esc(title)}</title>`);
 html=replaceOnce(html,/<meta name="description" content="[^"]*">/,`<meta name="description" content="${esc(pageDescriptions[page])}">`);
 html=replaceOnce(html,/<link id="canonical-url" rel="canonical" href="[^"]*">/,`<link id="canonical-url" rel="canonical" href="${url}">`);
 for(const [key,value] of Object.entries({title,description:pageDescriptions[page],url})){
  html=replaceOnce(html,new RegExp(`<meta id="og-${key}" property="og:${key}" content="[^"]*">`),`<meta id="og-${key}" property="og:${key}" content="${esc(value)}">`);
 }
 html=replaceOnce(html,/<h1 id="page-title">[^<]*<\/h1>/,`<h1 id="page-title">${esc(pages[page].title)}</h1>`);
 html=replaceOnce(html,/<p class="hero-copy" id="page-intro">[^<]*<\/p>/,`<p class="hero-copy" id="page-intro">${esc(pages[page].intro)}</p>`);
 html=html.replace(/<a data-page="([a-z]+)"/g,(_,key)=>`<a data-page="${key}"${key===page?' class="active" aria-current="page"':''}`);
 const data={'@context':'https://schema.org','@type':page==='contact'?'ContactPage':'AboutPage',name:pages[page].title,url,isPartOf:{'@id':origin+'#website'},about:{'@id':origin+'#church'},inLanguage:'zh-TW'};
 html=replaceOnce(html,/<script type="application\/ld\+json">[\s\S]*?<\/script>/,`<script id="about-structured-data" type="application/ld+json">${json(data)}</script>`);
 await write(route,html);
}
const source=JSON.parse(await read('sermons-data.json'));
const items=visibleItems(source.items);
if(!items.length)throw Error('No valid public sermons; refusing to replace existing content');
let home=await read('index.html');
home=replaceOnce(home,/<div class="home-sermon-grid">[\s\S]*?<\/div>/,`<div class="home-sermon-grid">${renderHome(items)}</div>`);
await write('index.html',home);
let sermons=await read('sermons.html');
sermons=replaceOnce(sermons,/<div class="wrap sermon-feature" id="featuredSermon">[\s\S]*?<\/section>/,`<div class="wrap sermon-feature" id="featuredSermon">${renderFeatured(items[0])}</div></section>`);
sermons=replaceOnce(sermons,/<div class="sermon-list" id="sermonList">[\s\S]*?<\/div>/,`<div class="sermon-list" id="sermonList">${renderCards(items)}</div>`);
const data={'@context':'https://schema.org','@type':'CollectionPage',name:'主日信息',url:origin+'sermons.html',about:{'@id':origin+'#church'},inLanguage:'zh-TW',mainEntity:{'@type':'ItemList',itemListElement:items.map((item,i)=>({'@type':'ListItem',position:i+1,url:item.url,name:item.title}))}};
sermons=replaceOnce(sermons,/<script type="application\/ld\+json">[\s\S]*?<\/script>/,`<script type="application/ld+json">${json(data)}</script>`);
await write('sermons.html',sermons);
// No lastmod is emitted: CMS pages change independently, and a build date is not a content date.
const urls=['','newcomers.html','sermons.html','gospel.html',...Object.values(routes),'group-resources.html','weekly.html','weekly-archive.html','heat-camp-2027.html'];
await write('sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+urls.map(route=>`  <url><loc>${origin+route}</loc></url>`).join('\n')+'\n</urlset>\n');
console.log(JSON.stringify({aboutPages:5,sermonCards:items.length,homeCards:Math.min(items.length,3),sitemapUrls:urls.length}));
