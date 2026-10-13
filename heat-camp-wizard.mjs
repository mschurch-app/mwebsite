export function initCampWizard(form){
  const steps=[...form.querySelectorAll('[data-wizard-step]')];
  const status=form.querySelector('.wizard-status');
  const actions=form.querySelector('.wizard-actions');
  const back=form.querySelector('.wizard-back');
  const next=form.querySelector('.wizard-next');
  const progress=[...document.querySelectorAll('.steps li')];
  const error=document.createElement('p');
  error.className='wizard-error';
  error.setAttribute('role','alert');
  error.hidden=true;
  status.append(error);
  let current=0;

  function clearError(){
    error.hidden=true;
    error.textContent='';
  }

  function showStep(index,{scroll=true}={}){
    current=Math.max(0,Math.min(index,steps.length-1));
    steps.forEach((step,number)=>{step.hidden=number!==current;});
    progress.forEach((item,number)=>{
      item.classList.toggle('current',number===current);
      item.classList.toggle('done',number<current);
      if(number===current)item.setAttribute('aria-current','step');
      else item.removeAttribute('aria-current');
    });
    form.querySelector('.wizard-count').textContent=`第 ${current+1} 步，共 ${steps.length} 步`;
    form.querySelector('.wizard-title').textContent=progress[current]?.querySelector('b')?.textContent||'';
    form.querySelector('.wizard-track span').style.width=`${((current+1)/steps.length)*100}%`;
    back.hidden=current===0;
    next.hidden=current===steps.length-1;
    if(current<steps.length-1)next.innerHTML=`下一步：${progress[current+1]?.querySelector('b')?.textContent||'繼續'} <span aria-hidden="true">→</span>`;
    clearError();
    if(scroll)status.scrollIntoView({behavior:'smooth',block:'start'});
  }

  function showError(message,target){
    error.textContent=message;
    error.hidden=false;
    status.scrollIntoView({behavior:'smooth',block:'start'});
    if(target){
      setTimeout(()=>{
        target.focus({preventScroll:true});
        if(typeof target.reportValidity==='function'&&!target.checkValidity())target.reportValidity();
      },180);
    }
  }

  function invalidControl(step){
    return [...step.querySelectorAll('input,select,textarea')]
      .find(control=>{
        const hiddenAncestor=control.closest('[hidden]');
        return !control.disabled&&(!hiddenAncestor||hiddenAncestor===step)&&!control.checkValidity();
      });
  }

  function validateStep(index){
    const step=steps[index];
    const invalid=invalidControl(step);
    if(invalid){
      showError('請先完成這一步的必填資料，再繼續。',invalid);
      return false;
    }
    const school=step.querySelector('[name="school_stage"]');
    const exception=step.querySelector('[name="eligibility_exception"]');
    if(school?.value==='elementary_6_or_below'&&!exception?.checked){
      showError('國小六年級以下，請先勾選例外申請並填寫原因。',exception);
      return false;
    }
    clearError();
    return true;
  }

  function goToFirstInvalid(){
    for(let index=0;index<steps.length;index++){
      if(invalidControl(steps[index])||(
        steps[index].querySelector('[name="school_stage"]')?.value==='elementary_6_or_below'&&
        !steps[index].querySelector('[name="eligibility_exception"]')?.checked
      )){
        showStep(index);
        validateStep(index);
        return true;
      }
    }
    return false;
  }

  next.addEventListener('click',()=>{
    if(validateStep(current))showStep(current+1);
  });
  back.addEventListener('click',()=>showStep(current-1));
  form.addEventListener('submit',event=>{
    if(current<steps.length-1){
      event.preventDefault();
      event.stopImmediatePropagation();
      if(validateStep(current))showStep(current+1);
    }
  },true);
  form.addEventListener('input',clearError);
  form.addEventListener('change',clearError);
  const refundStep=Number(document.querySelector('#refund-policy')?.closest('[data-wizard-step]')?.dataset.wizardStep??steps.length-1);
  document.querySelector('[data-wizard-refund]')?.addEventListener('click',()=>showStep(refundStep,{scroll:false}));

  status.hidden=false;
  actions.hidden=false;
  showStep(location.hash==='#refund-policy'?refundStep:0,{scroll:false});
  return {showStep,goToFirstInvalid};
}
