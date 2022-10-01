import changeStepLP from './changeStepLP.js';

describe('Test changeStepLP fn', () => {
  test('Correct step', () => {
    expect(changeStepLP(2)).toBe(3);
    expect(changeStepLP(3)).toBe(2);
  });
  test('Incorrect step', () => {
    expect(changeStepLP(4)).toBe(undefined);
    expect(changeStepLP(5)).toBe(undefined);
  });
});
