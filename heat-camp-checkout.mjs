import {initCampWizard} from './heat-camp-wizard.mjs?v=20261014-onsite-launch1';

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
const boolFields=['eligibility_exception','tax_upload_consent','public_credit','no_receipt','insurance_consent','privacy_consent','refund_consent','receipt_consent','truth_consent'];
let submitting=false;
let retryAllowed=false;
let retryBusy=false;
let checkoutReady=false;
let registrationReady=false;
let wizard;
const isOnsite=()=>form.elements.pricing_mode.value==='onsite';
const canSubmit=()=>isOnsite()?registrationReady:checkoutReady;
const expectedEnvironment=document.documentElement.dataset.paymentEnvironment;
const requestStorageKey=`heat-camp-request-id-${expectedEnvironment}`;
let activeRequestId=new URLSearchParams(location.search).has('payment')?(sessionStorage.getItem(requestStorageKey)||localStorage.getItem(requestStorageKey)):null;
const FIELD_LABELS={player_name:'球員姓名',guardian_name:'家長／監護人姓名',guardian_phone:'家長手機',email:'家長 Email',line_id:'LINE ID',national_id:'球員身分證字號',postal_code:'郵遞區號',receipt_address:'收據寄送地址',birthday:'出生日期',school_stage:'營會時就讀階段',school_name:'學校名稱',height_cm:'身高',weight_kg:'體重',basketball_years:'球齡',primary_position:'主要位置',dominant_hand:'慣用手',competition_level:'比賽經驗',jersey_size:'球衣尺寸',jersey_number:'希望背號',jersey_name:'球衣姓名',emergency_name:'緊急聯絡人',emergency_phone:'緊急聯絡電話',dietary_need:'飲食需求',special_identity:'特殊身分類別',medical_status:'身體特殊狀況有無',medical_notes:'特殊狀況說明',donor_name:'捐款人姓名',receipt_title:'收據抬頭',receipt_id:'收據 ID',payment_method:'付款方式',insurance_consent:'保險個資同意',truth_consent:'資料正確確認',privacy_consent:'個資與活動規範同意',refund_consent:'退款政策同意',receipt_consent:'收據資料傳送同意',exception_reason:'例外原因'};

function taipeiDate(){
  const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Taipei',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
  return Object.fromEntries(parts.map(part=>[part.type,part.value]));
}

const {year:friendYear,month:friendMonth,day:friendDay}=taipeiDate();
const friendToday=`${friendYear}-${friendMonth}-${friendDay}`;
const friendOption=form.querySelector('input[name="pricing_mode"][value="friend"]');
friendOption.disabled=friendToday<'2027-01-01'||friendToday>'2027-06-30';
friendOption.closest('.choice').hidden=friendOption.disabled;

function currentPlan(){
  const {year,month,day}=taipeiDate(),today=`${year}-${month}-${day}`;
  const mode=form.elements.pricing_mode.value;
  if(mode==='onsite')return {label:'現場已繳費・補填資料',price:6000,note:'核對現場已繳費資格後完成補填，不會再次收費。'};
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
  form.elements.onsite_code.required=mode==='onsite';
  form.elements.friend_code.required=mode==='friend'&&form.elements.friend_action.value==='join';
  renderRegistrationFlow();
}

