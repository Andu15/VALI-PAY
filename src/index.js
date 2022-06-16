// eslint-disable-next-line import/extensions
import validator from './validator.js';

// sections
const actionPage = document.querySelector('#action-page');
const formPage = document.querySelector('#form-page');
const loadingPage = document.querySelector('#loading-page');
const resultPage = document.querySelector('#result-page');

// btns
const btnPay = document.querySelector('#btn-pay');

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
const iconResult = document.querySelector('#icon-result');
// const brand = document.querySelector('#brand');
const cardNumberText = document.querySelector('#cardNumber-text');
const nameCardText = document.querySelector('#nameCard-text');
const cardDataExp = document.querySelector('#card-data-exp');

// actions
function toggleElement(target1, target2, prop1, prop2) {
  target1.classList.toggle(prop1);
  target2.classList.toggle(prop2);
}

// get elements e insert data
function getData(data) {
  const {
    isValid,
    maskify,
    getIssuer,
  } = validator;

  const {
    cardNumberInput,
    cardMonthInput,
    cardYearInput,
    // cvvInput,
    cardNameInput,
    cardLastnameInput,
    // emailInput,
  } = data;

  getIssuer(cardNumberInput);

  cardNumberText.textContent = maskify(cardNumberInput);
  nameCardText.textContent = `${cardNameInput.toUpperCase()} ${cardLastnameInput.toUpperCase()}`;
  cardDataExp.textContent = `${cardMonthInput}/${cardYearInput.slice(2)}`;

  const isValidCard = isValid(cardNumberInput);
  if (!isValidCard) {
    iconResult.innerHTML = `
      <div>
        <span class="iconify" data-icon="bxs:error-circle" style="color: #852511; font-size: 40px;"></span>
        <p>Hubo un error</p>
      </div>`;
  } else {
    iconResult.innerHTML = `
      <div>
        <span class="iconify" data-icon="ant-design:check-circle-filled" style="color: #f9c478; font-size: 40px;"></span>
        <p> Felicidades ! </p>
      </div>`;
  }
}

// function by stop spinner
function stopSpinner() {
  const timer = setTimeout(() => toggleElement(loadingPage, resultPage, 'hidden', 'hidden'), 2000);
  return () => clearTimeout(timer);
}

// successful form
function submitForm() {
  const formResult = {
    cardNumberInput: cardNumber.value,
    cardMonthInput: cardMonth.value,
    cardYearInput: cardYear.value,
    cvvInput: cvv.value,
    cardNameInput: cardName.value,
    cardLastnameInput: cardLastname.value,
    emailInput: email.value,
  };

  form.reset();

  toggleElement(formPage, loadingPage, 'visible', 'hidden');

  getData(formResult);

  stopSpinner();
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
    // console.log('no hay errores en el form');
    submitForm();
  } else {
    const result = errors.map((error) => `<span>${Object.values(error)}</span><br/>`);
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
  // eslint-disable-next-line no-plusplus
  for (let i = currentYear; i <= yearsAhead; i++) {
    const optionElement = document.createElement('option');
    optionElement.value = i;
    optionElement.text = i;
    // cardYearSelect.add(optionElement);
    cardYear.appendChild(optionElement);
  }
}

window.addEventListener('load', loadYears);
