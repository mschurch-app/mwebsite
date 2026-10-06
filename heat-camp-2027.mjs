const $=(selector,root=document)=>root.querySelector(selector);
const $$=(selector,root=document)=>[...root.querySelectorAll(selector)];
const form=$('#camp-form');
const onsiteFields=$('#onsite-fields');
const friendFields=$('#friend-fields');
const friendCodeField=$('#friend-code-field');
const eligibilityAlert=$('#eligibility-alert');
const exceptionReason=$('#exception-reason');
const dialog=$('#preview-dialog');
const jerseySelect=$('#jersey-number');
const JERSEY_AVAILABILITY_URL='https://aqanuwilmvdtlzuqlrau.supabase.co/functions/v1/heat-camp-registration';

function taipeiDate(){
  const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Taipei',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
  return Object.fromEntries(parts.map(part=>[part.type,part.value]));
}

function currentPlan(){
  const {year,month,day}=taipeiDate(),today=`${year}-${month}-${day}`;
  const mode=form.elements.pricing_mode.value;
  if(mode==='onsite')return {label:'2026 現場優惠',price:6000,note:'需通過現場登記驗證後才成立。'};
  if(mode==='friend')return {label:'兩人友情價',price:8000,note:'兩人皆完成資料後成立；未配對前不產生付款帳號。'};
  if(today<='2026-12-31')return {label:'跨年早鳥',price:7000,note:'適用 2026/10/01–12/31。'};
  if(today<='2027-03-31')return {label:'新年優惠',price:8000,note:'適用 2027/01/01–03/31。'};
  if(today<='2027-05-31')return {label:'晚鳥優惠',price:9000,note:'適用 2027/04/01–05/31。'};
  return {label:'一般報名',price:10000,note:'2027/06/01 起恢復原價。'};
}

function renderPricing(){
  const plan=currentPlan();
  $('#summary-plan').textContent=plan.label;
  $('#summary-price').textContent=`NT$ ${plan.price.toLocaleString('zh-TW')}`;
  $('#summary-note').textContent=`${plan.note} 送出時仍會由伺服器核對價格與剩餘名額。`;
  $$('.choice').forEach(label=>label.classList.toggle('selected',$('input',label).checked));
  const mode=form.elements.pricing_mode.value;
  onsiteFields.hidden=mode!=='onsite';
  friendFields.hidden=mode!=='friend';
}

function renderFriendCode(){
  friendCodeField.hidden=form.elements.friend_action.value!=='join';
}

function renderEligibility(){
  const restricted=form.elements.school_stage.value==='elementary_6_or_below';
  eligibilityAlert.hidden=!restricted;
  if(!restricted){form.elements.eligibility_exception.checked=false;exceptionReason.hidden=true;form.elements.exception_reason.required=false;}
}

function renderException(){
  const open=form.elements.eligibility_exception.checked;
  exceptionReason.hidden=!open;
  form.elements.exception_reason.required=open;
}

function applyJerseyDeadline(){
  const {year,month,day}=taipeiDate();
  const afterDeadline=`${year}-${month}-${day}`>'2027-06-30';
  if(!afterDeadline)return;
  $('#jersey-section').classList.add('closed');
  $('.fieldset-note',$('#jersey-section')).textContent='球衣自選期限已截止，尺寸、背號與姓名將由主辦單位統一安排。';
  ['jersey_size','jersey_number','jersey_name'].forEach(name=>{form.elements[name].disabled=true;form.elements[name].required=false;});
}

function renderJerseyNumbers(unavailable=[]){
  const blocked=new Set(unavailable.map(Number));
  const current=jerseySelect.value;
  jerseySelect.replaceChildren(new Option('請選擇背號',''));
  for(let number=0;number<=99;number++){
    if(blocked.has(number))continue;
    jerseySelect.append(new Option(String(number).padStart(2,'0'),String(number)));
  }
  if(current&&!blocked.has(Number(current)))jerseySelect.value=current;
  const remaining=100-blocked.size;
  $('#jersey-availability-note').textContent=`目前還有 ${remaining} 個背號可選。送出時會再次檢查；取得付款帳號後保留 72 小時，逾期未付款會釋出。`;
}

async function loadJerseyAvailability(){
  try{
    const response=await fetch(JERSEY_AVAILABILITY_URL,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({action:'jersey_availability'})});
    const data=await response.json();
    if(!response.ok||!data.ok||!Array.isArray(data.numbers))throw new Error('unavailable');
    const available=new Set(data.numbers.map(Number));
    renderJerseyNumbers(Array.from({length:100},(_,number)=>number).filter(number=>!available.has(number)));
  }catch{
    renderJerseyNumbers();
    $('#jersey-availability-note').textContent='目前為報名頁預覽；正式開放後，已被選走的背號不會出現在清單中。球衣尺寸仍須選擇。';
  }
}

function renderReceipt(){
  form.elements.receipt_id.required=form.elements.tax_upload_consent.checked;
}

$$('input[name="pricing_mode"]').forEach(input=>input.addEventListener('change',renderPricing));
form.elements.friend_action.addEventListener('change',renderFriendCode);
form.elements.school_stage.addEventListener('change',renderEligibility);
form.elements.eligibility_exception.addEventListener('change',renderException);
form.elements.national_id.addEventListener('input',event=>{event.target.value=event.target.value.toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,10);});
form.elements.receipt_id.addEventListener('input',event=>{event.target.value=event.target.value.toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,10);});
form.elements.tax_upload_consent.addEventListener('change',renderReceipt);
form.elements.guardian_name.addEventListener('blur',()=>{
  if(!form.elements.donor_name.value)form.elements.donor_name.value=form.elements.guardian_name.value;
  if(!form.elements.receipt_title.value)form.elements.receipt_title.value=form.elements.guardian_name.value;
});

form.addEventListener('submit',event=>{
  event.preventDefault();
  const message=$('#form-message');
  message.hidden=true;
  if(!form.checkValidity()){
    form.reportValidity();
    message.textContent='還有必填資料尚未完成，請依欄位提示補齊。';
    message.hidden=false;
    return;
  }
  if(form.elements.school_stage.value==='elementary_6_or_below'&&!form.elements.eligibility_exception.checked){
    message.textContent='國小六年級以下需先提出例外申請，才能送出資料。';
    message.hidden=false;
    eligibilityAlert.scrollIntoView({behavior:'smooth',block:'center'});
    return;
  }
  dialog.showModal();
});

$('.dialog-close').addEventListener('click',()=>dialog.close());
$('.dialog-confirm').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});

renderPricing();
renderFriendCode();
renderEligibility();
loadJerseyAvailability();
applyJerseyDeadline();
renderReceipt();
