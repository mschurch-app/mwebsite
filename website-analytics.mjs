// Only the public website may collect these page views; local previews stay local.
const MEASUREMENT_ID='G-VPZZCKQ41B';
export function publicPageLocation(value){
 const url=new URL(value);url.hash='';
 for(const key of [...url.searchParams.keys()])if(!/^(utm_source|utm_medium|utm_campaign|utm_term|utm_content|gclid|dclid|gbraid|wbraid)$/.test(key)||!/^[-A-Za-z0-9_.~ ]{1,200}$/.test(url.searchParams.get(key)||''))url.searchParams.delete(key);
 return url.href;
}
export function installAnalytics(win,doc){
 if(!['mchurch.online','www.mchurch.online'].includes(win.location.hostname.toLowerCase())||win.__mplusPublicAnalytics)return false;
 win.__mplusPublicAnalytics=true;win.dataLayer=win.dataLayer||[];win.gtag=win.gtag||function(){win.dataLayer.push(arguments);};
 const ref=doc.referrer?publicPageLocation(doc.referrer):'';
 win.gtag('js',new Date());win.gtag('config',MEASUREMENT_ID,{page_location:publicPageLocation(win.location.href),page_referrer:ref});
 if(!doc.querySelector('script[src*="googletagmanager.com/gtag/js"]')){const script=doc.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+MEASUREMENT_ID;doc.head.append(script);}
 return true;
}
if(typeof window!=='undefined')installAnalytics(window,document);