function renderRegistrationFlow(){
  const onsite=isOnsite();
  const lastStep=form.querySelector(`[data-wizard-step="${onsite?3:4}"]`);
  const final=$('#registration-final');
  if(final.parentElement!==lastStep)lastStep.append(final);
  $('#payment-section').hidden=onsite;
  $('#onsite-completion-note').hidden=!onsite;
  $('.submit-note').textContent=onsite?'核對現場已繳費資格後完成補填，不會建立付款帳號。':'確認頁不會顯示完整身分證字號。付款帳號由藍新金流產生，每筆報名專用。';
  $('#summary-price').textContent=onsite?'現場已繳 NT$ 6,000':`NT$ ${currentPlan().price.toLocaleString('zh-TW')}`;
  form.elements.payment_method.forEach(input=>{
    input.disabled=onsite||!checkoutReady||input.closest('.payment-choice').classList.contains('unavailable');
    input.required=!onsite&&input.value==='card';
  });
  const submit=$('.submit');
  submit.disabled=!canSubmit()||submit.classList.contains('completed');
  $('span',submit).textContent=onsite?'確認並送出補填資料':'檢查資料並前往確認';
  $('#confirmation-note').textContent=onsite?'確認後會核對現場已繳費資格並儲存資料，不會前往付款。':'確認後會安全送出報名資料，並前往藍新金流完成所選付款方式。';
  $('.dialog-confirm').textContent=onsite?'確認送出補填資料':'確認並前往付款';
  wizard?.setLastStep(onsite?3:4);
}

function renderFriendCode(){
  friendCodeField.hidden=form.elements.friend_action.value!=='join';
  form.elements.friend_code.required=form.elements.pricing_mode.value==='friend'&&form.elements.friend_action.value==='join';
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
    const response=await fetch(JERSEY_AVAILABILITY_URL,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({action:'jersey_availability',expected_environment:expectedEnvironment})});
    const data=await response.json();
    if(!response.ok||!data.ok||!Array.isArray(data.numbers))throw new Error('unavailable');
    const available=new Set(data.numbers.map(Number));
    renderJerseyNumbers(Array.from({length:100},(_,number)=>number).filter(number=>!available.has(number)));
  }catch{
    renderJerseyNumbers();
    $('#jersey-availability-note').textContent='暫時無法更新背號清單，送出時會再次確認是否可用；已填資料會保留。';
  }
}

function renderReceipt(){
  const noReceipt=form.elements.no_receipt.checked;
  const fields=$('#receipt-fields'),consentRow=$('#receipt-consent-row');
  fields.hidden=noReceipt;
  consentRow.hidden=noReceipt;
  $$('input,select,textarea',fields).forEach(control=>control.disabled=noReceipt);
  for(const name of ['donor_name','receipt_title','receipt_address'])form.elements[name].required=!noReceipt;
  form.elements.receipt_consent.disabled=noReceipt;
  form.elements.receipt_consent.required=!noReceipt;
  if(noReceipt){
    form.elements.receipt_consent.checked=false;
    form.elements.tax_upload_consent.checked=false;
    form.elements.public_credit.checked=false;
  }
  form.elements.receipt_id.required=!noReceipt&&form.elements.tax_upload_consent.checked;
}

function renderMedical(){
  const none=form.elements.medical_none_confirm.checked;
  form.elements.medical_status.value=none?'none':'has';
  $('#medical-details').hidden=none;
  form.elements.medical_notes.required=!none;
  form.elements.medical_notes.disabled=none;
}

function renderPaymentChoice(){
  $$('#payment-choice-grid .choice').forEach(label=>label.classList.toggle('selected',Boolean($('input',label)?.checked)));
  const retryButton=$('#retry-submit');
  if(retryButton){
    retryButton.disabled=!checkoutReady||!retryAllowed||retryBusy||!form.elements.payment_method.value;
    retryButton.textContent=retryBusy?'正在建立付款…':retryAllowed?'接續付款':'確認狀態後再付款';
  }
}

