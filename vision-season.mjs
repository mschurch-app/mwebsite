// All original page sections, original content modules and navigation remain present.
const motionButton=document.getElementById('motion-toggle');
let manuallyPaused=false;const reduced=matchMedia('(prefers-reduced-motion: reduce)');let visible=true;
function syncMotion(){const paused=manuallyPaused||reduced.matches||!visible||document.hidden;document.body.classList.toggle('motion-paused',paused);motionButton.setAttribute('aria-pressed',String(manuallyPaused));motionButton.textContent=reduced.matches?'光影已靜止':manuallyPaused?'播放光影 ▷':'暫停光影 Ⅱ';motionButton.disabled=reduced.matches;}
motionButton.addEventListener('click',()=>{manuallyPaused=!manuallyPaused;syncMotion();});reduced.addEventListener('change',syncMotion);document.addEventListener('visibilitychange',syncMotion);new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;syncMotion();}).observe(document.querySelector('.vision-hero'));syncMotion();
// Reorder original DOM nodes; preserve IDs, bindings, links and content.
const christmas=document.querySelector('#christmas'),stories=document.querySelector('#testimonies'),invitation=document.querySelector('.testimony-invitation'),welcome=document.querySelector('#welcome');
christmas.after(stories,invitation,welcome);
