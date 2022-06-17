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
const brand = document.querySelector('#brand');
const cardNumberText = document.querySelector('#cardNumber-text');
const nameCardText = document.querySelector('#nameCard-text');
const cardDataExp = document.querySelector('#card-data-exp');
const informationResult = document.querySelector('#information-result');

// variables
const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();
const yearsAhead = currentYear + 10;

// toggle sections with display none
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

  switch (getIssuer(cardNumberInput)) {
    case 'American Express':
      brand.innerHTML = `
        <img class='brand-logo' src='./assets/images/brands/american-express-logo.png' alt='American Express logo'/>
      `;
      break;
    case 'Discover':
      brand.innerHTML = `
        <img class='brand-logo' src='./assets/images/brands/discover-logo.png' alt='Discover logo'/>
      `;
      break;
    case 'jcb':
      brand.innerHTML = `
        <img class='brand-logo' src='./assets/images/brands/jcb-logo.png' alt='JCB logo'/>
      `;
      break;
    case 'China T-Union':
      brand.innerHTML = `
        <img class='brand-logo' src='./assets/images/brands/china-t-union-logo.png' alt='China T-Union logo'/>
      `;
      break;
    case 'InstaPayment':
      brand.innerHTML = `
        <img class='brand-logo' src='./assets/images/brands/instapay-logo.png' alt='InstaPayment logo'/>
      `;
      break;
    case 'Maestro':
      brand.innerHTML = `
        <img class='brand-logo' src='./assets/images/brands/maestro-logo.png' alt='Maestro logo'/>
      `;
      break;
    case 'Mastercard':
      brand.innerHTML = `
        <img class='brand-logo' src='./assets/images/brands/mastercard-logo.png' alt='Mastercard logo'/>
      `;
      break;
    case 'Visa':
      brand.innerHTML = `
        <img class='brand-logo' src='./assets/images/brands/visa-logo.png' alt='Visa logo'/>
      `;
      break;
    default:
      break;
  }

  cardNumberText.textContent = maskify(cardNumberInput);
  nameCardText.textContent = `${cardNameInput.toUpperCase()} ${cardLastnameInput.toUpperCase()}`;
  cardDataExp.textContent = `${cardMonthInput}/${cardYearInput.slice(2)}`;

  const isValidCard = isValid(cardNumberInput);
  if (
    // eslint-disable-next-line no-mixed-operators
    !isValidCard || Number(cardYearInput) === currentYear && Number(cardMonthInput) <= currentMonth
  ) {
    iconResult.innerHTML = `
        <span class="iconify" data-icon="bxs:error-circle" style="color: #852511; font-size: 40px;"></span>
        <p style="color:#852511" class="icon-result--text">Hubo un error</p>`;

    informationResult.innerHTML = `
      <p class="information-result--sub">Uy, al parecer haz ingresado una tarjeta incorrecta, intenta nuevamente</p>
      <button type="button" onclick="location.reload()" class="btn btn-return">
        <span class="iconify" data-icon="icon-park-outline:return" style="color: #852511; font-size: 40px;"></span>
        <p class="information-result--text">Regresar</p>
      </button>`;
  } else {
    const randomNumber = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
    iconResult.innerHTML = `
        <span class="iconify" data-icon="ant-design:check-circle-filled" style="color: #f9c478; font-size: 40px;"></span>
        <p style="color:#F9C478" class="icon-result--text"> Felicidades ! </p>`;

    informationResult.innerHTML = `
        <p class="information-result--sub">Tu pago se ha realizado correctamente con el número de transacción:</p>
        <span class="information-result--text">VALI-${randomNumber}${currentYear}</span>`;
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