async function loadPaymentConfiguration(){
  const panel=$('#payment-configuration'),message=$('#payment-configuration-message'),retry=$('#payment-config-retry'),submit=$('.submit');
  checkoutReady=false;
  registrationReady=false;
  renderRegistrationFlow();
  submit.disabled=true;
  panel.hidden=false;
  retry.hidden=true;
  message.textContent='正在確認付款服務，請稍候。';
  form.elements.payment_method.forEach(input=>{input.disabled=true;});
  renderPaymentChoice();
  try{
    const response=await fetch(JERSEY_AVAILABILITY_URL,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({action:'configuration_status'}),signal:AbortSignal.timeout(15000)});
    const data=await response.json();
    if(!response.ok||!data.ok)throw new Error('unavailable');
    if(data.environment!==expectedEnvironment)throw new Error('environment_mismatch');
    if(expectedEnvironment==='production'&&data.merchant_id!=='MS3845446298')throw new Error('merchant_mismatch');
    registrationReady=true;
    if(!Object.values(data.payment_methods||{}).some(Boolean))throw new Error('unavailable');
    form.elements.payment_method.forEach(input=>{
      const enabled=Boolean(data.payment_methods?.[input.value]);
      input.disabled=!enabled;
      if(!enabled)input.checked=false;
      input.closest('.payment-choice')?.classList.toggle('unavailable',!enabled);
      input.closest('.payment-choice').hidden=!enabled;
    });
    checkoutReady=true;
    submit.disabled=submit.classList.contains('completed');
    panel.hidden=true;
    renderPaymentChoice();
  }catch(error){
    message.textContent=expectedEnvironment==='test'&&error.message==='environment_mismatch'?'目前已切換正式金流，此測試頁已停止付款。請使用正式報名頁。':'付款服務暫時無法連線，已填資料會保留，請重新連線後再付款。';
    if(expectedEnvironment==='test'&&error.message==='environment_mismatch'){
      const link=document.createElement('a');link.href='heat-camp-2027.html';link.textContent='前往正式報名頁';message.append(' ',link);
    }
    retry.hidden=false;
  }finally{
    renderRegistrationFlow();
  }
}

$$('input[name="pricing_mode"]').forEach(input=>input.addEventListener('change',renderPricing));
form.elements.friend_action.addEventListener('change',renderFriendCode);
form.elements.school_stage.addEventListener('change',renderEligibility);
form.elements.eligibility_exception.addEventListener('change',renderException);
form.elements.national_id.addEventListener('input',event=>{event.target.value=event.target.value.toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,10);});
form.elements.receipt_id.addEventListener('input',event=>{event.target.value=event.target.value.toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,10);});
form.elements.tax_upload_consent.addEventListener('change',renderReceipt);
form.elements.no_receipt.addEventListener('change',renderReceipt);
form.elements.medical_none_confirm.addEventListener('change',renderMedical);
form.elements.payment_method.forEach(input=>input.addEventListener('change',renderPaymentChoice));
form.elements.guardian_name.addEventListener('blur',()=>{
  if(!form.elements.donor_name.value)form.elements.donor_name.value=form.elements.guardian_name.value;
  if(!form.elements.receipt_title.value)form.elements.receipt_title.value=form.elements.guardian_name.value;
});

function registrationPayload(){
  const formData=new FormData(form);
  const data=Object.fromEntries(formData);
  data.training_goals=formData.getAll('training_goals');
  for(const name of boolFields)data[name]=form.elements[name].checked;
  return data;
}

function requestId(){
  if(!activeRequestId)activeRequestId=crypto.randomUUID();
  sessionStorage.setItem(requestStorageKey,activeRequestId);
  localStorage.setItem(requestStorageKey,activeRequestId);
  return activeRequestId;
}

function storedRequestId(){
  return activeRequestId;
}

function clearRequestId(){
  if(localStorage.getItem(requestStorageKey)===activeRequestId)localStorage.removeItem(requestStorageKey);
  sessionStorage.removeItem(requestStorageKey);
  activeRequestId=null;
}

function showMessage(text,success=false){
  const message=$('#form-message');
  message.textContent=text;
  message.hidden=false;
  message.dataset.success=success?'true':'false';
  message.scrollIntoView({behavior:'smooth',block:'center'});
}

function finishForm(label){
  form.reset();
  renderPricing();renderFriendCode();renderEligibility();renderException();renderMedical();renderReceipt();renderPaymentChoice();
  const submit=$('.submit');
  submit.disabled=true;
  submit.classList.add('completed');
  $('span',submit).textContent=label;
  $('b',submit).textContent='✓';
}

