import {selectStoryImage,validateStoryId,WEBSITE} from './testimony-share-media.mjs?v=20261024-shareimage1';
const node=(tag,text,cls)=>{const e=document.createElement(tag);if(text)e.textContent=text;if(cls)e.className=cls;return e;};
export function storyPermalink(id){validateStoryId(id);return WEBSITE+'/?testimony='+encodeURIComponent(id)+'#testimonies';}
export function storyShareLinks(story){const canonical=storyPermalink(story.id),page=story.share_url;const url=typeof page==='string'&&page.startsWith(WEBSITE+'/testimonies/'+story.id+'.html?v=')&&/\?v=[0-9a-f]{16}$/.test(page)?page:canonical;return {url,previewReady:url!==canonical,facebook:'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url),line:'https://social-plugins.line.me/lineit/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(story.title)};}
export async function createShareCard(story){
 const source=selectStoryImage(story);if(!source)throw Error('story_image_missing');
 const response=await fetch(source.url,{mode:'cors',credentials:'omit',cache:'no-store',signal:AbortSignal.timeout(15000)});if(!response.ok)throw Error('story_image_unavailable');
 const blob=await response.blob();if(!/^image\/(jpeg|png|webp)$/.test(blob.type)||blob.size>16000000)throw Error('story_image_unavailable');
 const image=new Image(),url=URL.createObjectURL(blob);try{image.src=url;await image.decode();const scale=Math.min(1,2048/Math.max(image.naturalWidth,image.naturalHeight));const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(image.naturalWidth*scale));canvas.height=Math.max(1,Math.round(image.naturalHeight*scale));const c=canvas.getContext('2d');if(!c)throw Error('card_unavailable');c.drawImage(image,0,0,canvas.width,canvas.height);const result=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!result)throw Error('card_unavailable');return new File([result],'mplus-testimony.png',{type:'image/png'});}finally{URL.revokeObjectURL(url);}
}
export function createStoryShares(story){
 const links=storyShareLinks(story),root=node('section',null,'testimony-shares');root.setAttribute('aria-label','分享這篇見證');root.append(node('p','分享這篇見證','testimony-shares__label'));
 const actions=node('div',null,'testimony-shares__actions');
 for(const [name,key] of [['Facebook','facebook'],['LINE','line']]){const a=node('a',name);a.href=links[key];a.target='_blank';a.rel='noopener noreferrer';a.setAttribute('aria-label','分享這篇見證至 '+name+'（另開視窗）');if(!links.previewReady){a.addEventListener('click',e=>{e.preventDefault();void openImageShare(name,a);});}actions.append(a);}
 const ig=node('button','IG');ig.type='button';ig.setAttribute('aria-label','分享這篇見證至 Instagram');actions.insertBefore(ig,actions.lastChild);root.append(actions);
 const dialog=node('dialog',null,'testimony-share-dialog'),h=node('h3','分享到 Instagram'),hint=node('p'),preview=node('img'),caption=node('textarea'),status=node('p',null,'testimony-share-status'),controls=node('div',null,'testimony-shares__actions');
 const titleId='ig-share-'+story.id;h.id=titleId;dialog.setAttribute('aria-labelledby',titleId);caption.readOnly=true;caption.setAttribute('aria-label','分享文字與連結');caption.value=story.title+'\n'+story.display_name+'｜雲彩見證\n\n'+story.body.slice(0,300)+(story.body.length>300?'…':'')+'\n\n閱讀完整見證：\n'+links.url;
 preview.alt='這篇見證內的分享圖片';preview.hidden=true;status.setAttribute('role','status');status.setAttribute('aria-live','polite');
 const copy=node('button','複製文字與連結'),native=node('button','開啟手機分享'),download=node('a','下載分享圖'),close=node('button','關閉');for(const b of [copy,native,close])b.type='button';native.disabled=true;download.hidden=true;download.download='mplus-testimony.png';controls.append(copy,native,download);dialog.append(h,hint,preview,caption,controls,status,close);root.append(dialog);
 let file=null,objectUrl=null,generation=0,platform='Instagram',opener=ig;
 const cleanup=()=>{generation++;if(objectUrl)URL.revokeObjectURL(objectUrl);objectUrl=null;file=null;preview.removeAttribute('src');preview.hidden=true;download.hidden=true;native.disabled=true;};
 dialog.addEventListener('close',()=>{cleanup();if(opener.isConnected)opener.focus({preventScroll:true});});close.onclick=()=>dialog.close();
 copy.onclick=async()=>{try{if(!navigator.clipboard?.writeText)throw Error();await navigator.clipboard.writeText(caption.value);status.textContent='已複製文字與連結，可貼到 '+platform+'。';}catch{caption.focus();caption.select();status.textContent='請長按或按 ⌘C 複製上方文字與連結。';}};
 native.onclick=async()=>{if(!file)return;try{await navigator.share({files:[file]});status.textContent='分享選單已完成；請在 '+platform+' 確認貼文內容。';}catch(error){status.textContent=error.name==='AbortError'?'已取消分享，可再次開啟或下載圖片。':'無法開啟分享選單，請下載圖片後在 '+platform+' 發佈。';}};
 download.onclick=()=>{status.textContent='已交由瀏覽器下載圖片；請在 '+platform+' 選取這張圖片並貼上文字。';};
 async function openImageShare(target='Instagram',trigger=ig){platform=target;opener=trigger;h.textContent='分享到 '+platform;hint.textContent='使用這篇見證內的圖片。先複製文字與連結，再開啟分享選單選擇 '+platform+'；也可下載圖片後自行轉貼。';dialog.showModal();status.textContent='正在載入這篇見證的圖片…';const ticket=++generation;try{const result=await createShareCard(story);if(!dialog.open||ticket!==generation)return;file=result;objectUrl=URL.createObjectURL(file);preview.src=objectUrl;preview.hidden=false;download.href=objectUrl;download.hidden=false;native.disabled=!(navigator.share&&navigator.canShare?.({files:[file]}));status.textContent=selectStoryImage(story)?.kind==='illustration'?'已使用內文的 AI 示意插圖。':'已使用這篇見證內的照片。';if(native.disabled)status.textContent+=' 請下載圖片後自行轉貼。';}catch(error){if(dialog.open&&ticket===generation)status.textContent=error.message==='story_image_missing'?'這篇見證目前沒有可分享的圖片，仍可複製文字與連結。':'這篇見證的圖片暫時無法載入，請關閉後重試；仍可複製文字與連結。';}}
 ig.onclick=()=>void openImageShare('Instagram',ig);

 return root;
}
