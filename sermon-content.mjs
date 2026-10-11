// Shared by the static SEO build and the browser, so both show the same content.
export const esc=value=>String(value??'').replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
const dateLabel=value=>/^\d{4}-\d{2}-\d{2}$/.test(value||'')?value.replaceAll('-','.'):'';
export function visibleItems(items){
 return (Array.isArray(items)?items:[]).filter(item=>
  typeof item.title==='string' && /^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}$/.test(item.url||'') &&
  /^https:\/\/i\.ytimg\.com\/vi\/[\w-]{11}\/hqdefault\.jpg$/.test(item.thumbnail||'') &&
  /^\d{4}-\d{2}-\d{2}$/.test(item.published||'')
 ).slice(0,6);
}
const metadata=item=>`${dateLabel(item.published)}${item.speaker?`・${esc(item.speaker)}`:''}`;
export function renderFeatured(item){return `<a class="video-frame" href="${esc(item.url)}" target="_blank" rel="noopener"><img src="${esc(item.thumbnail)}" alt="${esc(item.title)}主日信息封面"></a><div><p class="eyebrow">LATEST MESSAGE</p><div class="sermon-meta">${metadata(item)}</div><h2>${esc(item.title)}</h2><p>${esc(item.scripture||'M+大雅教會主日信息')}</p><a class="button" href="${esc(item.url)}" target="_blank" rel="noopener">觀看完整信息</a></div>`;}
export function renderCards(items){return items.map(item=>`<a class="sermon-card" data-search="${esc([item.title,item.speaker,item.scripture].join(' ').toLowerCase())}" href="${esc(item.url)}" target="_blank" rel="noopener"><img src="${esc(item.thumbnail)}" alt="${esc(item.title)}信息封面" loading="lazy"><time datetime="${esc(item.published)}">${metadata(item)}</time><h3>${esc(item.title)}</h3><p>${esc(item.scripture||'主日信息')}</p></a>`).join('');}
export function renderHome(items){return items.slice(0,3).map((item,index)=>`<a class="home-sermon-card${index===0?' featured':''}" href="${esc(item.url)}" target="_blank" rel="noopener"><img src="${esc(item.thumbnail)}" alt="${esc(item.title)}主日信息封面" loading="lazy"><span>${metadata(item)}</span><h3>${esc(item.title)}</h3><p>${esc(item.scripture||'M+大雅教會主日信息')}</p></a>`).join('');}
