# Simple wrapper for [`node-mime`](https://github.com/broofa/node-mime)

[![Build Status](https://travis-ci.com/pascaliske/mime-types.svg?branch=master)](https://travis-ci.com/pascaliske/mime-types) [![codecov](https://codecov.io/gh/pascaliske/mime-types/branch/develop/graph/badge.svg)](https://codecov.io/gh/pascaliske/mime-types) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=pascaliske/mime-types)](https://dependabot.com)

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