function showValidationErrors(){
  wizard.goToFirstInvalid();
  form.querySelectorAll('.field-error').forEach(node=>node.classList.remove('field-error'));
  form.querySelectorAll('[aria-invalid="true"]').forEach(node=>node.removeAttribute('aria-invalid'));
  const invalid=[...form.querySelectorAll('[required]')].filter(control=>!control.disabled&&!control.checkValidity());
  const items=[],seen=new Set();
  for(const control of invalid){
    if(seen.has(control.name))continue;seen.add(control.name);
    const empty=['checkbox','radio'].includes(control.type)?!control.checked:!String(control.value||'').trim();
    items.push(`${FIELD_LABELS[control.name]||control.name}${empty?'':'（格式不正確）'}`);
    control.setAttribute('aria-invalid','true');
    control.closest('.choice,.check,label')?.classList.add('field-error');
  }
  const message=$('#form-message');message.replaceChildren(document.createTextNode('請完成以下欄位：'));
  const list=document.createElement('ul');list.className='missing-list';for(const item of items){const li=document.createElement('li');li.textContent=item;list.append(li);}message.append(list);message.hidden=false;message.dataset.success='false';
  const first=invalid[0];setTimeout(()=>first?.focus({preventScroll:true}),350);
}

function postToGateway(gateway,fields){
  const payment=document.createElement('form');
  payment.method='POST';
  payment.action=gateway;
  payment.hidden=true;
  for(const [name,value] of Object.entries(fields)){
    const input=document.createElement('input');
    input.name=name;
    input.value=String(value);
    payment.append(input);
  }
  document.body.append(payment);
  payment.submit();
}

async function paymentRequest(action,extra={}){
  const response=await fetch(JERSEY_AVAILABILITY_URL,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({action,expected_environment:expectedEnvironment,request_id:storedRequestId(),...extra}),signal:AbortSignal.timeout(15000)});
  const data=await response.json().catch(()=>({}));
  if(!response.ok||!data.ok)throw new Error(data.error||'retry_status_unavailable');
  return data;
}

async function loadRetryState(){
  const detail=$('#retry-detail');
  retryAllowed=false;
  renderPaymentChoice();
  if(!storedRequestId()){
    detail.textContent='此瀏覽器沒有原報名的付款識別資料。請提供報名編號給營會客服協助查詢。';
    return;
  }
  detail.textContent='正在向付款系統確認原報名狀態，請稍候。';
  try{
    const data=await paymentRequest('registration_status');
    const returnedRegistration=new URLSearchParams(location.search).get('registration');
    if(returnedRegistration&&returnedRegistration!==data.registration_no)throw new Error('registration_mismatch');
    if(data.status==='paid'){
      clearRequestId();
      location.replace(`heat-camp-2027-success.html?registration=${encodeURIComponent(data.registration_no)}`);
      return;
    }
    const amount=`NT$ ${Number(data.amount).toLocaleString('zh-TW')}`;
    if(data.retry_allowed){
      retryAllowed=true;
      detail.textContent=`報名編號 ${data.registration_no}，原報名金額 ${amount}。原付款未完成，請選擇上方付款方式，繼續使用同一筆報名付款。`;
    }else{
      detail.textContent=`報名編號 ${data.registration_no}，原報名金額 ${amount}。付款狀態仍在確認或已有待繳費帳號，為避免重複扣款，暫時不能再次付款。請稍後重新查詢；若銀行已扣款，請聯絡客服。`;
    }
  }catch{
    detail.textContent='目前無法核對原付款狀態。請稍後重新查詢，或提供報名編號給營會客服；系統不會建立第二筆報名。';
  }
  renderPaymentChoice();
}

