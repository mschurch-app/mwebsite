const form=document.querySelector('#volunteer-form');
const status=document.querySelector('#form-status');
const button=document.querySelector('#submit');
const endpoint='https://aqanuwilmvdtlzuqlrau.supabase.co/functions/v1/heat-camp-volunteer';

form.addEventListener('submit',async event=>{
  event.preventDefault();
  if(!form.reportValidity())return;
  const roles=[...form.querySelectorAll('input[name="roles"]:checked')].map(node=>node.value);
  if(!roles.length){status.textContent='請至少選擇一項志工服事。';form.querySelector('input[name="roles"]').focus();return;}
  const data=new FormData(form);
  let requestId=sessionStorage.getItem('heat_camp_volunteer_request_id');
  if(!requestId){requestId=crypto.randomUUID();sessionStorage.setItem('heat_camp_volunteer_request_id',requestId);}
  const payload={action:'submit',request_id:requestId,name:String(data.get('name')||'').trim(),phone:String(data.get('phone')||'').trim(),email:String(data.get('email')||'').trim(),line_id:String(data.get('line_id')||'').trim(),roles,experience:String(data.get('experience')||'').trim(),notes:String(data.get('notes')||'').trim(),website:String(data.get('website')||''),training_agreed:data.has('training_agreed'),deployment_agreed:data.has('deployment_agreed'),privacy_agreed:data.has('privacy_agreed')};
  button.disabled=true;status.textContent='正在送出報名…';
  try{
    const response=await fetch(endpoint,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});
    const result=await response.json();
    if(!response.ok||!result.ok)throw new Error(result.error||'save_failed');
    sessionStorage.removeItem('heat_camp_volunteer_request_id');
    form.hidden=true;
    const success=document.querySelector('#success');success.hidden=false;
    document.querySelector('#reference').textContent=result.reference?`報名參考編號：${result.reference}`:'';
    success.focus();
  }catch{
    status.textContent='目前送出失敗，資料仍保留在表單，請稍後再試。';
  }finally{button.disabled=false;}
});
