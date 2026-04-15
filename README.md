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
import * as passwordUtilities from '@if25b050/password-utilities';

const strongPW = passwordUtilities.generateStrongPassword(12);
const isStrongPW = passwordUtilities.isStrongPassword(strongPW);
const isNotStrongPW = passwordUtilities.isStrongPassword("W");

console.log(strongPW);      // e.g., "pC%mD8TpCKn2"
console.log(isStrongPW);    // e.g., true
console.log(isNotStrongPW); // e.g., false
```

## Contribution

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

## Security

Please refer to our [SECURITY.md](./SECURITY.md) for information about our security policies, how to report vulnerabilities, and our approach to handling security concerns.

**Important Note**: This library uses non-cryptographic randomness (`Math.random()`). Do not rely on it for security-critical functionality.

## License

This project is licensed under the [MIT License](./LICENSE.md).
