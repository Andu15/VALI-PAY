// import validator from './validator';

// sections
const actionPage = document.querySelector('#action-page');
const formPage = document.querySelector('#form-page');
const loadingPage = document.querySelector('#loading-page');
const resultPage = document.querySelector('#result-page');

// btns
const btnPay = document.querySelector('#btn-pay');
// const btnConfirmPay = document.querySelector('#confirm-pay');

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

// variables
const formObject = [];

// actions
function toggleElement(target1, target2, prop1, prop2) {
  target1.classList.toggle(prop1);
  target2.classList.toggle(prop2);
}

// function by stop spinner
function stopSpinner() {
  const timer = setTimeout(() => toggleElement(loadingPage, resultPage, 'hidden', 'hidden'), 2000);
  return () => clearTimeout(timer);
}

// successful form
function submitForm() {
  const formResult = {
    cardNumber: cardNumber.value,
    cardMonth: cardMonth.value,
    cardYear: cardYear.value,
    cvv: cvv.value,
    cardName: cardName.value,
    cardLastname: cardLastname.value,
    email: email.value,
  };

  form.reset();

  toggleElement(formPage, loadingPage, 'visible', 'hidden');

  stopSpinner();

  formObject.push(formResult);
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
    console.log('no hay errores en el form');
    submitForm();
  } else {
    const result = errors.map((error) => {
      // console.log(error);
      // console.log(typeof(error));
      // console.log(Object.values(error).join());
      // console.log(Object.values(error).join(''));
      console.log(Object.values(error).join(','));
      return `<span>${Object.values(error)}</span><br/>`;
    });
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
