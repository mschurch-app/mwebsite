const form=document.querySelector('#volunteer-form');
const status=document.querySelector('#form-status');
const button=document.querySelector('#submit');
const endpoint='https://aqanuwilmvdtlzuqlrau.supabase.co/functions/v1/heat-camp-volunteer';
const birthdayInput=form.elements.birthday;
const guardianInput=form.elements.guardian_name;
const guardianField=document.querySelector('#guardian-field');
const nationalIdInput=form.elements.national_id;

function taipeiToday(){
  const parts=Object.fromEntries(new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Taipei',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()).map(part=>[part.type,part.value]));
  return new Date(`${parts.year}-${parts.month}-${parts.day}T00:00:00Z`);
}
function isMinor(value){
  if(!/^\d{4}-\d{2}-\d{2}$/.test(value))return false;
  const birthday=new Date(`${value}T00:00:00Z`);
  if(Number.isNaN(birthday.getTime()))return false;
  const adultAt=new Date(birthday);adultAt.setUTCFullYear(adultAt.getUTCFullYear()+18);
  return taipeiToday()<adultAt;
}
function updateGuardian(){
  const minor=isMinor(birthdayInput.value);
  guardianField.hidden=!minor;
  guardianInput.required=minor;
  if(!minor)guardianInput.value='';
}
birthdayInput.max=taipeiToday().toISOString().slice(0,10);
birthdayInput.addEventListener('change',updateGuardian);
nationalIdInput.addEventListener('input',()=>{nationalIdInput.value=nationalIdInput.value.toUpperCase();});
updateGuardian();

form.addEventListener('submit',async event=>{
  event.preventDefault();
  updateGuardian();
  if(!form.reportValidity())return;
  const roles=[...form.querySelectorAll('input[name="roles"]:checked')].map(node=>node.value);
  if(!roles.length){status.textContent='請至少選擇一項志工服事。';form.querySelector('input[name="roles"]').focus();return;}
  const data=new FormData(form);
  let requestId=sessionStorage.getItem('heat_camp_volunteer_request_id');
  if(!requestId){requestId=crypto.randomUUID();sessionStorage.setItem('heat_camp_volunteer_request_id',requestId);}
  const payload={action:'submit',request_id:requestId,name:String(data.get('name')||'').trim(),church_affiliation:String(data.get('church_affiliation')||'').trim(),phone:String(data.get('phone')||'').trim(),email:String(data.get('email')||'').trim(),line_id:String(data.get('line_id')||'').trim(),birthday:String(data.get('birthday')||''),national_id:String(data.get('national_id')||'').trim().toUpperCase(),guardian_name:isMinor(birthdayInput.value)?String(data.get('guardian_name')||'').trim():'',roles,experience:String(data.get('experience')||'').trim(),notes:String(data.get('notes')||'').trim(),website:String(data.get('website')||''),training_agreed:data.has('training_agreed'),deployment_agreed:data.has('deployment_agreed'),privacy_agreed:data.has('privacy_agreed')};
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
  }catch(error){
    status.textContent=error.message==='invalid_insurance'?'請檢查生日、身分證字號，以及未滿 18 歲者的監護人姓名。':'目前送出失敗，資料仍保留在表單，請稍後再試。';
  }finally{button.disabled=false;}
});
