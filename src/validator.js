const validator = {
  // algoritmo de Luhn
  isValid: (creditCardNumber) => {
    const arrayNumber = [...creditCardNumber];
    const reverseArray = arrayNumber.reverse();
    const convertToNumber = reverseArray.map((el) => Number(el));
    const getOddPositions = convertToNumber.filter((number, index) => index % 2 === 0);
    const getEvenPositions = convertToNumber.filter((number, index) => index % 2 !== 0);
    const multiplyByTwo = getEvenPositions.map((pair) => pair * 2);
    const numbersGreaterThanNine = multiplyByTwo.filter((number) => number >= 10);
    const numbersLessThanTen = multiplyByTwo.filter((number) => number < 10);
    const acumulator = (dig1, dig2) => dig1 + dig2;
    const reduceNumbersToSingleDigits = numbersGreaterThanNine.map((number) => number - 9);
    const addDigitsGreaterThanNine = reduceNumbersToSingleDigits.reduce(acumulator, 0);
    const addNumbersLessThanTen = numbersLessThanTen.reduce(acumulator, 0);
    const addOddNumbers = getOddPositions.reduce(acumulator);
    const sumTotalResult = addDigitsGreaterThanNine + addNumbersLessThanTen + addOddNumbers;
    const isDivisibleByTen = sumTotalResult % 10 === 0;
    return isDivisibleByTen;
  },
  // showing the last digits of the card
  maskify: (creditCardNumber) => {
    let maskingCardNumber = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < creditCardNumber.length - 4; i++) {
      maskingCardNumber += '*';
    }
    const extractingLastFourDigits = creditCardNumber.slice(-4);
    maskingCardNumber = `${maskingCardNumber} ${extractingLastFourDigits}`;
    return maskingCardNumber;
  },
  // showing the brand
  getIssuer: (creditCardNumber) => {
    let brandCard = '';
    if (creditCardNumber.match(/^3[47][0-9]{13}$/g)) {
      brandCard = 'American Express';
    } else if (creditCardNumber.match(/^6011/g)) {
      brandCard = 'Discover';
    } else if (creditCardNumber.match(/^35[2-8][8-9]/g)) {
      brandCard = 'jcb';
    } else if (creditCardNumber.match(/^31[0-9]{17}$/g)) {
      brandCard = 'China T-Union';
    } else if (creditCardNumber.match(/^63[7-9][0-9]{13}$/g)) {
      brandCard = 'InstaPayment';
    } else if (creditCardNumber.match(/^[5-6][06789]/g)) {
      brandCard = 'Maestro';
    } else if (creditCardNumber.match(/^5[1-5][0-9]{14}$/g)) {
      brandCard = 'Mastercard';
    } else if (creditCardNumber.match(/^4[0-9]{15}$/g)) {
      brandCard = 'Visa';
    } else {
      brandCard = 'NA';
    }
    return brandCard;
  },
};

export default validator;
