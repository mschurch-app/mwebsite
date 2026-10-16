// Native sharing hands content to the OS; it cannot select an app or confirm publication.
export function initSharing({doc=document,nav=navigator,fetchImage=fetch,makeFile=blob=>new File([blob],'faith-on-the-way.jpg',{type:'image/jpeg'}),createUrl=blob=>URL.createObjectURL(blob),revokeUrl=url=>URL.revokeObjectURL(url)}={}) {
  const ig=doc.getElementById('instagram-share'),fb=doc.getElementById('facebook-share');
  if(!ig||!fb)return {prepare(){}};
  const status=doc.getElementById('share-status'),help=doc.getElementById('instagram-help');
  const guide=doc.getElementById('image-share-dialog'),shareDialog=doc.getElementById('share-dialog');
  const image=doc.getElementById('share-image'),download=doc.getElementById('download-ig');
  const save=doc.getElementById('save-share-image'),other=doc.getElementById('native-share');
  const preview=doc.body.dataset.publication!=='public';
  const articleNode=doc.getElementById('article-share-data');
  const article=articleNode?JSON.parse(articleNode.textContent):null;
  const say=text=>{status.textContent=text;};
  const url=doc.querySelector('link[rel="canonical"]')?.href;
  const validUrl=()=>{try{const u=new URL(url);return u.origin==='https://mchurch.online'&&u.pathname.startsWith('/faith-on-the-way/');}catch{return false;}};
  let file,loading,objectUrl,nativePending=false,returnToShare=false;
  if(article){const intro=doc.querySelector('.share-intro');if(intro)intro.textContent=`分享〈${article.title}〉，陪另一個人走一程。`;}
  function canShareImage(){try{return !!(file&&nav.share&&nav.canShare?.({files:[file]}));}catch{return false;}}
  function setImage(blob){
    if(blob.type!=='image/jpeg')throw Error('unexpected image');
    file=makeFile(blob);objectUrl=createUrl(blob);
    for(const link of [download,save])if(link){link.href=objectUrl;link.download=(article?.label||'信仰在路上')+'-分享圖.jpg';}
    if(image)image.src=objectUrl;
    help.textContent=preview?'沙盒可檢查圖卡；FB／IG 交接僅示範，不會送出。':canShareImage()?'分享選單中選擇 Instagram；若沒有看到，請使用下方「儲存圖卡」。':'此瀏覽器無法直接分享圖片，請點下方「儲存圖卡」，再到 Instagram 選用。';
  }
  function prepare(){
    if(file)return Promise.resolve(file);
    if(loading)return loading;
    // A preview can render its chapter card locally without any external request.
    if(preview&&!article)return Promise.resolve();
    const blobPromise=article?Promise.resolve().then(()=>createArticleCard(doc,article)):fetchImage('ig-card.jpg').then(response=>{if(!response.ok)throw Error('image unavailable');return response.blob();});
    let timer;
    loading=Promise.race([blobPromise,new Promise((_,reject)=>{timer=setTimeout(()=>reject(Error('image timeout')),10000);})])
      .then(blob=>{setImage(blob);return file;})
      .catch(()=>{say('圖片暫時無法準備，請重試或先複製文案與連結。');})
      .finally(()=>{clearTimeout(timer);loading=null;});
    return loading;
  }
  async function showImage(){
    await prepare();
    if(!guide)return;
    if(!file&&!(preview&&!article))return;
    returnToShare=!!shareDialog?.open;
    shareDialog?.close();guide.showModal();
  }
  guide?.addEventListener('close',()=>{if(returnToShare&&!shareDialog.open){shareDialog.showModal();ig.focus();}returnToShare=false;});
  doc.getElementById('save-image')?.addEventListener('click',showImage);
  // Normal same-tab navigation avoids blocked window.open popups in in-app browsers.
  if(!preview&&validUrl())fb.href='https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url);
  fb.addEventListener('click',event=>{
    if(preview){event.preventDefault();say('正式版會在目前頁面開啟 Facebook。若顯示未登入，需先登入 Facebook；返回即可繼續閱讀。');}
    else if(!validUrl()){event.preventDefault();say('閱讀連結尚未備妥，請稍後再試。');}
  });
  ig.addEventListener('click',()=>{
    if(preview){say('正式版會嘗試開啟手機圖片分享選單；此處先檢查圖卡，無法交接時也能直接儲存。');return showImage();}
    if(!file){prepare();say('正在準備圖卡，稍後再點一次，或點「儲存圖卡」。');return;}
    if(nativePending||!canShareImage())return showImage();
    nativePending=true;
    say('請在手機分享選單選擇 Instagram。若沒有開啟，點「儲存圖卡」繼續。');
    // No await before share, and no disabled button while the OS promise is pending.
    try{
      return Promise.resolve(nav.share({files:[file]})).then(()=>say('已交給系統分享功能；是否發佈請在 Instagram 確認。'))
        .catch(error=>{if(error.name==='AbortError')say('已取消分享，仍可使用「儲存圖卡」。');else{say('此瀏覽器無法交接圖片，請使用「儲存圖卡」。');showImage();}})
        .finally(()=>{nativePending=false;});
    }catch{nativePending=false;say('無法開啟分享，請使用「儲存圖卡」。');return showImage();}
  });
  if(other&&(preview||nav.share)){
    other.hidden=false;
    other.addEventListener('click',async()=>{
      if(preview){say('正式版會開啟手機分享選單，分享本篇閱讀連結。');return;}
      if(!validUrl())return;
      try{await nav.share({title:doc.title,url});say('閱讀連結已交給系統分享功能。');}
      catch(error){if(error.name!=='AbortError')say('請複製文案與連結分享。');}
    });
  }
  doc.defaultView?.addEventListener('pagehide',()=>{if(objectUrl)revokeUrl(objectUrl);});
  return {prepare};
}

