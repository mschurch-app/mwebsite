import {initSharing} from './sharing.mjs?v=73b85513515c';
// Keep navigation inside the book; each dialog restores its initiating control.
const sharing=initSharing();
const triggers=new WeakMap();
function openDialog(dialog,trigger){if(!dialog)return;triggers.set(dialog,trigger);dialog.showModal();}
document.querySelectorAll('[data-share]').forEach(button=>button.addEventListener('click',()=>{if(button.hasAttribute('data-share-now')&&sharing.shareLink())return;button.closest('dialog')?.close();openDialog(document.getElementById('share-dialog'),button);sharing.prepare();}));
if(document.getElementById('article-share-data')){const warm=()=>sharing.prepare();if('requestIdleCallback' in window)requestIdleCallback(warm,{timeout:1500});else setTimeout(warm,250);}
document.querySelectorAll('[data-contents]').forEach(button=>button.addEventListener('click',()=>openDialog(document.getElementById('contents-dialog'),button)));
document.querySelectorAll('dialog').forEach(dialog=>{
  dialog.querySelectorAll('[data-close],.dialog-close').forEach(button=>button.addEventListener('click',()=>dialog.close()));
  dialog.addEventListener('close',()=>{const trigger=triggers.get(dialog);if(trigger?.closest('dialog')&&!trigger.closest('dialog').open){document.getElementById('next-page')?.focus({preventScroll:true});}else trigger?.focus({preventScroll:true});});
});
document.getElementById('copy-share')?.addEventListener('click',async()=>{
  const text=document.getElementById('share-copy');
  try{await navigator.clipboard.writeText(text.value);document.getElementById('share-status').textContent='已複製轉載文案。';}
  catch{text.focus();text.select();document.getElementById('share-status').textContent='請長按或使用複製快捷鍵，複製已選取的文案。';}
});

