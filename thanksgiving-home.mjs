const slots=[...document.querySelectorAll('[data-tg-icon]')],status=document.querySelector('#tg-status');
async function load(){
 try{const r=await fetch('https://aqanuwilmvdtlzuqlrau.supabase.co/functions/v1/potluck-event',{method:'POST',headers:{'content-type':'application/json'},credentials:'omit',cache:'no-store',signal:AbortSignal.timeout(12000),body:JSON.stringify({action:'public',slug:'thanksgiving-2026'})});const d=await r.json();if(!r.ok||!d.ok)throw new Error();for(const item of slots){const c=d.categories.find(c=>c.icon===item.dataset.tgIcon);if(c)item.querySelector('small').textContent=`${c.dish_count} / ${c.target_dishes} 道${c.dish_count>=c.target_dishes?' · 豐盛加倍':''}`;}status.textContent=d.event.registration_open?'料理登記開放中，一起把愛端上桌！':'這次活動已停止登記，謝謝每一份分享。';}
 catch{for(const item of slots)item.querySelector('small').textContent='歡迎分享拿手菜';status.textContent='募集進度暫時無法讀取，請開啟活動頁查看。';}
}
void load();
