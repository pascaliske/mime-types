# Simple wrapper for [`node-mime`](https://github.com/broofa/node-mime)

[![Build Status](https://travis-ci.com/pascaliske/mime-types.svg?branch=master)](https://travis-ci.com/pascaliske/mime-types) [![Greenkeeper badge](https://badges.greenkeeper.io/pascaliske/mime-types.svg)](https://greenkeeper.io/)

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

MIT © [Pascal Iske](https://pascal-iske.de)
