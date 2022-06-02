// sections
const actionPage = document.querySelector('#action-page');
const formPage = document.querySelector('#form-page');
const resultPage = document.querySelector('#result-page');

// btns
const btnPay = document.querySelector('#btn-pay');

// actions
function toggleElement(target1, target2, target3) {
  target1.classList.toggle('hidden');
  target2.classList.toggle('block');
  target3.classList.toggle('block');
}

// events
btnPay.addEventListener('click', () => toggleElement(actionPage, formPage, resultPage));
