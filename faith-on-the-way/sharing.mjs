// Web Share leaves target selection and final publication to the reader.
export function initSharing({doc=document,nav=navigator,fetchImage=fetch,makeFile=(blob)=>new File([blob],'faith-on-the-way.jpg',{type:'image/jpeg'}),openWindow=(url)=>window.open(url,'_blank','noopener,noreferrer')}={}) {
  const status=doc.getElementById('share-status');
  const ig=doc.getElementById('instagram-share');
  const fb=doc.getElementById('facebook-share');
  if(!ig||!fb)return {prepare(){}};
  const preview=doc.body.dataset.publication!=='public';
  const articleNode=doc.getElementById('article-share-data');
  const article=articleNode?JSON.parse(articleNode.textContent):null;
  if(article){
    const intro=doc.querySelector('.share-intro');
    if(intro)intro.textContent=`分享〈${article.title}〉，陪另一個人走一程。`;
    doc.getElementById('download-ig')?.addEventListener('click',async event=>{
      event.preventDefault();
      try{
        const blob=await createArticleCard(doc,article);
        const href=URL.createObjectURL(blob),link=doc.createElement('a');
        link.href=href;link.download=article.label+'-信仰在路上.jpg';link.click();
        setTimeout(()=>URL.revokeObjectURL(href),60000);
      }catch{status.textContent='圖片暫時無法產生，請複製本篇文案與連結分享。';}
    });
  }
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
    const image=article?createArticleCard(doc,article):fetchImage('ig-card.jpg').then(response=>{
      if(!response.ok)throw Error('image unavailable');
      return response.blob();
    });
    loading=image.then(blob=>{
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
    if(preview){say(article?`將分享〈${article.title}〉的專屬圖片。選擇 Instagram，再確認發佈。`:'正式版會帶入 IG 圖片，開啟手機分享選單。選擇 Instagram，再確認發佈；若未看到 IG，請使用下方下載圖片。');return;}
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
