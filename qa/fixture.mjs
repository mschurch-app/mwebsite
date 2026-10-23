import http from 'node:http';import fs from 'node:fs/promises';import path from 'node:path';import {fileURLToPath} from 'node:url';
import {prepareSharePage} from '../scripts/build-testimony-shares.mjs';
import {buildStoryPresentation} from '../testimony-layout-plan.mjs';
const root=path.resolve(fileURLToPath(new URL('../',import.meta.url)));
export const storyBody=[
'那段日子，我常在傍晚到海邊走一走。生活中的事情沒有立刻得到答案，但在安靜裡，我開始練習把心裡的重擔交給神。這是一篇版面測試用的合成見證，照片為排版示意，沒有真實投稿人的個人資料。',
'第一次向朋友說出自己的需要時，我其實很緊張。我原本以為，必須等到一切都整理好了，才能夠開口。然而，對方沒有催促我，只是耐心聽我說，也陪我一起禱告。那些很平凡的關心，讓我重新感受到自己並不孤單。後來我才明白，恩典有時候並不是突如其來的大事，而是在日常裡，有人願意留下來陪伴。那天下午，我們坐在海邊，看著光慢慢落在水面，談著最近的生活，也為彼此掛心的事情禱告。',
'後來，事情仍然需要一步一步處理，但我開始留意生活中值得感謝的小事。一句問候、一頓簡單的飯、一段有人願意傾聽的時間，都成為繼續往前的力量。我把這些時刻記下來，提醒自己，即使眼前還有未知，也可以先走今天的一步。',
'我也練習不把所有的問題都留在心裡。遇到困難時，試著和家人說一說，和小組的朋友一起禱告。有些問題很快有了方向，有些還需要等待，但我慢慢學會，在等候中仍然照顧自己，也接受別人的幫助。',
'回頭看這段路，最珍貴的並不是每件事都照著我的計畫發生，而是我重新學會信任，也重新有了與人連結的勇氣。盼望這一份簡單的分享，能鼓勵正在經歷相似處境的人：你可以慢慢來，也可以勇敢求助。',
'現在，每當我再走到海邊，我仍會把心裡的感謝說出來。我相信，那些曾經陪伴我的愛，也能透過我的生命繼續傳遞出去。這段合成文字在此結束，供核對照片之後仍有完整的收尾段落。'
].join('\n\n');
export function makeStory(origin,kind='normal'){
 const body=kind==='short'?'這是一篇短篇合成見證。':kind==='media-only'?'':storyBody;
 const count=kind==='illustration'||kind==='noimage'?0:kind==='many'||kind==='short'||kind==='media-only'?8:3;
 const media=Array.from({length:count},(_,i)=>({slot:i,kind:'photo',url:origin+'/qa/photo/'+(i%3+1)+'.jpg'}));
 if(kind==='broken')media[0].url=origin+'/missing-photo.jpg';
 if(kind==='many')media.push({slot:8,kind:'video',url:origin+'/qa/synthetic-video.mp4'});
 const s={id:'71000000-0000-4000-8000-000000000010',category:'禱告與盼望',display_name:'匿名分享 · 合成排版示意',title:'在平凡的日子裡，看見恩典',body,media};s.presentation=buildStoryPresentation(body,media);if(kind==='illustration')s.presentation.illustrations=[{key:'quiet-waiting-v1',after:0,style:'right'}];return s;
}
export async function startFixture(port=0){
 const server=http.createServer(async(req,res)=>{
  const origin='http://127.0.0.1:'+server.address().port,u=new URL(req.url,origin);
  if(u.pathname==='/qa/public'&&u.searchParams.get('case')==='published'&&process.env.PUBLISHED_TESTIMONY_FIXTURE){res.setHeader('content-type','application/json');res.end(await fs.readFile(process.env.PUBLISHED_TESTIMONY_FIXTURE));return;}
  if(u.pathname==='/testimony-share-pages.mjs'){const p=await prepareSharePage(makeStory(origin,u.searchParams.get('case')||'normal'));res.setHeader('content-type','text/javascript');res.end("const c=new URLSearchParams(location.search).get('case')||'normal';const r=await fetch('/qa/share-manifest?case='+encodeURIComponent(c));export const sharePages=await r.json();");return;}
  if(u.pathname==='/qa/share-manifest'){const p=await prepareSharePage(makeStory(origin,u.searchParams.get('case')||'normal'));res.setHeader('content-type','application/json');res.end(JSON.stringify(p&&u.searchParams.get('case')!=='unprepared'?{[p.id]:p.revision}:{}));return;}
  if(u.pathname.startsWith('/testimonies/')){const p=await prepareSharePage(makeStory(origin,'normal'));res.setHeader('content-type','text/html; charset=utf-8');res.end(p.html);return;}
  if(u.pathname==='/qa/public'){res.setHeader('content-type','application/json');res.end(JSON.stringify({ok:true,items:u.searchParams.get('case')==='empty'?[]:[makeStory(origin,u.searchParams.get('case'))]}));return;}
  let file=path.resolve(root,'.'+(u.pathname==='/'?'/index.html':u.pathname));if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
  if(u.pathname.startsWith('/qa/photo/')){
   const i=Number(u.pathname.match(/\d+/)[0])-1;
   file=process.env.TESTIMONY_FIXTURE_PHOTOS?path.join(process.env.TESTIMONY_FIXTURE_PHOTOS,['bird-sea-sunlight.jpg','bird-coffee-and-bread.jpg','bird-seaside-companions.jpg'][i]):path.join(root,'faith-on-the-way/illustrations/',['jordan-river.jpg','jordan-river-wide.jpg','loaves-fish.jpg'][i]);
  }
  try{let data=await fs.readFile(file);if(file.endsWith('index.html'))data=Buffer.from(data.toString().replace(/<script\b(?![^>]*src="testimony-public\.mjs)[^>]*>[\s\S]*?<\/script>/gi,''));if(file.endsWith('/testimony-public.mjs'))data=Buffer.from(data.toString().replace("'https://aqanuwilmvdtlzuqlrau.supabase.co/functions/v1/testimony-intake?action=public'","'/qa/public?case='+encodeURIComponent(new URLSearchParams(location.search).get('case')||'normal')"));
   res.setHeader('content-type',file.endsWith('.html')?'text/html; charset=utf-8':/\.m?js$/.test(file)?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.svg')?'image/svg+xml':file.endsWith('.webp')?'image/webp':'image/jpeg');res.end(data);
  }catch{res.writeHead(404);res.end();}
 });await new Promise(r=>server.listen(port,'127.0.0.1',r));return {origin:'http://127.0.0.1:'+server.address().port,close:()=>new Promise(r=>server.close(r))};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){const f=await startFixture(Number(process.env.PORT)||57623);console.log(f.origin);}
