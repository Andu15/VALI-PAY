// importamos el modulo `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

const { isValid, maskify } = validator;

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });
});

describe('isValid', () => {
  test('debería ser una función', () => {
    expect(typeof isValid).toBe('function');
  });
});

describe('maskify', () => {
  test('debería ser una función', () => {
    expect(typeof maskify).toBe('function');
  });
});
