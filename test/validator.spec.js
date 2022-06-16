// importamos el modulo `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

const { isValid } = validator;

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
  });
});
