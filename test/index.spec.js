const passwordUtilities = require('../dist/index');

describe('generateStrongPassword', () => {
  test('generates a strong password with a length of 16', () => {
    const generatedPassword = passwordUtilities.generateStrongPassword(16);
    expect(generatedPassword.length).toEqual(16);
  });
});

describe('isStrongPassword', () => {
  test('checks whether a password is strong enough', () => {
    const testPassword = "test";
    const isStrongPassword = passwordUtilities.isStrongPassword(testPassword);
    expect(isStrongPassword).toEqual(false);
  });
});
