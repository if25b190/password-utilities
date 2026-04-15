module.exports = {
  generateStrongPassword: (length = 12) => {
    if (length < 8) {
      throw new Error("Length must be 8 or higher");
    }
    const allowedPasswordCharacters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let strongPassword = "";
    while (!isStrongPassword(strongPassword)) {
      strongPassword = Array
        .from(
          { length },
          () => {
            const randomAllowedPasswordCharacterIndex =
              Math.floor(Math.random() * allowedPasswordCharacters.length);
            const randomAllowedPasswordCharacter =
              allowedPasswordCharacters.charAt(randomAllowedPasswordCharacterIndex);
            return randomAllowedPasswordCharacter;
          })
        .join('');
    }
    return strongPassword;
  },
  isStrongPassword: (password) => isStrongPassword(password)
}

function isStrongPassword(password) {
  if (password.length < 8) {
    return false;
  }
  const isPasswordStrong = /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[!@#$%^&*()_+]/.test(password);
  return isPasswordStrong;
}
