// Web Share leaves target selection and final publication to the reader.
export function initSharing({doc=document,nav=navigator,fetchImage=fetch,makeFile=(blob)=>new File([blob],'faith-on-the-way.jpg',{type:'image/jpeg'}),openWindow=(url)=>window.open(url,'_blank','noopener,noreferrer')}={}) {
  const status=doc.getElementById('share-status');
  const ig=doc.getElementById('instagram-share');
  const fb=doc.getElementById('facebook-share');
  if(!ig||!fb)return {prepare(){}};
  const preview=doc.body.dataset.publication!=='public';
  const help=doc.getElementById('instagram-help');
  const other=doc.getElementById('native-share');
  const say=text=>{status.textContent=text;};
  let file,loading;
  const url=doc.querySelector('link[rel="canonical"]')?.href;
  const validUrl=()=>{try{const parsed=new URL(url);return parsed.origin==='https://mchurch.online'&&parsed.pathname.startsWith('/faith-on-the-way/');}catch{return false;}};
  const supportsFiles=()=>!!(nav.share&&nav.canShare);
  function unavailable(){
    help.textContent='此瀏覽器無法分享圖片。請以手機 Safari／Chrome 開啟，或展開下方選項下載 IG 圖片。';
  }
  function prepare(){
    if(preview||loading||file)return loading;
    if(!supportsFiles()){unavailable();return;}
    ig.disabled=true;
    ig.setAttribute('aria-busy','true');
    loading=fetchImage('ig-card.jpg').then(response=>{
      if(!response.ok)throw Error('image unavailable');
      return response.blob();
    }).then(blob=>{
      if(blob.type!=='image/jpeg')throw Error('unexpected image');
      const ready=makeFile(blob);
      if(!nav.canShare({files:[ready]})){unavailable();return;}
      file=ready;
    }).catch(()=>{help.textContent='圖片尚未備妥，請下載 IG 圖片，或稍後再試。';})
      .finally(()=>{ig.disabled=false;ig.removeAttribute('aria-busy');loading=null;});
    return loading;
  }
  fb.addEventListener('click',()=>{
    if(preview){say('正式版會開啟 Facebook 分享視窗，帶入本頁閱讀連結，讓您確認發佈。');return;}
    if(!validUrl()){say('閱讀連結尚未備妥，請稍後再試。');return;}
    openWindow('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url));
    say('已要求開啟 Facebook 分享視窗；請在視窗內確認發佈。');
  });
  ig.addEventListener('click',async()=>{
    if(preview){say('正式版會帶入 IG 圖片，開啟手機分享選單。選擇 Instagram，再確認發佈；若未看到 IG，請使用下方下載圖片。');return;}
    if(!file){prepare();say('請待圖片備妥再點一次；若此瀏覽器不支援，請使用下方下載圖片。');return;}
    // No fetch/clipboard await before share: iOS requires this click's activation.
    ig.disabled=true;
    try{await nav.share({files:[file]});say('圖片已交給手機分享功能；請在 Instagram 完成發佈。');}
    catch(error){say(error.name==='AbortError'?'已取消分享。':'無法開啟分享，請以手機 Safari／Chrome 開啟，或下載 IG 圖片。');}
    finally{ig.disabled=false;}
  });
  if(other&&(preview||nav.share)){
    other.hidden=false;
    other.addEventListener('click',async()=>{
      if(preview){say('正式版會開啟手機分享選單，分享本頁閱讀連結。');return;}
      if(!validUrl())return;
      try{await nav.share({title:doc.title,url});say('閱讀連結已交給手機分享功能。');}
      catch(error){if(error.name!=='AbortError')say('請複製文案與連結分享。');}
    });
  }
  return {prepare};
}
