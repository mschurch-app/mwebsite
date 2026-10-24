import {weeklyTestimonySelections} from './weekly-testimony-selections.mjs?v=20261024-weekly1';
import {applyPublishedLayout} from './testimony-published-layouts.mjs?v=20261024-published1';
import {resolveStoryIllustrations} from './testimony-illustrations.mjs?v=20261024-story2';

const ENDPOINT='https://aqanuwilmvdtlzuqlrau.supabase.co/functions/v1/testimony-intake?action=public';
const UUID=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const DAY=86400000;
const make=(doc,tag,text='',className='')=>{const element=doc.createElement(tag);element.textContent=text;element.className=className;return element;};

export function selectWeeklyStories(items,serviceDate,{church='M+',selections=weeklyTestimonySelections}={}){
 if(church!=='M+'||!/^\d{4}-\d{2}-\d{2}$/.test(serviceDate||''))return [];
 const service=Date.parse(serviceDate+'T00:00:00+08:00');
 if(!Number.isFinite(service)||new Date(service+8*3600000).toISOString().slice(0,10)!==serviceDate)return [];
 const start=service-6*DAY,end=service+DAY,pinned=selections[serviceDate],seen=new Set();
 return (Array.isArray(items)?items:[]).filter(story=>{
  if(!story||!UUID.test(story.id||'')||!String(story.title||'').trim()||(story.status&&story.status!=='published')||seen.has(story.id))return false;
  const published=Date.parse(story.published_at);if(!Number.isFinite(published)||published<start||published>=end||pinned&&!pinned.includes(story.id))return false;
  seen.add(story.id);return true;
 }).sort((a,b)=>pinned?pinned.indexOf(a.id)-pinned.indexOf(b.id):Date.parse(b.published_at)-Date.parse(a.published_at));
}

export function createWeeklyTestimonySection(doc){
 const section=make(doc,'section','','section bulletin-section weekly-testimony');section.id='weekly-testimony';section.dataset.section='testimony';section.setAttribute('aria-labelledby','weekly-testimony-heading');
 const heading=make(doc,'div','','section-head'),symbol=make(doc,'span','☁','section-icon');symbol.setAttribute('aria-hidden','true');
 const copy=make(doc,'div'),title=make(doc,'h2','雲彩見證');title.id='weekly-testimony-heading';copy.append(title,make(doc,'p','在彼此的故事裡，看見神的恩典。','section-sub'));heading.append(symbol,copy);section.append(heading);
 const content=make(doc,'div','','weekly-testimony__content');section.append(content);renderInvitation(content);return section;
}

function renderInvitation(content,{unavailable=false}={}){
 const doc=content.ownerDocument,link=make(doc,'a','','weekly-testimony__card weekly-testimony__invitation');link.href='share-testimony.html';
 const image=make(doc,'img');image.src='assets/testimonies/share-invitation-v1.webp';image.alt='雲彩見證：你的故事，也能成為祝福。分享神在你生命中的恩典。';image.loading='lazy';image.width=1536;image.height=1024;
 const copy=make(doc,'div','','weekly-testimony__copy');copy.append(make(doc,'small','邀請你分享'),make(doc,'h3','你的故事，也能成為祝福'),make(doc,'p','無論是一段生命的轉變、一個禱告的回應，或日常裡的小小恩典，都值得被記錄。邀請你分享神在你生命中的作為。'),make(doc,'span','我要分享見證 ↗','weekly-testimony__action'));
 link.append(image,copy);content.replaceChildren(link);
 if(unavailable)content.append(make(doc,'p','目前暫時無法載入本週見證，仍歡迎你分享自己的故事。','weekly-testimony__status'));
}

function mediaSource(story){
 const media=Array.isArray(story.media)?story.media:[],photo=media.find(m=>m.slot===story.coverSlot&&m.kind==='photo')||media.find(m=>m.kind==='photo');
 if(photo){try{const url=new URL(photo.url);if(url.origin==='https://aqanuwilmvdtlzuqlrau.supabase.co'&&url.pathname==='/functions/v1/testimony-intake'&&url.searchParams.get('id')===story.id&&url.searchParams.get('media')===String(photo.slot))return {url:url.href,alt:story.title+'｜'+story.display_name+'的見證照片'};}catch{/* Invalid media falls back to an approved illustration. */}}
 return resolveStoryIllustrations(story.presentation)[0]||{url:'assets/testimonies/valley.svg',alt:'山谷與晨光的見證示意插圖'};
}

export async function populateWeeklyTestimony(section,bulletin,{fetcher=fetch}={}){
 const content=section.querySelector('.weekly-testimony__content');
 try{
  const response=await fetcher(ENDPOINT,{cache:'no-store',credentials:'omit',signal:AbortSignal.timeout(15000)}),data=await response.json();
  if(!response.ok||data.ok!==true||!Array.isArray(data.items))throw Error('unavailable');
  const stories=await Promise.all(selectWeeklyStories(data.items,bulletin.service_date,{church:bulletin.church_id||'M+'}).map(applyPublishedLayout));
  if(!section.isConnected)return;
  if(!stories.length){renderInvitation(content);return;}
  const doc=section.ownerDocument,cards=stories.map(story=>{
   const link=make(doc,'a','','weekly-testimony__card');link.href='index.html?testimony='+encodeURIComponent(story.id)+'#testimonies';
   const media=mediaSource(story),image=make(doc,'img');image.src=media.url;image.alt=media.alt;image.loading='lazy';image.width=1536;image.height=1024;
   const copy=make(doc,'div','','weekly-testimony__copy');copy.append(make(doc,'small',(story.display_name||'家人')+' · 生命見證'),make(doc,'h3',story.title),make(doc,'p',String(story.body||'').slice(0,110)+(String(story.body||'').length>110?'…':'')),make(doc,'span','閱讀完整見證 ↗','weekly-testimony__action'));link.append(image,copy);return link;
  });content.replaceChildren(...cards);
 }catch{if(section.isConnected)renderInvitation(content,{unavailable:true});}
}
