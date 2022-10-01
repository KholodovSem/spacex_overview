import labelLP from './labelLP.js';

describe('Testing labelLP fn', () => {
  test('Correct value', () => {
    expect(labelLP(2)).toBe('Login');
    expect(labelLP(3)).toBe('Password');
  });
  test('Incorrect value', () => {
    expect(labelLP(4)).toBe(undefined);
    expect(labelLP(5)).toBe(undefined);
  });
});
