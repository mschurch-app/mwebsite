import {bindStoryDialog} from './testimony-story-layout.mjs?v=20261024-story2';
import {resolveStoryIllustrations} from './testimony-illustrations.mjs?v=20261024-story2';
import {applyPublishedLayout} from './testimony-published-layouts.mjs?v=20261024-published1';
const ENDPOINT='https://aqanuwilmvdtlzuqlrau.supabase.co/functions/v1/testimony-intake?action=public';
const section=document.querySelector('#testimonies'),root=document.querySelector('#testimony-cards'),dialog=document.querySelector('#testimony-detail');
const node=(tag,text)=>{const n=document.createElement(tag);if(text)n.textContent=text;return n;};
const openStory=dialog?bindStoryDialog(dialog,{sharing:true}):()=>{};
if(section&&root)fetch(ENDPOINT,{cache:'no-store',credentials:'omit',signal:AbortSignal.timeout(15000)}).then(async response=>{if(!response.ok)throw Error('unavailable');return response.json();}).then(async result=>{
 if(!result.ok||!Array.isArray(result.items)||!result.items.length)return;
 const stories=await Promise.all(result.items.map(applyPublishedLayout));let requested=null;
 for(const story of stories){const card=node('article');card.className='testimony-card'+(stories.length===1?' testimony-card--featured':'');const image=node('img'),copy=node('div'),read=node('button');image.src=(story.media.find(m=>m.slot===story.coverSlot)||story.media.find(m=>m.kind==='photo'))?.url||resolveStoryIllustrations(story.presentation)[0]?.url||'assets/testimonies/valley.svg';image.alt='';image.loading='lazy';read.type='button';read.textContent='閱讀見證 ↗';read.onclick=()=>openStory(story,read);copy.append(node('small',story.category+' · '+story.display_name),node('h3',story.title),node('p',story.body.slice(0,85)+(story.body.length>85?'…':'')),read);card.append(image,copy);root.append(card);if(new URLSearchParams(location.search).get('testimony')===story.id)requested={story,read};}section.hidden=false;if(requested)openStory(requested.story,requested.read);
}).catch(()=>{/* With no confirmed public response, leave the showcase hidden; the submission entry remains usable. */});
