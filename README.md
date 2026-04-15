# @if25b050/password-utilities

> A small library that provides utility functions to generate and check a strong password.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Security](#security)
- [License](#license)

## Installation

Install via npm:

```bash
npm install @if25b050/password-utilities
```
Install via yarn:

```bash
yarn add @if25b050/password-utilities
```

## Usage

Basic Usage

```js
import passwordUtilities from '@if25b050/password-utilities';

// generateStrongPassword will thow an exception if a value smaller than 8 is used
const strongPW = passwordUtilities.generateStrongPassword(12);
// isStrongPassword checks for the following:
// - an uppercase letter
// - an lowercase letter
// - a number
// - a special character of the following: !@#$%^&*()_+
// - at least 8 characters
const isStrongPW = passwordUtilities.isStrongPassword(strongPW);
const isNotStrongPW = passwordUtilities.isStrongPassword("W");

console.log(strongPW);      // e.g., "pC%mD8TpCKn2"
console.log(isStrongPW);    // e.g., true
console.log(isNotStrongPW); // e.g., false
```

### Examples

Examples of invalid Passwords:

```js
import passwordUtilities from '@if25b050/password-utilities';

console.log(passwordUtilities.isStrongPassword("A12awd12"));    // false, because a special character is missing
console.log(passwordUtilities.isStrongPassword("A1aw!1"));      // false, because 8 characters are required
console.log(passwordUtilities.isStrongPassword("A1aw!1"));      // true, because all requirements are fullfilled

```


## Contribution

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

## Security

Please refer to our [SECURITY.md](./SECURITY.md) for information about our security policies, how to report vulnerabilities, and our approach to handling security concerns.

**Important Note**: This library uses non-cryptographic randomness (`Math.random()`). Do not rely on it for security-critical functionality.

## License

This project is licensed under the [MIT License](./LICENSE.md).
