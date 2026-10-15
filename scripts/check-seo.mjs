#!/usr/bin/env node
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {pages,renderers} from '../about-content.mjs';
import {visibleItems,esc} from '../sermon-content.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),origin='https://mchurch.online/';
const read=name=>readFile(path.join(root,name),'utf8');
const xml=await read('sitemap.xml');
const urls=[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
assert.equal(urls.length,13);assert.equal(new Set(urls).size,13);
const titles=new Set();
for(const url of urls){
 assert.ok(url.startsWith(origin));assert.ok(!url.includes('?'));
 const html=await read(url.slice(origin.length)||'index.html');
 const title=html.match(/<title>([^<]+)<\/title>/)?.[1];assert.ok(title);assert.ok(!titles.has(title));titles.add(title);
 assert.match(html,/<meta name="description" content="[^"]+">/);
 assert.match(html,/<meta name="robots" content="index,follow/);
 const canonical=html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];assert.equal(canonical,url);
 assert.equal((html.match(/<h1\b/g)||[]).length,1);
 for(const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g))JSON.parse(match[1]);
 for(const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)){
  const value=match[1].split(/[?#]/)[0];
  if(!value||/^(?:[a-z]+:|\/\/)/i.test(value))continue;
  await access(path.join(root,value));
 }
}
const home=await read('index.html');
assert.equal((home.match(/name="google-site-verification"/g)||[]).length,1);
assert.match(home,/name="google-site-verification" content="[A-Za-z0-9_-]+"/);
const routes={about:'about.html',faith:'about-faith.html',team:'about-team.html',myc:'about-myc.html',contact:'about-contact.html'};
for(const [page,route]of Object.entries(routes)){
 const html=await read(route);assert.ok(html.includes(renderers[page]()));assert.ok(html.includes(esc(pages[page].title)));
 assert.equal((html.match(/aria-current="page"/g)||[]).length,1);
 assert.ok(html.includes(`data-page="${page}" class="active" aria-current="page"`));
 assert.ok(!html.includes('{{CONTENT}}'));
}
const camp=await read('heat-camp-2027.html');
assert.ok(home.includes('href="heat-camp-2027.html"'));
assert.ok(urls.includes(origin+'heat-camp-2027.html'));
assert.ok(!camp.includes('href="heat-camp-payment-test.html"'));
assert.match(camp,/<meta name="robots" content="index,follow">/);
assert.match(camp,/<link rel="canonical" href="https:\/\/mchurch\.online\/heat-camp-2027\.html">/);
for(const file of ['preview.html','heat-camp-2027-test.html','heat-camp-2027-success.html','heat-camp-payment-test.html'])assert.match(await read(file),/name="robots" content="noindex,nofollow"/);
const items=visibleItems(JSON.parse(await read('sermons-data.json')).items);assert.ok(items.length);
assert.ok((await read('sermons.html')).includes(esc(items[0].title)));assert.ok(home.includes(esc(items[0].title)));
assert.equal(visibleItems([{title:'unsafe',url:'javascript:alert(1)',thumbnail:'x',published:'2026-10-11'}]).length,0);
assert.equal(esc('<script>"&'), '&lt;script&gt;&quot;&amp;');
console.log(JSON.stringify({sitemapPages:urls.length,staticAboutPages:5,verificationTag:true,excludedUtilityPages:4,publicCampPage:'indexable',localLinks:'valid',structuredData:'valid',unsafeSermonUrlRejected:true}));