const source=document.getElementById('article-source');
if(source){
  const container=document.getElementById('book-pages');
  const previous=document.getElementById('previous-page');
  const next=document.getElementById('next-page');
  const picker=document.getElementById('page-select');
  const book=document.querySelector('.reading-book');
  const blocks=Array.from(source.content.children,node=>({tag:node.tagName.toLowerCase(),text:node.textContent}));
  let pages=[],current=0,ready=false,lastSize='';
  const params=new URL(location.href).searchParams;
  const requested=Number(params.get('page'));
  const requestedPosition=Number(params.get('at'));

  function turn(index,{updateUrl=true,animate=true}={}){
    current=Math.max(0,Math.min(pages.length-1,index));
    pages.forEach((page,i)=>{page.hidden=i!==current;page.classList.remove('is-turning');});
    if(animate){void pages[current].offsetWidth;pages[current].classList.add('is-turning');}
    previous.disabled=current===0;
    next.textContent=current===pages.length-1?'讀完了 →':'下一頁 →';
    next.setAttribute('aria-label',current===pages.length-1?'讀完本篇':'下一頁');
    picker.value=String(current);
    document.getElementById('paper-number').textContent=String(current+1).padStart(2,'0');
    document.getElementById('page-section').textContent=pages.slice(0,current+1).flatMap(page=>Array.from(page.querySelectorAll('h2,h3'))).at(-1)?.textContent||document.querySelector('.reader-toolbar>span').textContent;
    document.getElementById('page-status').textContent=`第 ${current+1} 頁，共 ${pages.length} 頁`;
    if(updateUrl){const url=new URL(location.href);url.searchParams.set('page',String(current+1));url.searchParams.set('at',pages[current].dataset.start);url.searchParams.set('sheet',pages[current].dataset.kind);history.replaceState(null,'',url);}
  }

  // Measure actual typography instead of guessing a fixed character count.
  // Every split is a substring of the supplied text; no wording is rewritten.
  function layout(){
    const size=`${container.clientWidth}:${container.clientHeight}`;
    if(size===lastSize&&ready)return;
    const anchorKind=ready?pages[current].dataset.kind:params.get('sheet');
    const anchor=ready?Number(pages[current].dataset.start):(Number.isFinite(requestedPosition)&&requestedPosition>0?requestedPosition:0);
    lastSize=size;
    const illustrated=Boolean(document.getElementById('corner-opening'));
    const openingWidth=Math.min(560,container.clientWidth*(container.clientWidth<450?.96:.88));
    const openingSpace=illustrated?Math.min(container.clientHeight*.59,openingWidth*630/1200+16):0;
    const closingSpace=illustrated?Math.min(230,Math.max(175,container.clientHeight*.52)):0;
    const height=Math.max(80,container.clientHeight-2);
    container.replaceChildren();pages=[];
    let offset=0,pendingHeadings=[];
    function newPage(){const node=document.createElement('section');node.className='book-page is-measuring';node.dataset.kind='text';node.dataset.start=String(offset);container.append(node);return node;}
    let page=newPage();
    function append(tag,text){const node=document.createElement(tag);node.textContent=text;page.append(node);return node;}
    const fits=()=>page.getBoundingClientRect().height<=height-(pages.length===0?openingSpace:0);
    function finish(){if(!page.children.length)return;page.classList.remove('is-measuring');page.hidden=true;page.dataset.page=String(pages.length+1);page.setAttribute('aria-label',`第 ${pages.length+1} 頁`);pages.push(page);page=newPage();}
    for(const block of blocks){
      if(block.tag!=='p'){pendingHeadings.push(block);continue;}
      let headingNodes=pendingHeadings.map(h=>append(h.tag,h.text));
      // Keep headings with at least the beginning of their paragraph.
      let probe=append('p',block.text.slice(0,30));
      if(!fits()&&page.children.length>headingNodes.length+1){probe.remove();headingNodes.forEach(node=>node.remove());finish();headingNodes=pendingHeadings.map(h=>append(h.tag,h.text));}
      else probe.remove();
      offset+=pendingHeadings.reduce((sum,h)=>sum+h.text.length,0);pendingHeadings=[];
      let rest=block.text;
      while(rest){
        let paragraph=append('p',rest);
        if(fits()){offset+=rest.length;rest='';break;}
        // Find the longest prefix fitting this sheet, then prefer punctuation.
        let low=0,high=rest.length;
        while(low<high){const middle=Math.ceil((low+high)/2);paragraph.textContent=rest.slice(0,middle);if(fits())low=middle;else high=middle-1;}
        const candidate=rest.slice(0,low);
        const breaks=Array.from(candidate.matchAll(/[。！？；，、：」』]/gu));
        const boundary=breaks.at(-1)?.index+1;
        let length=boundary>=low*.6?boundary:low;
        if(length===0){paragraph.remove();if(page.children.length){finish();continue;}length=1;paragraph=append('p',rest.slice(0,1));}
        paragraph.textContent=rest.slice(0,length);
        offset+=length;rest=rest.slice(length);
        if(rest)finish();
      }
    }
    for(const heading of pendingHeadings){append(heading.tag,heading.text);offset+=heading.text.length;}
    finish();page.remove();
    const last=pages.at(-1);
    last.hidden=false;last.classList.add('is-measuring');
    if(closingSpace&&last.getBoundingClientRect().height>height-closingSpace){
      // Reflow only the final sheet, leaving the other text pages unchanged.
      const prefix=document.createElement('section');
      prefix.className='book-page is-measuring';prefix.dataset.kind='text';prefix.dataset.start=last.dataset.start;
      container.insertBefore(prefix,last);
      const endingFits=()=>last.getBoundingClientRect().height<=height-closingSpace;
      while(!endingFits()||/H[23]/.test(prefix.lastElementChild?.tagName||'')){
        const first=last.firstElementChild;
        if(first.tagName!=='P'||last.children.length>1){prefix.append(first);continue;}
        const text=first.textContent;
        let low=/H[23]/.test(prefix.lastElementChild?.tagName||'')?Math.min(30,text.length-1):0,high=text.length-1;
        while(low<high){const mid=Math.floor((low+high)/2);first.textContent=text.slice(mid);if(endingFits())high=mid;else low=mid+1;}
        let cut=low;
        const boundary=text.slice(cut).search(/[。！？；，、：]/u);
        if(boundary>=0&&cut+boundary+1<text.length)cut+=boundary+1;
        if(cut===0)break;
        const paragraph=document.createElement('p');paragraph.textContent=text.slice(0,cut);prefix.append(paragraph);first.textContent=text.slice(cut);
      }
      last.dataset.start=String(Number(prefix.dataset.start)+prefix.textContent.length);
      prefix.classList.remove('is-measuring');prefix.hidden=true;
      pages.splice(-1,1,prefix,last);
    }
    last.classList.remove('is-measuring');last.hidden=true;
    pages.forEach((page,index)=>{page.dataset.page=String(index+1);page.setAttribute('aria-label',`第 ${index+1} 頁`);});
    for(const kind of ['opening','closing']){
      const template=document.getElementById(`corner-${kind}`);
      if(!template)continue;
      const target=kind==='opening'?pages[0]:pages.at(-1);
      const figure=template.content.firstElementChild.cloneNode(true),img=figure.querySelector('img');
      const width=Number(img.getAttribute('width')),height=Number(img.getAttribute('height'));
      const availableHeight=kind==='opening'?openingSpace:closingSpace;
      const maxWidth=kind==='opening'?openingWidth:180;
      const scale=Math.min(maxWidth/width,(availableHeight-12)/height);
      figure.style.width=`${width*scale}px`;figure.style.height=`${height*scale}px`;
      target.classList.add('has-corner',`has-${kind}-art`);target.append(figure);
    }
    picker.replaceChildren(...pages.map((_,index)=>new Option(String(index+1),String(index))));
    document.getElementById('page-total').textContent=` / ${pages.length}`;
    let target=0;
    if(anchorKind==='closing')target=pages.length-1;
    else if(anchorKind==='opening')target=0;
    else if(ready||params.has('at')||anchorKind==='text'){
      const textPages=pages.filter(page=>page.dataset.kind==='text');
      const after=textPages.findIndex(page=>Number(page.dataset.start)>anchor);
      target=pages.indexOf(textPages[after<0?textPages.length-1:Math.max(0,after-1)]);
    }else if(Number.isInteger(requested)&&requested>1)target=Math.min(requested-1,pages.length-1);
    ready=true;turn(target,{animate:false});
  }
  previous.addEventListener('click',()=>{turn(current-1);if(previous.disabled)next.focus({preventScroll:true});});
  next.addEventListener('click',()=>{if(current===pages.length-1)openDialog(document.getElementById('chapter-end'),next);else turn(current+1);});
  picker.addEventListener('change',()=>turn(Number(picker.value)));
  document.addEventListener('keydown',event=>{
    if(document.querySelector('dialog[open]')||event.altKey||event.ctrlKey||event.metaKey||/INPUT|SELECT|TEXTAREA/.test(event.target.tagName))return;
    if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();turn(current+(event.key==='ArrowRight'?1:-1));}
  });
  let touch;
  book.addEventListener('touchstart',event=>{if(event.touches.length===1)touch={x:event.touches[0].clientX,y:event.touches[0].clientY};},{passive:true});
  book.addEventListener('touchend',event=>{
    if(!touch||!event.changedTouches.length||window.getSelection()?.toString()){touch=null;return;}
    const dx=event.changedTouches[0].clientX-touch.x,dy=event.changedTouches[0].clientY-touch.y;
    if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.8)turn(current+(dx<0?1:-1));
    touch=null;
  },{passive:true});
  book.addEventListener('touchcancel',()=>{touch=null;},{passive:true});
  layout();
  document.fonts.ready.then(()=>{lastSize='';layout();});
  let frame;
  new ResizeObserver(()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(layout);}).observe(container);
}
