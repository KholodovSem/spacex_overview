import labelRP from './labelRP';

describe('Testing labelLP fn', () => {
  test('Correct value', () => {
    expect(labelRP(1)).toBe('Step 1. Write your name');
    expect(labelRP(2)).toBe('Step 2. Write your email');
    expect(labelRP(3)).toBe('Step 3. Write your password');
  });
  test('Incorrect value', () => {
    expect(labelRP(4)).toBe(undefined);
    expect(labelRP(5)).toBe(undefined);
    expect(labelRP('5')).toBe(undefined);
    expect(labelRP([5])).toBe(undefined);
  });
});