async function retryPayment(){
  if(!checkoutReady||retryBusy||!retryAllowed||!form.elements.payment_method.value)return;
  retryBusy=true;
  renderPaymentChoice();
  $('#retry-detail').textContent='正在再次核對付款狀態並建立付款頁，請勿重複點擊。';
  try{
    const state=await paymentRequest('registration_status');
    const returnedRegistration=new URLSearchParams(location.search).get('registration');
    if(returnedRegistration&&returnedRegistration!==state.registration_no)throw new Error('registration_mismatch');
    if(state.status==='paid'){
      clearRequestId();
      location.replace(`heat-camp-2027-success.html?registration=${encodeURIComponent(state.registration_no)}`);
      return;
    }
    if(!state.retry_allowed)throw new Error('payment_status_pending');
    const data=await paymentRequest('retry_payment',{payment_method:form.elements.payment_method.value});
    if(data.status==='paid'){
      clearRequestId();
      location.replace(`heat-camp-2027-success.html?registration=${encodeURIComponent(data.registration_no)}`);
      return;
    }
    if(data.status!=='checkout'||!data.gateway||!data.fields)throw new Error('payment_retry_unavailable');
    postToGateway(data.gateway,data.fields);
  }catch(error){
    showMessage(error.message==='payment_status_pending'?'付款狀態仍待確認，已停止再次付款以避免重複扣款。請重新查詢或聯絡客服。':'目前無法接續付款。原報名資料仍保留，請重新查詢付款狀態。');
    await loadRetryState();
  }finally{
    retryBusy=false;
    renderPaymentChoice();
  }
}

async function createCheckout(){
  if(submitting||!canSubmit())return;
  submitting=true;
  const confirm=$('.dialog-confirm'),submit=$('.submit');
  confirm.disabled=true;
  submit.disabled=true;
  confirm.textContent=isOnsite()?'正在儲存補填資料…':'正在建立安全付款…';
  try{
    const response=await fetch(JERSEY_AVAILABILITY_URL,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({action:isOnsite()?'complete_onsite_registration':'create_checkout',expected_environment:expectedEnvironment,request_id:requestId(),registration:registrationPayload()}),signal:AbortSignal.timeout(20000)});
    const data=await response.json().catch(()=>({}));
    if(!response.ok||!data.ok)throw new Error(data.error||'registration_failed');
    if(isOnsite()){
      if(data.status!=='onsite_complete')throw new Error('onsite_verification_failed');
      clearRequestId();
      location.replace(`heat-camp-2027-success.html?registration=${encodeURIComponent(data.registration_no)}&source=onsite`);
      return;
    }
    if(data.status==='exception_review'){
      clearRequestId();
      dialog.close();
      showMessage(`已收到例外資格申請，報名編號 ${data.registration_no}。審核通過後才會通知付款。`,true);
      form.reset();
      renderPricing();renderFriendCode();renderEligibility();renderMedical();renderReceipt();renderPaymentChoice();
      return;
    }
    if(data.status==='paid'){
      clearRequestId();
      location.replace(`heat-camp-2027-success.html?registration=${encodeURIComponent(data.registration_no)}`);
      return;
    }
    if(data.status!=='checkout'||!data.gateway||!data.fields)throw new Error('checkout_unavailable');
    postToGateway(data.gateway,data.fields);
  }catch(error){
    const labels={registration_closed:'目前不在報名期間。',pricing_mode_not_ready:'此優惠方案尚需人工核對，請先聯絡營會同工。',price_unavailable:'目前無法確認適用價格。',camp_full:'名額已滿。',jersey_or_order_unavailable:'剛才選擇的背號已被使用，請重新選擇。',invalid_national_id:'球員身分證字號格式不正確。',invalid_phone:'家長手機格式不正確。',invalid_email:'Email 格式不正確。',invalid_jersey:'請重新選擇球衣背號。',medical_status_required:'請勾選「本人確認沒有」；若有特殊狀況，請補充說明。',consent_required:'請完成所有必要同意項目。',receipt_preference_failed:'目前無法儲存收據選擇，請稍後再試。',payment_config_invalid:'付款服務設定尚未完成。',payment_method_unavailable:'此付款方式尚未啟用，請改選其他付款方式。'};
    const extraLabels={onsite_verification_failed:'無法核對現場已繳費資格，請確認驗證碼或聯絡同工。已填資料會保留，不會再次收款。',onsite_code_used:'此現場驗證碼已完成補填，請聯絡同工查詢原報名。',request_registration_mismatch:'這次輸入與原報名不同，請重新開啟報名頁為另一位球員報名；原報名仍保留。',payment_environment_mismatch:'付款環境已更新，請重新連線確認後再付款。',production_checkout_preparing:'正式付款服務仍在準備中，請稍後再試。'};
    dialog.close();
    showMessage(extraLabels[error.message]||labels[error.message]||(isOnsite()?'目前無法儲存補填資料，已填內容會保留，請稍後再試。':'目前無法建立付款，資料尚未重複送出，請稍後再試。'));
    if(error.message==='payment_environment_mismatch')await loadPaymentConfiguration();
  }finally{
    submitting=false;
    confirm.disabled=false;
    submit.disabled=!canSubmit();
    confirm.textContent=isOnsite()?'確認送出補填資料':'確認並前往付款';
  }
}

