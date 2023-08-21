test('Devo conhecer as principais assertivas do Jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
});

test('Devo saber trabalhar com objetos', () => {
  const obj = { name: 'Romeo', mail: 'romeocostabarros@gmail.com' };
  expect(obj).toHaveProperty('name');
  expect(obj).toHaveProperty('name', 'Romeo');
  expect(obj.name).toBe('Romeo');

  const obj2 = { name: 'Romeo', mail: 'romeocostabarros@gmail.com' };
  expect(obj).not.toBe(obj2);
  expect(obj).toEqual(obj2);
  expect(obj).toBe(obj);
});
