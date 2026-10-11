// Legacy query links remain supported; new links use static HTML pages.
import {pages,pageDescriptions,renderers} from './about-content.mjs?v=20261011-seo1';
const routes={about:'about.html',faith:'about-faith.html',team:'about-team.html',myc:'about-myc.html',contact:'about-contact.html'};
const requested=new URLSearchParams(location.search).get('page');
const page=Object.hasOwn(pages,requested)?requested:(document.body.dataset.page||'about');
const canonical=`https://mchurch.online/${routes[page]}`;
document.title=`${pages[page].title}｜M+大雅教會`;
document.querySelector('meta[name="description"]').content=pageDescriptions[page];
document.querySelector('#canonical-url').href=canonical;
document.querySelector('#og-title').content=document.title;
document.querySelector('#og-description').content=pageDescriptions[page];
document.querySelector('#og-url').content=canonical;
document.querySelector('#page-title').textContent=pages[page].title;
document.querySelector('#page-intro').textContent=pages[page].intro;
document.querySelectorAll('.section-nav a').forEach(link=>{
 const active=link.dataset.page===page;
 link.classList.toggle('active',active);
 if(active)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');
});
if(document.body.dataset.page!==page){
 document.querySelector('#page-content').innerHTML=renderers[page]();
 document.body.dataset.page=page;
}
const structured=document.querySelector('#about-structured-data');
if(structured)structured.textContent=JSON.stringify({'@context':'https://schema.org','@type':page==='contact'?'ContactPage':'AboutPage',name:pages[page].title,url:canonical,isPartOf:{'@id':'https://mchurch.online/#website'},about:{'@id':'https://mchurch.online/#church'},inLanguage:'zh-TW'});