form.addEventListener('submit',event=>{
  event.preventDefault();
  const message=$('#form-message');
  message.hidden=true;
  if(!canSubmit()){showMessage('請先重新連線確認報名服務，已填資料會保留。');return;}
  if(!form.checkValidity()){
    showValidationErrors();
    return;
  }
  if(form.elements.school_stage.value==='elementary_6_or_below'&&!form.elements.eligibility_exception.checked){
    wizard.showStep(1);
    message.textContent='國小六年級以下需先提出例外申請，才能送出資料。';
    message.hidden=false;
    eligibilityAlert.scrollIntoView({behavior:'smooth',block:'center'});
    return;
  }
  const plan=currentPlan();
  $('#confirm-player').textContent=form.elements.player_name.value;
  $('#confirm-guardian').textContent=form.elements.guardian_name.value;
  $('#confirm-plan').textContent=plan.label;
  $('#confirm-price').textContent=isOnsite()?'現場已繳費，本次無需付款':`NT$ ${plan.price.toLocaleString('zh-TW')}`;
  dialog.showModal();
});

$('.dialog-close').addEventListener('click',()=>dialog.close());
$('.dialog-confirm').addEventListener('click',createCheckout);
$('#retry-submit').addEventListener('click',retryPayment);
$('#retry-refresh').addEventListener('click',loadRetryState);
$('#payment-config-retry').addEventListener('click',loadPaymentConfiguration);
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});

renderPricing();
renderFriendCode();
renderEligibility();
renderMedical();
loadJerseyAvailability();
loadPaymentConfiguration();
applyJerseyDeadline();
renderReceipt();
renderPaymentChoice();
wizard=initCampWizard(form);
renderRegistrationFlow();

const paymentParams=new URLSearchParams(location.search),paymentState=paymentParams.get('payment'),paymentCode=paymentParams.get('code')||'',paymentMessage=paymentParams.get('message')||'';
if(paymentState==='paid'){
  clearRequestId();
  wizard.showStep(4,{scroll:false});
  finishForm('報名與付款已完成');
  $('.wizard-actions').hidden=true;
  showMessage('付款成功，報名已完成。付款入帳後將依填寫資料開立收據。',true);
}else if(paymentState==='account-issued'){
  clearRequestId();
  wizard.showStep(4,{scroll:false});
  finishForm('付款資料已建立');
  $('.wizard-actions').hidden=true;
  showMessage('繳費帳號、代碼或條碼已建立，請依藍新顯示的期限完成付款。入帳後才會正式保留名額。',true);
}else if(paymentState==='failed'){
  wizard.showStep(4,{scroll:false});
  $('.wizard-actions').hidden=true;
  $('.summary').hidden=true;
  $('.submit').hidden=true;
  $('.submit-note').hidden=true;
  $('#payment-retry').hidden=false;
  showMessage(`付款尚未完成。${paymentCode?` 錯誤代碼：${paymentCode}。`:''}${paymentMessage?` ${paymentMessage}`:' 請確認付款資料後重新操作。'}`);
  loadRetryState();
}
