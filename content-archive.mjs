const PROJECT_URL='https://aqanuwilmvdtlzuqlrau.supabase.co';
const KEY='sb_publishable_-on9uPxVvSaERBEpkoc_xg_CYuANexJ';
const db=window.supabase.createClient(PROJECT_URL,KEY,{auth:{persistSession:false}});
const type=document.body.dataset.type;
const list=document.querySelector('#list');
const search=document.querySelector('#archive-search');
const yearSelect=document.querySelector('#archive-year');
const count=document.querySelector('#result-count');
const esc=value=>String(value||'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
let posts=[];
function setStatus(message,error=false){list.innerHTML=`<p class="empty${error?' error':''}">${esc(message)}</p>`;}
function plainText(html){const box=document.createElement('div');box.innerHTML=DOMPurify.sanitize(html||'');return(box.textContent||'').replace(/\s+/g,' ').trim();}
function excerpt(post){if(post.source==='managed')return [post.subtitle,post.service_time].filter(Boolean).join(' · ')||'查看完整週報。';const stored=String(post.excerpt||'').trim();if(stored&&stored!=='歷史電子週報'&&stored!=='每週小組教材與討論內容')return stored;let text=plainText(post.content_html);if(type==='group_resource'){const topic=text.match(/【主題】\s*[：:]\s*(.*?)(?=【日期】|【本週讀經進度】|【本週核心經文】|$)/);if(topic?.[1])return topic[1].trim().slice(0,156);}text=text.replace(/【日期】[^【】]*/g,' ').replace(/【本週讀經進度】[^【】]*/g,' ').replace(/【本週核心經文】[^【】]*/g,' ').replace(/\s+/g,' ').trim();return text.slice(0,156)||'完整內容已整理收錄。';}
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
function appendGroupNode(container,node){
 if(node.nodeType===Node.TEXT_NODE&&!node.textContent.trim())return;
 if(node.nodeType!==Node.ELEMENT_NODE){container.append(node);return;}
 if(node.tagName==='IMG'){const figure=document.createElement('figure');figure.className='content-image';node.loading='lazy';node.decoding='async';node.removeAttribute('width');node.removeAttribute('height');figure.append(node);container.append(figure);return;}
 if(/^H[1-4]$/.test(node.tagName)){const heading=document.createElement('h4');heading.className='group-subheading';heading.textContent=node.textContent.trim();container.append(heading);return;}
 if(node.tagName==='TABLE'){const scroller=document.createElement('div');scroller.className='table-scroll';scroller.append(node);container.append(scroller);return;}
 container.append(node);
}
function groupText(root){
 let value='';
 const blocks=new Set(['P','DIV','SECTION','ARTICLE','H1','H2','H3','H4','LI','BLOCKQUOTE','TR']);
 const walk=node=>{
  if(node.nodeType===Node.TEXT_NODE){value+=node.textContent;return;}
  if(node.nodeType!==Node.ELEMENT_NODE)return;
  if(node.tagName==='BR'){value+='\n';return;}
  const block=blocks.has(node.tagName);
  if(block&&value&&!value.endsWith('\n'))value+='\n';
  for(const child of node.childNodes)walk(child);
  if(block&&!value.endsWith('\n'))value+='\n';
 };
 for(const node of root.childNodes)walk(node);
 return value.replace(/\u00a0/g,' ').replace(/[ \t]+/g,' ').replace(/\s*\n\s*/g,'\n').replace(/\n{2,}/g,'\n').trim();
}
function appendLinkedText(target,value){
 const content=String(value||''),urlPattern=/https?:\/\/[^\s）)]+/g;let index=0;
 for(const match of content.matchAll(urlPattern)){
  target.append(document.createTextNode(content.slice(index,match.index)));
  const link=document.createElement('a');link.href=match[0];link.target='_blank';link.rel='noopener noreferrer';link.textContent=match[0];target.append(link);
  index=(match.index||0)+match[0].length;
 }
 target.append(document.createTextNode(content.slice(index)));
}
function appendAutoItem(list,label,value){
 const item=document.createElement('li');
 if(label){const title=document.createElement('strong');title.textContent=`${label}：`;item.append(title);}
 const songStart=label==='建議詩歌'?value.search(/《[^》]+》/):-1;
 if(songStart>=0){
  appendLinkedText(item,value.slice(0,songStart).trim());
  const songs=document.createElement('ul');
  for(const song of value.slice(songStart).split(/\s+(?=(?:（[^）]+）\s*)?《)/).filter(Boolean)){const line=document.createElement('li');appendLinkedText(line,song.trim());songs.append(line);}
  item.append(songs);
 }else appendLinkedText(item,value.trim());
 list.append(item);
}
function addAutoGroupResourceContent(target,text,sections){
 const intro=text.slice(0,sections[0].index).trim();
 if(intro){
  const overview=document.createElement('div');overview.className='group-overview group-meta';
  const meta=[...intro.matchAll(/【([^】]+)】\s*[：:]\s*/g)];
  if(meta.length){
   const before=intro.slice(0,meta[0].index).trim();
   if(before){const paragraph=document.createElement('p');paragraph.textContent=before;overview.append(paragraph);}
   for(let index=0;index<meta.length;index+=1){
    const row=document.createElement('p'),label=document.createElement('strong'),value=document.createElement('span');
    const valueStart=(meta[index].index||0)+meta[index][0].length,valueEnd=meta[index+1]?.index??intro.length;
    label.textContent=meta[index][1];value.textContent=intro.slice(valueStart,valueEnd).trim();row.append(label,value);overview.append(row);
   }
  }else{const paragraph=document.createElement('p');paragraph.textContent=intro;overview.append(paragraph);}
  target.append(overview);
 }
 const labelPattern=/(A[.、]\s*經文朗讀|B[.、]\s*經文解析|C[.、]\s*小組討論|📝\s*信息綱要|📜\s*完整分享內容(?:\s*\([^\n）)]*[）)])?|[一二三四五六七八九十]+、[^：:\n]{1,40}|結語|活動方式|小組長引導|建議詩歌|禱告方向|主題經文|核心經文|信息分享|信息重點|討論問題|本週行動|生活應用|生活同理|聖經亮光|彼此激勵|關鍵行動|具體實踐|彼此宣告|禱告)\s*[：:]?\s*/g;
 for(let index=0;index<sections.length;index+=1){
  const start=sections[index].index||0,end=sections[index+1]?.index??text.length,chunk=text.slice(start,end).trim();
  const labels=[...chunk.matchAll(labelPattern)],bodyStart=labels[0]?.index??-1;
  const section=document.createElement('section'),heading=document.createElement('h3'),body=document.createElement('div'),list=document.createElement('ul');
  section.className='group-main-section';heading.className='group-main-title';body.className='group-main-body';list.className='group-auto-list';
  if(bodyStart>=0){
   heading.textContent=chunk.slice(0,bodyStart).replace(/^(?:🏠|🎵|📖|📝|📜)\s*/,'').trim();
   for(let itemIndex=0;itemIndex<labels.length;itemIndex+=1){
    const valueStart=(labels[itemIndex].index||0)+labels[itemIndex][0].length,valueEnd=labels[itemIndex+1]?.index??chunk.length;
    appendAutoItem(list,labels[itemIndex][1],chunk.slice(valueStart,valueEnd));
   }
   body.append(list);
  }else{
   heading.textContent=sections[index][0].replace(/^(?:🏠|🎵|📖|📝|📜)\s*/,'').trim();
   const paragraph=document.createElement('p');appendLinkedText(paragraph,chunk.slice(sections[index][0].length).trim());body.append(paragraph);
  }
  section.append(heading,body);target.append(section);
 }
}
function addGroupResourceContent(target,raw){
 const safe=document.createElement('div');safe.innerHTML=DOMPurify.sanitize(raw||'',{ALLOWED_TAGS:['p','h1','h2','h3','h4','ul','ol','li','blockquote','table','thead','tbody','tr','td','th','strong','b','em','i','a','img','br','hr'],ALLOWED_ATTR:['href','src','alt','title','target','rel','colspan','rowspan']});
 const text=groupText(safe),sectionPattern=/(?:🏠|🎵|📖|📝|📜)?\s*[1-4][.、]\s*(?:Welcome|Worship|Word|Work|破冰|敬拜|神的話|神的工)/gi,sections=[...text.matchAll(sectionPattern)];
 if(sections.length&&!safe.querySelector('img,table')){addAutoGroupResourceContent(target,text,sections);return;}
 let intro=null,current=null;
 for(const node of [...safe.childNodes]){
  if(node.nodeType===Node.TEXT_NODE&&!node.textContent.trim())continue;
  const nodeText=(node.textContent||'').replace(/\s+/g,' ').trim();
  const headingMatch=nodeText.match(/^(?:(?:🏠|🎵|📖)\s*)?([1-4][.、]\s*(?:Welcome|Worship|Word|Work|破冰|敬拜|神的話|神的工)[^]*)$/i);
  if(headingMatch){
   const section=document.createElement('section');section.className='group-main-section';
   const heading=document.createElement('h3');heading.className='group-main-title';heading.textContent=headingMatch[1].trim();
   const content=document.createElement('div');content.className='group-main-body';section.append(heading,content);target.append(section);current=content;continue;
  }
  if(!current){if(!intro){intro=document.createElement('div');intro.className='group-overview';target.append(intro);}appendGroupNode(intro,node);}
  else appendGroupNode(current,node);
 }
}
function addManagedContent(target,data){
 const bulletin=data?.bulletin;
 if(!bulletin){target.textContent='這份週報目前無法讀取，請稍後再試。';return;}
 const intro=[bulletin.subtitle,bulletin.service_time].filter(Boolean);
 if(intro.length){const card=document.createElement('div');card.className='content-card meta-card';card.textContent=intro.join(' · ');target.append(card);}
 let shown=0;
 for(const section of Array.isArray(bulletin.sections)?bulletin.sections:[]){
  if(section.enabled===false)continue;
  const shell=document.createElement('section');shell.className='content-section';
  const heading=document.createElement('h3');heading.className='content-heading';heading.textContent=section.title||'週報內容';shell.append(heading);
  if(section.description){const description=document.createElement('p');description.className='archive-excerpt';description.textContent=section.description;shell.append(description);}
  if(section.auto_schedule||section.key==='schedule'){
   const roles=Array.isArray(data.schedule_roles)?data.schedule_roles:[];
   for(const [label,schedule] of [['本週服事',data.schedule],['下週服事',data.next_schedule]]){
    const card=document.createElement('div');card.className='content-card';
    const title=document.createElement('strong');title.textContent=label;card.append(title);
    const lines=roles.filter(role=>role.role_key!=='event'&&schedule?.[role.role_key]).map(role=>`${role.label||role.role_key}：${schedule[role.role_key]}`);
    const copy=document.createElement('p');copy.textContent=lines.join('\n')||'尚未建立服事排班。';card.append(copy);shell.append(card);
   }
  }else{
   for(const item of Array.isArray(section.items)?section.items:[]){
    const label=String(item.label||'').trim(),body=String(item.body||'').trim();
    if(!label&&!body)continue;
    const card=document.createElement('div');card.className='content-card';
    if(label){const title=document.createElement('strong');title.textContent=label;card.append(title);}
    if(body){const copy=document.createElement('p');copy.textContent=body;card.append(copy);}
    shell.append(card);
   }
  }
  if(shell.querySelector('.content-card')){target.append(shell);shown++;}
 }
 if(!shown){const empty=document.createElement('p');empty.className='empty';empty.textContent='這份週報目前沒有可顯示的內容。';target.append(empty);}
}
async function fetchAll(name,args){
 const rows=[];
 for(let offset=0;offset<10000;offset+=100){
  const {data,error}=await db.rpc(name,{...args,p_limit:100,p_offset:offset});
  if(error)throw error;
  const batch=Array.isArray(data)?data:[];
  rows.push(...batch);
  if(batch.length<100)return rows;
 }
 throw new Error('週報資料超過分頁上限');
}
function managedPost(row){
 const path=String(row.hero_image_path||'');
 return {...row,source:'managed',published_on:row.service_date,
  hero_image_url:path?db.storage.from('church-website-public-media').getPublicUrl(path).data.publicUrl:null};
}
function searchText(post){
 return post.source==='managed'
  ?`${post.title||''} ${post.subtitle||''} ${post.service_time||''} ${JSON.stringify((post.sections||[]).filter(section=>section.enabled!==false))}`
  :`${post.title||''} ${post.excerpt||''} ${plainText(post.content_html)}`;
}
function render(){
 const needle=(search?.value||'').trim().toLocaleLowerCase();const year=yearSelect?.value||'';
 const visible=posts.filter(post=>(!year||String(post.published_on||'').slice(0,4)===year)&&(!needle||searchText(post).toLocaleLowerCase().includes(needle)));
 if(count)count.textContent=`共 ${visible.length} 筆`;
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
  details.addEventListener('toggle',async()=>{if(details.open){if(!body.dataset.loaded){if(post.source==='managed'){body.textContent='正在載入週報…';try{const {data,error}=await db.rpc('get_website_weekly_data',{p_church:'M+',p_service_date:post.published_on});if(error||!data?.bulletin)throw error||new Error('找不到週報');body.replaceChildren();addManagedContent(body,data);body.dataset.loaded='true';}catch{body.textContent='週報載入失敗，請收起後重試。';}}else{if(type==='group_resource')addGroupResourceContent(body,post.content_html);else addStructuredContent(body,post.content_html);body.dataset.loaded='true';}}summaryLine.lastElementChild.textContent='−';document.querySelectorAll('.archive-details[open]').forEach(other=>{if(other!==details){other.open=false;const sign=other.querySelector('summary span:last-child');if(sign)sign.textContent='＋';}})}else summaryLine.lastElementChild.textContent='＋';});
  card.append(details);list.append(card);
 }
}
const results=await Promise.allSettled([
 fetchAll('get_website_content_posts',{p_church:'M+',p_type:type}),
 type==='weekly_archive'?fetchAll('get_website_published_weekly_archive',{p_church:'M+'}):Promise.resolve([])
]);
const failures=results.slice(0,type==='weekly_archive'?2:1).filter(result=>result.status==='rejected');
if(failures.length===(type==='weekly_archive'?2:1)){setStatus('內容載入時遇到問題，請稍後重新整理。',true);if(count)count.textContent='載入失敗';}
else{
 const legacy=results[0].status==='fulfilled'?results[0].value:[];
 const managed=results[1].status==='fulfilled'?results[1].value.map(managedPost):[];
 if(type==='weekly_archive'){
  const managedDates=new Set(managed.map(post=>String(post.published_on||'').slice(0,10)));
  posts=[...legacy.filter(post=>!managedDates.has(String(post.published_on||'').slice(0,10))),...managed]
   .sort((a,b)=>String(b.published_on).localeCompare(String(a.published_on)));
 }else posts=legacy;
 if(failures.length){const note=document.createElement('p');note.className='empty error';note.textContent='部分週報暫時無法載入，請稍後重新整理。';list.before(note);}
 if(!posts.length){setStatus('內容整理中，請稍後再回來看看。');if(count)count.textContent='共 0 筆';}
 else{
  if(yearSelect){const years=[...new Set(posts.map(post=>String(post.published_on||'').slice(0,4)).filter(Boolean))].sort().reverse();yearSelect.replaceChildren(new Option('所有年份',''),...years.map(year=>new Option(`${year} 年`,year)));}
  search?.addEventListener('input',render);yearSelect?.addEventListener('change',render);render();
 }
}
