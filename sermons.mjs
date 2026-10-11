import {visibleItems,renderFeatured,renderCards} from './sermon-content.mjs?v=20261011-seo1';
const list=document.querySelector('#sermonList'),featured=document.querySelector('#featuredSermon'),empty=document.querySelector('#sermonEmpty');
fetch(`sermons-data.json?v=${Date.now()}`).then(r=>r.ok?r.json():Promise.reject()).then(data=>{
 const items=visibleItems(data.items);
 if(!items.length)return;
 featured.innerHTML=renderFeatured(items[0]);
 list.innerHTML=renderCards(items);
}).catch(()=>{if(!list.querySelector('.sermon-card'))empty.style.display='block';});
