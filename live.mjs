const PROJECT_URL='https://aqanuwilmvdtlzuqlrau.supabase.co';
const PUBLISHABLE_KEY='sb_publishable_-on9uPxVvSaERBEpkoc_xg_CYuANexJ';
const $=id=>document.getElementById(id);
const fallbackUrl='https://www.youtube.com/@m-church/live';
let live=null;
function nextSunday(){const now=new Date(),taipei=new Date(now.toLocaleString('en-US',{timeZone:'Asia/Taipei'}));const days=(7-taipei.getDay())%7;taipei.setDate(taipei.getDate()+days+(days===0&&taipei.getHours()>=12?7:0));const date=[taipei.getFullYear(),String(taipei.getMonth()+1).padStart(2,'0'),String(taipei.getDate()).padStart(2,'0')].join('-');return {service_date:date,starts_at:`${date}T10:00:00+08:00`,title:'M+ 主日直播',video_id:null};}
function render(){
 if(!live)return;
 const start=Date.parse(live.starts_at),remaining=Math.max(0,Math.floor((start-Date.now())/1000));
 const units=[Math.floor(remaining/86400),Math.floor(remaining%86400/3600),Math.floor(remaining%3600/60),remaining%60];
 ['days','hours','minutes','seconds'].forEach((key,i)=>{$(key).textContent=String(units[i]).padStart(2,'0')});
 const day=new Intl.DateTimeFormat('zh-TW',{timeZone:'Asia/Taipei',month:'long',day:'numeric',weekday:'long'}).format(new Date(start));
 $('live-date').textContent=`${day} 上午 10:00 · 線上直播`;
 $('live-topic').textContent=live.title||'歡迎回家，我們在這裡等你。';
 const videoId=/^[A-Za-z0-9_-]{11}$/.test(live.video_id||'')?live.video_id:null;
 $('live-state').textContent=remaining>0?(videoId?'直播即將開始，歡迎先到 YouTube 等候室。':'距離下次主日崇拜還有：'):'主日直播時間到了，點選下方按鈕觀看。';
 $('countdown').hidden=remaining===0;
 $('watch-link').href=videoId?`https://www.youtube.com/watch?v=${videoId}`:fallbackUrl;
 $('live-help').textContent=videoId?'若直播尚未開始，YouTube 會顯示等候畫面；開播後可重新整理。':'本週直播場次尚未確認，按鈕會帶你到教會的 YouTube 直播頁。';
 if(videoId&&remaining===0&&$('live-player').src===''){$('live-player').src=`https://www.youtube-nocookie.com/embed/${videoId}`;$('player-wrap').hidden=false;}
}
try{const db=window.supabase.createClient(PROJECT_URL,PUBLISHABLE_KEY,{auth:{persistSession:false,autoRefreshToken:false,detectSessionInUrl:false}});const {data,error}=await db.rpc('get_public_sunday_live');live=!error&&data?.starts_at?data:nextSunday();}catch{live=nextSunday();}
render();setInterval(render,1000);
