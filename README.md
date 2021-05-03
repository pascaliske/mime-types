# Simple wrapper for [`node-mime`](https://github.com/broofa/node-mime)

[![npm (scoped)](https://img.shields.io/npm/v/@pascaliske/mime-types.svg?style=flat-square)](https://www.npmjs.com/package/@pascaliske/mime-types) [![GitHub Tag](https://img.shields.io/github/tag/pascaliske/mime-types.svg?style=flat-square)](https://github.com/pascaliske/mime-types) [![Build Status](https://img.shields.io/github/workflow/status/pascaliske/mime-types/Test%20package/master?label=test&style=flat-square)](https://github.com/pascaliske/mime-types/actions) [![codecov](https://codecov.io/gh/pascaliske/mime-types/branch/develop/graph/badge.svg)](https://codecov.io/gh/pascaliske/mime-types) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=pascaliske/mime-types)](https://dependabot.com) [![GitHub Last Commit](https://img.shields.io/github/last-commit/pascaliske/mime-types?style=flat-square)](https://github.com/pascaliske/mime-types) [![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg?style=flat-square)](https://github.com/Naereen/badges)

## Installation

To install the module use the following commands:

```bash
$ yarn add @pascaliske/mime-types
```

## Usage

### tl:dr;

```typescript
import { getType, getExtension } from '@pascaliske/mime-types'

getType('text') // => 'text/plain'
getExtension('text/plain') // => 'txt'
```

For more information go to the [node-mime package](https://github.com/broofa/node-mime).

## License

MIT © [Pascal Iske](https://pascaliske.dev)
