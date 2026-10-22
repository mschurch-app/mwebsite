const ENDPOINT='https://aqanuwilmvdtlzuqlrau.supabase.co/functions/v1/testimony-intake?action=public';
const section=document.querySelector('#testimonies'),root=document.querySelector('#testimony-cards'),dialog=document.querySelector('#testimony-detail');
const node=(tag,text)=>{const n=document.createElement(tag);if(text)n.textContent=text;return n;};
function openStory(story){const body=document.querySelector('#testimony-detail-body');body.replaceChildren(node('small',story.category),node('h2',story.title),node('small',story.display_name),node('p',story.body));for(const m of story.media){const el=node(m.kind==='video'?'video':'img');el.src=m.url;if(m.kind==='video'){el.controls=true;el.playsInline=true;el.preload='metadata';}else el.alt=story.title+'的分享照片';body.append(el);}dialog.showModal();document.body.classList.add('testimony-dialog-open');}
function close(){dialog.close();}
document.querySelector('#testimony-close')?.addEventListener('click',close);
dialog?.addEventListener('click',event=>{if(event.target===dialog)close();});
dialog?.addEventListener('close',()=>{dialog.querySelectorAll('video').forEach(v=>v.pause());document.body.classList.remove('testimony-dialog-open');});
if(section&&root)fetch(ENDPOINT,{cache:'no-store',credentials:'omit',signal:AbortSignal.timeout(15000)}).then(async response=>{if(!response.ok)throw Error('unavailable');return response.json();}).then(result=>{
 if(!result.ok||!Array.isArray(result.items)||!result.items.length)return;
 for(const story of result.items){const card=node('article');card.className='testimony-card';const image=node('img'),copy=node('div'),read=node('button');image.src=story.media.find(m=>m.kind==='photo')?.url||'assets/testimonies/valley.svg';image.alt='';image.loading='lazy';read.type='button';read.textContent='閱讀見證 ↗';read.onclick=()=>openStory(story);copy.append(node('small',story.category+' · '+story.display_name),node('h3',story.title),node('p',story.body.slice(0,85)+(story.body.length>85?'…':'')),read);card.append(image,copy);root.append(card);}section.hidden=false;
}).catch(()=>{/* With no confirmed public response, leave the showcase hidden; the submission entry remains usable. */});
