// Keep the shortcut away from the refund terms, registration and confirmation.
const shortcut = document.querySelector('.camp-mobile-register');
const registration = document.querySelector('#register');
const refundInformation = document.querySelector('#refund-information');
const confirmation = document.querySelector('#preview-dialog');
document.querySelectorAll('[data-camp-refund]').forEach(link => {
  link.addEventListener('click', () => {
    if (confirmation?.open) confirmation.close();
  });
});
if (shortcut && registration && 'IntersectionObserver' in window) {
  let inForm = false;
  let inRefund = false;
  const sync = () => { shortcut.hidden = inForm || inRefund || !!confirmation?.open; };
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.target === registration) inForm = entry.isIntersecting;
      if (entry.target === refundInformation) inRefund = entry.isIntersecting;
    }
    sync();
  });
  observer.observe(registration);
  if (refundInformation) observer.observe(refundInformation);
  if (confirmation) new MutationObserver(sync).observe(confirmation, {attributes:true, attributeFilter:['open']});
}
