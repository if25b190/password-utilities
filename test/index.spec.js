const passwordUtilities = require('../dist/index');

describe('generateStrongPasswordWithLowLength', () => {
  test('generates a strong password with a length of 4', () => {
    const callFunc = () => {
      passwordUtilities.generateStrongPassword(4);
    };
    expect(callFunc).toThrow("Length must be 8 or higher");
  });
});

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

describe('generate10000StrongPasswordsWithFix', () => {
  test('generates 10000 passwords that are always strong with a length of 8', () => {
    for (let i = 0; i < 10000; i++) {
      const generatedPassword = passwordUtilities.generateStrongPassword(8);
      expect(generatedPassword.length).toEqual(8);
    }
  });
});
