import fs from 'node:fs/promises';import path from 'node:path';import {fileURLToPath} from 'node:url';
import {applyPublishedLayout} from '../testimony-published-layouts.mjs';
import {selectStoryImage,shareFingerprint,sharePageUrl,validateStoryId,WEBSITE} from '../testimony-share-media.mjs';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export async function prepareSharePage(input){
 if(input.status&&input.status!=='published')throw Error('not_public');validateStoryId(input.id);const story=await applyPublishedLayout(input),image=selectStoryImage(story);if(!image)return null;
 const revision=await shareFingerprint(story),url=sharePageUrl(story.id,revision),read=WEBSITE+'/?testimony='+story.id+'#testimonies';
 const html=`<!doctype html><html lang="zh-Hant" prefix="og: https://ogp.me/ns#"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(story.title)}｜雲彩見證</title><link rel="canonical" href="${esc(url)}"><meta property="og:type" content="article"><meta property="og:site_name" content="M+大雅教會・雲彩見證"><meta property="og:locale" content="zh_TW"><meta property="og:title" content="${esc(story.title)}"><meta property="og:description" content="${esc(story.display_name||'匿名分享')}的生命見證，閱讀完整分享。"><meta property="og:url" content="${esc(url)}"><meta property="og:image" content="${esc(image.url)}"><meta property="og:image:secure_url" content="${esc(image.url)}"><meta property="og:image:alt" content="${esc(image.alt)}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${esc(image.url)}"><link rel="stylesheet" href="../testimony-share-landing.css?v=20261024-shareimage1"></head><body><main><p>雲彩見證 · M+大雅教會</p><h1>${esc(story.title)}</h1><p id="share-status">正在開啟完整見證…</p><a id="read-story" href="${esc(read)}">閱讀完整見證</a></main><script type="module" src="../testimony-share-landing.mjs?v=20261024-shareimage1"></script></body></html>\n`;
 return {id:story.id,revision,url,image:image.url,html};
}
export async function buildSharePages(result,root){
 if(result?.ok!==true||!Array.isArray(result.items)||result.items.length>200)throw Error('public_feed_unavailable');
 const pages=(await Promise.all(result.items.map(prepareSharePage))).filter(Boolean),manifest=Object.fromEntries(pages.map(p=>[p.id,p.revision]));
 const dir=path.join(root,'testimonies');await fs.mkdir(dir,{recursive:true});
 // Only this generator's UUID filenames are removed; no unrelated website files.
 for(const file of await fs.readdir(dir)){if(/^[0-9a-f-]{36}\.html$/i.test(file)&&!Object.hasOwn(manifest,file.slice(0,-5)))await fs.unlink(path.join(dir,file));}
 for(const p of pages)await fs.writeFile(path.join(dir,p.id+'.html'),p.html);
 await fs.writeFile(path.join(root,'testimony-share-pages.mjs'),'// Generated from confirmed public API fields; no pending submissions.\nexport const sharePages='+JSON.stringify(manifest,null,2)+';\n');return pages;
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 const response=await fetch('https://aqanuwilmvdtlzuqlrau.supabase.co/functions/v1/testimony-intake?action=public',{cache:'no-store',signal:AbortSignal.timeout(20000)});if(!response.ok)throw Error('public_feed_unavailable');
 const pages=await buildSharePages(await response.json(),fileURLToPath(new URL('../',import.meta.url)));console.log(JSON.stringify({publishedSharePages:pages.length,imagesFromStory:true}));
}