// A chapter's card carries its own title and reading URL, without borrowing another chapter's image.
export function createArticleCard(doc,article){
  const canvas=doc.createElement('canvas');canvas.width=1080;canvas.height=1350;
  const ctx=canvas.getContext('2d');
  if(!ctx)return Promise.reject(Error('Canvas unavailable'));
  ctx.fillStyle='#f8f6ef';ctx.fillRect(0,0,1080,1350);
  ctx.fillStyle='#e4eadb';ctx.fillRect(0,0,28,1350);
  ctx.fillStyle='#687065';ctx.font='26px sans-serif';ctx.fillText('M+ 大雅教會 · 信仰，在路上',90,110);
  ctx.strokeStyle='#c5cebd';ctx.beginPath();ctx.moveTo(90,155);ctx.lineTo(990,155);ctx.stroke();
  ctx.fillStyle='#687065';ctx.font='30px sans-serif';ctx.fillText(article.label,90,280);
  ctx.fillStyle='#344735';ctx.font='60px "Songti TC", "Noto Serif TC", serif';
  function lines(text,maxWidth){let line='',result=[];for(const char of text){if(ctx.measureText(line+char).width>maxWidth&&line){result.push(line);line=char;}else line+=char;}if(line)result.push(line);return result;}
  lines(article.title,880).forEach((line,i)=>ctx.fillText(line,90,400+i*95));
  ctx.fillStyle='#485d45';ctx.font='34px \"Songti TC\", serif';
  lines(article.summary||'',880).forEach((line,i)=>ctx.fillText(line,90,550+i*52));
  ctx.fillStyle='#687065';ctx.font='30px sans-serif';ctx.fillText(article.author+' 著',90,820);
  ctx.font='26px "Songti TC", serif';lines(article.bookTitle,870).forEach((line,i)=>ctx.fillText(line,90,895+i*46));
  ctx.fillStyle='#e4eadb';ctx.fillRect(90,1040,900,195);
  ctx.fillStyle='#485d45';ctx.font='30px sans-serif';ctx.fillText('讀完整篇，與你一起往前走。',125,1100);
  ctx.font='23px sans-serif';lines(article.url,820).forEach((line,i)=>ctx.fillText(line,125,1150+i*34));
  return new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(Error('Image unavailable')),'image/jpeg',0.92));
}
