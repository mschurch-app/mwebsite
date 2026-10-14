const ENDPOINT='https://aqanuwilmvdtlzuqlrau.supabase.co/functions/v1/heat-camp-registration';
const minimums={card:10,atm:10,barcode:20};
const names={card:'信用卡',webatm:'WebATM',atm:'ATM 虛擬帳號',barcode:'超商條碼',cvs:'超商代碼'};
const statuses={created:'待前往付款',account_issued:'待繳款／待入帳',paid:'已付款',failed:'付款失敗'};
const $=selector=>document.querySelector(selector);
let password=sessionStorage.getItem('heat-camp-payment-test-password')||'';

async function api(action,data={}){
  const response=await fetch(ENDPOINT,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({action,password,expected_environment:'production',...data}),signal:AbortSignal.timeout(20000)});
  const body=await response.json().catch(()=>({}));
  if(!response.ok||!body.ok)throw Error(body.error||'payment_test_unavailable');
  return body;
}
function message(selector,value){const node=$(selector);node.textContent=value;node.hidden=!value;}
function updateAmount(){
  const method=$('#method').value,minimum=minimums[method],input=$('#amount');
  input.min=String(minimum);
  if(Number(input.value)<minimum)input.value=String(minimum);
  $('#amount-note').textContent=`${names[method]}最低測試金額 NT$${minimum}；這是正式交易，請自行決定是否完成付款。`;
}
function renderOrders(orders){
  const tbody=$('#orders');tbody.replaceChildren();
  if(!orders.length){const row=tbody.insertRow();const cell=row.insertCell();cell.colSpan=5;cell.textContent='尚無測試交易。';return;}
  for(const order of orders){
    const row=tbody.insertRow();
    const values=[new Date(order.created_at).toLocaleString('zh-TW',{timeZone:'Asia/Taipei'}),names[order.payment_method]||order.payment_method,`NT$${order.amount}`,order.merchant_order_no,statuses[order.status]||order.status];
    for(const value of values){const cell=row.insertCell();cell.textContent=value;}
    row.lastElementChild.className=`status-${order.status}`;
  }
}
async function enter(){
  const result=await api('payment_test_dashboard');
  $('#login-section').hidden=true;$('#dashboard').hidden=false;
  $('#method-minimums').replaceChildren(...Object.entries(result.methods).map(([method,minimum])=>{
    const node=document.createElement('div');node.className='method';
    const name=document.createElement('b');name.textContent=names[method]||method;
    const amount=document.createElement('span');amount.textContent=`最低 NT$${minimum}`;
    node.append(name,amount);return node;
  }));
  renderOrders(result.orders||[]);updateAmount();
  sessionStorage.setItem('heat-camp-payment-test-password',password);
  const payment=new URLSearchParams(location.search).get('payment');
  if(payment){message('#test-message',payment==='paid'?'此筆交易已由藍新確認付款；下方可查核紀錄。':payment==='account-issued'?'藍新已回傳付款帳號或條碼，實際繳款後請重新查詢狀態。':payment==='unknown'?'付款回傳尚待確認；請查看下方紀錄，勿重複付款。':'交易尚未完成，請查看下方狀態。');}
}
$('#login-form').addEventListener('submit',async event=>{
  event.preventDefault();password=$('#password').value.trim();
  message('#login-message','');
  try{await enter();}catch(error){message('#login-message',error.message==='payment_test_password_invalid'?'密碼錯誤。':`金流服務暫時無法連線（${error.message}）。`);}
});
$('#method').addEventListener('change',updateAmount);
$('#refresh').addEventListener('click',async()=>{
  try{const result=await api('payment_test_dashboard');renderOrders(result.orders||[]);}catch{message('#test-message','暫時無法查詢狀態，請稍後再試。');}
});
$('#test-form').addEventListener('submit',async event=>{
  event.preventDefault();message('#test-message','');
  const method=$('#method').value,amount=Number($('#amount').value),email=$('#email').value.trim();
  if(!Number.isInteger(amount)||amount<minimums[method]||amount>1000){message('#test-message',`請輸入 NT$${minimums[method]} 至 NT$1,000。`);return;}
  const button=$('#test-submit');button.disabled=true;
  let requestId=sessionStorage.getItem('heat-camp-payment-test-pending-id');
  if(!requestId){requestId=crypto.randomUUID();sessionStorage.setItem('heat-camp-payment-test-pending-id',requestId);}
  try{
    const result=await api('payment_test_checkout',{request_id:requestId,email,payment_method:method,amount});
    if(!result.gateway||!result.fields)throw Error('payment_test_unavailable');
    sessionStorage.removeItem('heat-camp-payment-test-pending-id');
    const gateway=document.createElement('form');gateway.method='POST';gateway.action=result.gateway;gateway.hidden=true;
    for(const [key,value] of Object.entries(result.fields)){const input=document.createElement('input');input.name=key;input.value=String(value);gateway.append(input);}
    document.body.append(gateway);gateway.submit();
  }catch(error){
    const errors={payment_test_password_invalid:'密碼已失效，請重新輸入。',invalid_payment_test_request:'請檢查 Email 與最低金額。',payment_test_request_mismatch:'這筆交易資料與上次送出的不同，請重新開啟此頁再試。',payment_test_unavailable:'暫時無法建立交易，請稍後再試。'};
    message('#test-message',errors[error.message]||'暫時無法建立交易，請稍後再試。');
    button.disabled=false;
  }
});
if(password)enter().catch(()=>{sessionStorage.removeItem('heat-camp-payment-test-password');password='';});
