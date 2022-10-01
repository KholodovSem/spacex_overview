import changeStepRP from './changeStepRP.js';

describe('Test changeStepLP fn', () => {
  test('Correct step', () => {
    expect(changeStepRP(1)).toBe(2);
    expect(changeStepRP(2)).toBe(3);
    expect(changeStepRP(3)).toBe(1);
  });
  test('Incorrect step', () => {
    expect(changeStepRP(4)).toBe(undefined);
    expect(changeStepRP(5)).toBe(undefined);
  });
});
