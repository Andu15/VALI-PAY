import validator from '../src/validator';

const { isValid, maskify, getIssuer } = validator;

describe('validator', () => {
  it('to be a object', () => {
    expect(typeof validator).toBe('object');
  });

  describe('isValid', () => {
    test('to be a function', () => {
      expect(typeof isValid).toBe('function');
    });

    test('should be true for "4677325673442211"', () => {
      expect(isValid('4677325673442211')).toBe(true);
    });

    test('should be true for "4818912971891379"', () => {
      expect(isValid('4818912971891379')).toBeTruthy();
    });

    test('should be false for "4517750238285307"', () => {
      expect(isValid('4517750238285307')).toBe(false);
    });

    test('should be false for "1234567890987654"', () => {
      expect(isValid('1234567890987654')).toBeFalsy();
    });
  });

  describe('maskify', () => {
    test('to be a function', () => {
      expect(typeof maskify).toBe('function');
    });

    test('It should return "************ 5745" for "4500364624285745"', () => {
      expect(maskify('4500364624285745')).toBe('************ 5745');
    });

    test('It should return "*********** 7340" for "370479888667340"', () => {
      expect(maskify('370479888667340')).toBe('*********** 7340');
    });

    test('It should return "************ 5707" for "3579684318575707"', () => {
      expect(maskify('3579684318575707')).toBe('************ 5707');
    });
  });

  describe('getIssuer', () => {
    test('to be a function', () => {
      expect(typeof getIssuer).toBe('function');
    });

    test('It should return "Mastercard" for "5432511851148307"', () => {
      expect(getIssuer('5432511851148307')).toBe('Mastercard');
    });

    test('It should return "Visa" for "4500364624285745"', () => {
      expect(getIssuer('4500364624285745')).toBe('Visa');
    });

    test('It should return "American Express" for "342772389162273"', () => {
      expect(getIssuer('342772389162273')).toBe('American Express');
    });

    test('It should return "Discover" for "6011486557999369"', () => {
      expect(getIssuer('6011486557999369')).toBe('Discover');
    });

    test('It should return "jcb" for "3529139145420024"', () => {
      expect(getIssuer('3529139145420024')).toBe('jcb');
    });

    test('It should return "China T-Union" for "3112345678901234567"', () => {
      expect(getIssuer('3112345678901234567')).toBe('China T-Union');
    });

    test('It should return "InstaPayment" for "6371234567890123"', () => {
      expect(getIssuer('6371234567890123')).toBe('InstaPayment');
    });

    test('It should return "Maestro" for "561234567890123456"', () => {
      expect(getIssuer('561234567890123456')).toBe('Maestro');
    });

    test('It should return "NA" for "12345678901234567"', () => {
      expect(getIssuer('12345678901234567')).toBe('NA');
    });
  });
});
