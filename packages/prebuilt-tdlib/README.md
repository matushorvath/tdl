## Prebuilt TDLib for Amazon Linux 2

This package is a fork of the [Bannerets/tdl] `prebuilt-tdlib` package.
The fork was modified to work with Amazon Linux 2, which contans an older glibc
version that does not work using the original `prebuilt-tdlib` package.

[Bannerets/tdl]: https://github.com/Bannerets/tdl

## Prebuilt TDLib

This package distributes pre-built [TDLib][] shared libraries through npm.
The libraries are built on GitHub Actions: [prebuilt-tdlib.yml][].

[TDLib]: https://github.com/tdlib/td
[prebuilt-tdlib.yml]: ../../.github/workflows/prebuilt-tdlib.yml

The shared libraries are statically linked against OpenSSL and zlib to prevent
compatibility issues in Node.js.

Supported systems:
- GNU/Linux x86_64

On Linux, TDLib is built on Amazon Linux 2 and requires glibc version >= 2.26 to
be installed on your system.

To install `prebuilt-tdlib-amazon-linux-2` for e.g. TDLib v1.8.12, run:

```console
$ npm install prebuilt-tdlib-amazon-linux-2@td-1.8.12
```

`prebuilt-tdlib-amazon-linux-2` can be installed for other TDLib versions, see the "npm tags"
section below or `$ npm info prebuilt-tdlib-amazon-linux-2` to get the list of available
versions.

### Usage

The `prebuilt-tdlib-amazon-linux-2` package exports a single function `getTdjson`, which
returns the path to the `tdjson` shared library.

```javascript
const { getTdjson } = require('prebuilt-tdlib-amazon-linux-2')
console.log(getTdjson())
// Prints a path like:
// '/home/user/proj/node_modules/prebuilt-tdlib-amazon-linux-2/prebuilds/tdlib-linux-x64/libtdjson.so'
```

This package can be used with, for example, [`tdl`][tdl]. You can pass the
path to the `TDLib` constructor:

[tdl]: https://github.com/Bannerets/tdl

```javascript
const { TDLib } = require('tdl-tdlib-addon')
const { getTdjson } = require('prebuilt-tdlib-amazon-linux-2')
/* ... */ new TDLib(getTdjson()) /* ... */
```

### Versioning

Because TDLib does not follow Semver, to not require the users to manually
specify the exact version of `prebuilt-tdlib-amazon-linux-2` in their `package.json`, the TDLib
version is packed into a single minor version.

`prebuilt-tdlib-amazon-linux-2` is published to npm under versions `0.xyyyzzz.v`, where

- `x`, `y`, `z` correspond to the `x.y.z` TDLib version (e.g., 1.8.0). The
  leading zeros are appended to `y` and `z` (y=`8` becomes y=`008`).
- `v` corresponds to the version of `prebuilt-tdlib-amazon-linux-2` itself, these updates can
  contain fixes in case some of the builds were broken or include new pre-built
  libraries for other platforms.
- The major version is always `0`.

E.g. the npm release for TDLib `v1.8.5` is `0.1008005.0`.

For convenience, `td-X` dist-tags are available. To install `prebuilt-tdlib-amazon-linux-2` for
TDLib v1.8.5, just run `npm install prebuilt-tdlib-amazon-linux-2@td-1.8.5`, or
`npm install prebuilt-tdlib-amazon-linux-2@td-1.8.0` for TDLib v1.8.0. This will automatically
install the needed version of `prebuilt-tdlib-amazon-linux-2`.

Additionaly, TDLib's versioning is weird, and some of the `prebuilt-tdlib-amazon-linux-2`
releases are not connected to a specific tag release in the TDLib repository.

The releases of the `prebuilt-tdlib-amazon-linux-2` npm package are not git-tagged.

### npm tags

- [![npm](https://img.shields.io/npm/v/prebuilt-tdlib-amazon-linux-2/latest.svg)](https://www.npmjs.com/package/prebuilt-tdlib-amazon-linux-2)
- [![npm](https://img.shields.io/npm/v/prebuilt-tdlib-amazon-linux-2/td-1.8.12.svg)](https://www.npmjs.com/package/prebuilt-tdlib-amazon-linux-2/v/td-1.8.12)
