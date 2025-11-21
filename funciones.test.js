const { sumar, restar, multiplicar, dividir, potenciar } = require('./funciones');

test('sumar 2 + 3 = 5', () => {
  expect(sumar(2,3)).toBe(5);
});

test('restar 5 - 2 = 3', () => {
  expect(restar(5,2)).toBe(3);
});