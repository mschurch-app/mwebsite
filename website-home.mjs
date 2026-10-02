const PROJECT_URL='https://aqanuwilmvdtlzuqlrau.supabase.co';
const PUBLISHABLE_KEY='sb_publishable_-on9uPxVvSaERBEpkoc_xg_CYuANexJ';
const BUCKET='church-website-public-media';
const db=window.supabase.createClient(PROJECT_URL,PUBLISHABLE_KEY,{auth:{persistSession:false,autoRefreshToken:false,detectSessionInUrl:false}});
const weeklyUrl='weekly.html?church=M%2B';
document.querySelectorAll('a[href="#resources"],a[href*="website-3/weekly"]').forEach(link=>{if(link.textContent.includes('本週週報')||link.href.includes('weekly'))link.href=weeklyUrl;});
const weeklyAnchor=location.pathname.split('/').pop()==='index.html'||location.pathname.endsWith('/');
if(weeklyAnchor){
 const image=document.querySelector('.weekly-sunday-image img');
 const section=document.querySelector('#weekly-sunday');
 const cta=section?.querySelector('.weekly-sunday-actions .weekly-link');
 if(cta){cta.href=weeklyUrl;cta.textContent='閱讀本週週報';}
 document.querySelectorAll('.mobile-nav a[href="#resources"]').forEach(link=>link.href=weeklyUrl);
 document.querySelectorAll('.nav-links a[href="#resources"]').forEach(link=>link.href=weeklyUrl);
 db.rpc('get_website_weekly_data',{p_church:'M+',p_service_date:null}).then(({data,error})=>{
  if(error||!data?.bulletin)return;
  const bulletin=data.bulletin;
  if(image&&bulletin.hero_image_path)image.src=db.storage.from(BUCKET).getPublicUrl(bulletin.hero_image_path).data.publicUrl;
  if(section){const heading=section.querySelector('h2');if(heading)heading.textContent=bulletin.title||'本週主日預告';}
 }).catch(()=>{});
}
