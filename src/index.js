// import validator from './validator';

// sections
const actionPage = document.querySelector('#action-page');
const formPage = document.querySelector('#form-page');
const resultPage = document.querySelector('#result-page');

// btns
const btnPay = document.querySelector('#btn-pay');
const btnConfirmPay = document.querySelector('#confirm-pay');

// targets
const form = document.querySelector('#form');
const errorsInfo = document.querySelector('#errors-info');
const cardNumber = document.querySelector('#card-number');
const cardMonth = document.querySelector('#card-month');
const cardYear = document.querySelector('#card-year');
const cvv = document.querySelector('#cvv');
const cardName = document.querySelector('#card-name');
const cardLastname = document.querySelector('#card-lastname');
const email = document.querySelector('#email');

// actions
function toggleElement(target1, target2, prop1, prop2) {
  target1.classList.toggle(prop1);
  target2.classList.toggle(prop2);
}

// successful form
function submitForm() {
  form.reset();
  toggleElement(formPage, resultPage, 'visible', 'hidden');
  console.log(cardNumber.value, cardMonth.value, cardYear.value, cvv.value, cardName.value, cardLastname.value, email.value);
}

// validate form
function validateForm(event) {
  event.preventDefault();

  const errors = [];

  if (cardMonth.value === '0') {
    errors.push({ cardMonth: 'seleccione el mes correcto' });
  }

  if (cardYear.value === '0') {
    errors.push({ cardYear: 'seleccione el año correcto' });
  }

  if (!errors.length) {
    console.log('no hay errores');
    submitForm();
  } else {
    console.log('hay errores');
    const result = errors.map((error) => `<span>${Object.values(error)}</span>`);
    errorsInfo.innerHTML = result;
  }
}

// events
btnPay.addEventListener('click', () => toggleElement(actionPage, formPage, 'hidden', 'visible'));
form.addEventListener('submit', validateForm);

// others
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const yearsAhead = currentYear + 10;

function loadYears() {
  for (let i = currentYear; i <= yearsAhead; i++) {
    const optionElement = document.createElement('option');
    optionElement.value = i;
    optionElement.text = i;
    // cardYearSelect.add(optionElement);
    cardYear.appendChild(optionElement);
  }
}

window.addEventListener('load', loadYears);
