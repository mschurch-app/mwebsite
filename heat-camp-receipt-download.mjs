const registration=new URLSearchParams(location.search).get('registration');
const area=document.querySelector('#receipt-area'),button=document.querySelector('#camp-receipt'),status=document.querySelector('#receipt-status');
const endpoint='https://aqanuwilmvdtlzuqlrau.supabase.co/functions/v1/heat-camp-receipt';
let capability;
try{capability=JSON.parse(sessionStorage.getItem('camp-receipt-'+registration));}catch{}
if(registration&&/^HC27-[A-Z0-9]+$/.test(registration)){
  area.hidden=false;
  if(!capability||!Number.isFinite(capability.expires)||capability.expires<Date.now()||!/^[0-9a-f-]{36}$/i.test(capability.request_id)){
    button.hidden=true;status.textContent='請聯絡營會同工並提供報名編號取得收據。';
  }else button.addEventListener('click',async()=>{
    const win=window.open('about:blank','_blank');
    if(!win){status.textContent='請允許此網站開啟收據視窗，再按一次。';return;}
    win.document.body.textContent='正在核對付款及取得收據…';win.opener=null;
    button.disabled=true;status.textContent='正在取得收據…';
    try{
      const response=await fetch(endpoint,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({action:'customer',request_id:capability.request_id}),signal:AbortSignal.timeout(20000)});
      const result=await response.json();
      if(!response.ok||!result.ok){
        const messages={receipt_not_requested:'你已選擇不索取收據，系統未開立。',paid_production_required:'付款尚在核對中，請稍後重試；請勿再次付款。',receipt_not_active:'此收據已作廢，請聯絡營會同工。'};
        throw new Error(messages[result.error]||'目前無法取得收據，請聯絡營會同工並提供報名編號。');
      }
      if(win.closed)throw new Error('收據視窗已關閉，請再按一次。');
      win.document.open();win.document.write(result.html);win.document.close();
      status.textContent='收據 '+result.receipt_no+' 已備妥，可下載或列印。';
    }catch(error){const message=error.name==='TimeoutError'?'連線逾時，請再試一次；重試不會重新付款或重複開立收據。':error.message;if(!win.closed)win.document.body.textContent=message;status.textContent=message;}
    finally{button.disabled=false;}
  });
}
