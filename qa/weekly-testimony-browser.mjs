import fs from 'node:fs/promises';import path from 'node:path';import assert from 'node:assert/strict';
const {chromium,webkit}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const root=path.resolve(new URL('../',import.meta.url).pathname),out=process.env.WEEKLY_TESTIMONY_RESULTS||'/private/tmp/weekly-testimony-qa';await fs.mkdir(out,{recursive:true});
const endpoint='https://aqanuwilmvdtlzuqlrau.supabase.co/functions/v1/testimony-intake',checks=[];
const id='4fe60b38-2fb2-4187-992d-0df2c894fb4d';
const story={id,display_name:'合成分享者',title:'在平凡日子裡，看見恩典',body:'這是一則合成見證，供週報版面與連結驗收。',category:'生命見證',published_at:'2026-10-23T15:16:46+00:00',media:[{slot:0,kind:'photo',url:endpoint+'?id='+id+'&media=0'}]};
const bulletin=date=>({church_id:'M+',service_date:date,title:'合成週報',sections:[{key:'news',title:'家人消息',items:[{label:'合成消息',body:'公開週報測試內容'}]},{key:'schedule',title:'主日服事安排',auto_schedule:true}]});
const engines=(process.env.WEEKLY_TESTIMONY_ENGINES||'chrome,webkit').split(',');
try{for(const [engine,type] of [['chrome',chromium],['webkit',webkit]].filter(([name])=>engines.includes(name))){
 const browser=await type.launch(engine==='chrome'?{executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true}:{headless:true});
 try{for(const width of [390,1440])for(const scenario of ['current','empty','failure','future-new']){
  const tag=engine+'-'+width+'-'+scenario,page=await browser.newPage({viewport:{width,height:1000},serviceWorkers:'block'}),errors=[];page.on('pageerror',e=>errors.push(e.message));
  const date=scenario==='empty'||scenario==='future-new'?'2026-11-01':'2026-10-25';
  await page.route('**/*',async route=>{const u=new URL(route.request().url());
   if(u.hostname==='cdn.jsdelivr.net')return route.fulfill({contentType:'text/javascript',body:'window.supabase={createClient:()=>({rpc:async()=>({data:'+JSON.stringify({bulletin:bulletin(date),schedule:{speaker:'合成同工'},schedule_roles:[{role_key:'speaker',label:'信息'}]})+'}),storage:{from:()=>({getPublicUrl:()=>({data:{publicUrl:""}})})}})};'});
   if(u.origin==='https://aqanuwilmvdtlzuqlrau.supabase.co'){
    if(u.searchParams.has('media'))return route.fulfill({contentType:'image/svg+xml',body:'<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600"><rect width="900" height="600" fill="#6d8875"/></svg>'});
    if(scenario==='failure')return route.fulfill({status:503,contentType:'application/json',body:'{"ok":false}'});
    const future={...story,id:'71000000-0000-4000-8000-000000000001',published_at:'2026-10-27T02:00:00+00:00',media:[],presentation:{paragraphs:[{},{}],illustrations:[{key:'quiet-waiting-v1',after:0,style:'right'}]}};
    return route.fulfill({contentType:'application/json',body:JSON.stringify({ok:true,items:scenario==='future-new'?[future,story]:[story]})});
   }
   if(u.origin!=='https://mchurch.online')return route.abort();
   try{const file=path.resolve(root,'.'+u.pathname);if(!file.startsWith(root+path.sep))return route.abort();const bytes=await fs.readFile(file);return route.fulfill({contentType:/\.html$/.test(file)?'text/html':/\.mjs$/.test(file)?'text/javascript':/\.css$/.test(file)?'text/css':/\.webp$/.test(file)?'image/webp':'image/svg+xml',body:bytes});}catch{return route.fulfill({status:404,body:''});}
  });
  const ok=(v,label)=>{assert(v,tag+': '+label);checks.push(tag+': '+label);};
  await page.goto('https://mchurch.online/weekly.html');
  if(scenario==='failure')await page.locator('.weekly-testimony__status').waitFor();
  else if(scenario==='current'||scenario==='future-new')await page.locator('.weekly-testimony__card:not(.weekly-testimony__invitation)').waitFor();
  else await page.locator('#schedule').waitFor();
  const feature=page.locator('#weekly-testimony');
  ok(await feature.count()===1,'permanent section appears exactly once');
  ok(await feature.evaluate(n=>n.nextElementSibling?.id==='schedule'),'feature immediately precedes service schedule');
  ok(await page.locator('#schedule').getByText('合成同工',{exact:true}).isVisible(),'existing service assignments retained');
  ok(await feature.evaluate(n=>n.scrollWidth<=n.clientWidth+1)&&await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'no horizontal overflow');
  const link=feature.locator('a');
  if(scenario==='current'){
   ok((await link.getAttribute('href')).includes('testimony='+id),'specific requested story link');
   ok((await feature.locator('img').getAttribute('src')).includes('media=0'),'real approved source photo');
  }else if(scenario==='future-new'){
   ok((await link.getAttribute('href')).includes('71000000-0000-4000-8000-000000000001'),'new week automatically uses new public story');
   ok((await feature.locator('img').getAttribute('src')).includes('quiet-waiting'),'approved illustration works without submitter photo');
  }else{
   ok(await link.getAttribute('href')==='share-testimony.html','invitation links directly to submission');
   ok((await feature.locator('img').getAttribute('src')).includes('share-invitation-v1.webp'),'evergreen artwork shown');
   ok(await feature.getByText(story.title,{exact:true}).count()===0,'old story not repeated');
  }
  await feature.locator('img').evaluate(img=>img.complete?null:new Promise(resolve=>{img.onload=resolve;img.onerror=resolve;}));
  ok(await feature.locator('img').evaluate(img=>img.naturalWidth>0),'card image loads');
  await link.focus();ok(await link.evaluate(n=>n===document.activeElement&&getComputedStyle(n).outlineStyle!=='none'),'keyboard focus visible');
  ok(errors.length===0,'no browser errors');
  if(scenario==='current'||scenario==='empty')await feature.screenshot({path:path.join(out,tag+'.png')});
  await page.close();console.log('PASS',tag);
 }}finally{await browser.close();}
}}finally{await fs.writeFile(path.join(out,'results.json'),JSON.stringify({checks,count:checks.length,synthetic:true,realIphone:false},null,2));}
console.log('TOTAL',checks.length);
