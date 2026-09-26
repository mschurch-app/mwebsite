const PROJECT_URL='https://aqanuwilmvdtlzuqlrau.supabase.co';
const KEY='sb_publishable_-on9uPxVvSaERBEpkoc_xg_CYuANexJ';
const db=window.supabase.createClient(PROJECT_URL,KEY,{auth:{persistSession:false}});
const type=document.body.dataset.type;
const list=document.querySelector('#list');
const search=document.querySelector('#archive-search');
const yearSelect=document.querySelector('#archive-year');
const esc=value=>String(value||'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
let posts=[];
function setStatus(message,error=false){list.innerHTML=`<p class="empty${error?' error':''}">${esc(message)}</p>`;}
function plainText(html){const box=document.createElement('div');box.innerHTML=DOMPurify.sanitize(html||'');return(box.textContent||'').replace(/\s+/g,' ').trim();}
function excerpt(post){const stored=String(post.excerpt||'').trim();if(stored&&stored!=='歷史電子週報'&&stored!=='每週小組教材與討論內容')return stored;let text=plainText(post.content_html);if(type==='group_resource'){const topic=text.match(/【主題】\s*[：:]\s*(.*?)(?=【日期】|【本週讀經進度】|【本週核心經文】|$)/);if(topic?.[1])return topic[1].trim().slice(0,156);}text=text.replace(/【日期】[^【】]*/g,' ').replace(/【本週讀經進度】[^【】]*/g,' ').replace(/【本週核心經文】[^【】]*/g,' ').replace(/\s+/g,' ').trim();return text.slice(0,156)||'完整內容已整理收錄。';}
function addStructuredContent(target,raw){
 const safe=document.createElement('div');safe.innerHTML=DOMPurify.sanitize(raw||'',{ALLOWED_TAGS:['p','h1','h2','h3','h4','ul','ol','li','blockquote','table','thead','tbody','tr','td','th','strong','b','em','i','a','img','br','hr'],ALLOWED_ATTR:['href','src','alt','title','target','rel','colspan','rowspan']});
 let section=document.createElement('section');section.className='content-section';target.append(section);
 let textCard=null;
 const flush=()=>{textCard=null;};
 for(const node of [...safe.childNodes]){
  if(node.nodeType===Node.TEXT_NODE&&!node.textContent.trim())continue;
  if(node.nodeType===Node.ELEMENT_NODE&&/^H[1-4]$/.test(node.tagName)){
   flush();section=document.createElement('section');section.className='content-section';const h=document.createElement('h3');h.className='content-heading';h.textContent=node.textContent.trim();section.append(h);target.append(section);continue;
  }
  if(node.nodeType===Node.ELEMENT_NODE&&node.tagName==='IMG'){
   flush();const figure=document.createElement('figure');figure.className='content-image';node.loading='lazy';node.decoding='async';node.removeAttribute('width');node.removeAttribute('height');figure.append(node);section.append(figure);continue;
  }
  if(node.nodeType===Node.ELEMENT_NODE&&['P','BLOCKQUOTE','UL','OL','TABLE','HR'].includes(node.tagName)){
   flush();const text=(node.textContent||'').trim();const meta=/^【(主題|日期|本週讀經進度|本週核心經文)】/.test(text);const heading=node.tagName==='P'&&text.length<150&&(/^(🏠|🎵|📖|📝|📜|C\.|D\.|[1-4]\.)/.test(text));const quote=node.tagName==='BLOCKQUOTE'||/^【本週核心經文】/.test(text);const block=document.createElement('div');block.className=heading?'content-heading':quote?'content-card quote-card':meta?'content-card meta-card':node.tagName==='TABLE'?'content-card table-card':'content-card';if(node.tagName==='TABLE'){const scroller=document.createElement('div');scroller.className='table-scroll';scroller.append(node);block.append(scroller)}else block.append(node);section.append(block);continue;
  }
  flush();const block=document.createElement('div');block.className='content-card';block.append(node);section.append(block);
 }
 if(!section.childNodes.length)section.remove();
}
function render(){
 const needle=(search?.value||'').trim().toLocaleLowerCase();const year=yearSelect?.value||'';
 const visible=posts.filter(post=>(!year||String(post.published_on||'').slice(0,4)===year)&&(!needle||`${post.title} ${post.excerpt} ${plainText(post.content_html)}`.toLocaleLowerCase().includes(needle)));
 if(!visible.length){setStatus('目前找不到符合條件的內容。');return;}
 list.replaceChildren();
 for(const post of visible){
  const card=document.createElement('article');card.className='archive-card';
  const head=document.createElement('div');head.className='archive-head';
  const date=document.createElement('time');date.className='archive-date';date.dateTime=post.published_on;date.textContent=new Date(`${post.published_on}T12:00:00`).toLocaleDateString('zh-TW',{year:'numeric',month:'long',day:'numeric'});
  const title=document.createElement('h2');title.textContent=post.title;
  const summary=document.createElement('p');summary.className='archive-excerpt';summary.textContent=excerpt(post);
  head.append(date,title,summary);card.append(head);
  if(post.hero_image_url){const figure=document.createElement('figure');figure.className='archive-cover';const img=document.createElement('img');img.src=post.hero_image_url;img.alt=`${post.title}圖片`;img.loading='lazy';img.decoding='async';figure.append(img);card.append(figure);}
  const details=document.createElement('details');details.className='archive-details';const summaryLine=document.createElement('summary');summaryLine.innerHTML='<span>閱讀完整內容</span><span aria-hidden="true">＋</span>';details.append(summaryLine);
  const body=document.createElement('div');body.className='archive-content';details.append(body);
  details.addEventListener('toggle',()=>{if(details.open){if(!body.dataset.loaded){addStructuredContent(body,post.content_html);body.dataset.loaded='true';}summaryLine.lastElementChild.textContent='−';document.querySelectorAll('.archive-details[open]').forEach(other=>{if(other!==details){other.open=false;const sign=other.querySelector('summary span:last-child');if(sign)sign.textContent='＋';}})}else summaryLine.lastElementChild.textContent='＋';});
  if(post.source_url){const link=document.createElement('a');link.className='source-link';link.href=post.source_url;link.target='_blank';link.rel='noopener noreferrer';link.textContent='查看舊站原始資料 ↗';card.append(link);}
  card.append(details);list.append(card);
 }
 const count=document.querySelector('#result-count');if(count)count.textContent=`共 ${visible.length} 筆`;
}
try{
 const {data,error}=await db.rpc('get_website_content_posts',{p_church:'M+',p_type:type,p_limit:100,p_offset:0});
 if(error)throw error;posts=Array.isArray(data)?data:[];
 if(!posts.length){setStatus('內容整理中，請稍後再回來看看。');}
 else{
  if(yearSelect){const years=[...new Set(posts.map(post=>String(post.published_on||'').slice(0,4)).filter(Boolean))].sort().reverse();yearSelect.replaceChildren(new Option('所有年份',''),...years.map(year=>new Option(`${year} 年`,year)));}
  search?.addEventListener('input',render);yearSelect?.addEventListener('change',render);render();
 }
}catch(error){setStatus('內容載入時遇到問題，請稍後重新整理。',true);}
