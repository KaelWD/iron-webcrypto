# iron-webcrypto

[![jsDocs.io](https://img.shields.io/badge/jsDocs.io-reference-blue?style=flat-square)](https://www.jsdocs.io/package/iron-webcrypto)
[![downloads](https://img.shields.io/npm/dm/iron-webcrypto?style=flat-square)](https://www.npmjs.com/package/iron-webcrypto)
[![npm](https://img.shields.io/npm/v/iron-webcrypto?style=flat-square)](https://www.npmjs.com/package/iron-webcrypto)
[![jsr](https://img.shields.io/badge/jsr-@brc--dd/iron@v1.2.1-blue.svg?style=flat-square)](https://jsr.io/@brc-dd/iron)
[![deno](https://img.shields.io/badge/deno-iron@v1.2.1-blue.svg?style=flat-square)](https://deno.land/x/iron@v1.2.1/mod.ts)

This module is a replacement for `@hapi/iron`, written using standard APIs like
Web Crypto and Uint8Array, which make this compatible with a variety of runtimes
like Node.js, Deno, Bun, browsers, and edge environments including Cloudflare
Workers, Deno Deploy, Netlify Edge Functions, and Vercel Edge Runtime.

## Installation

<details open>
  <summary>npm</summary>

```sh
npm add iron-webcrypto
```

```ts
import * as Iron from 'iron-webcrypto'
```

</details>

<details>
  <summary>yarn</summary>

```sh
yarn add iron-webcrypto
```

```ts
import * as Iron from 'iron-webcrypto'
```

</details>

<details>
  <summary>pnpm</summary>

```sh
pnpm add iron-webcrypto
```

```ts
import * as Iron from 'iron-webcrypto'
```

</details>

<details>
  <summary>bun</summary>

```sh
bun add iron-webcrypto
```

```ts
import * as Iron from 'iron-webcrypto'
```

</details>

<details>
  <summary>npm - jsr</summary>

```sh
npx jsr add @brc-dd/iron
```

```ts
import * as Iron from '@brc-dd/iron'
```

</details>

<details>
  <summary>yarn - jsr</summary>

```sh
yarn dlx jsr add @brc-dd/iron
```

```ts
import * as Iron from '@brc-dd/iron'
```

</details>

<details>
  <summary>pnpm - jsr</summary>

```sh
pnpm dlx jsr add @brc-dd/iron
```

```ts
import * as Iron from '@brc-dd/iron'
```

</details>

<details>
  <summary>bun - jsr</summary>

```sh
bunx jsr add @brc-dd/iron
```

```ts
import * as Iron from '@brc-dd/iron'
```

</details>

<details>
  <summary>deno - jsr</summary>

```sh
deno add jsr:@brc-dd/iron
```

```ts
import * as Iron from '@brc-dd/iron'
```

</details>

<details>
  <summary>deno - jsr - direct import</summary>

```ts
import * as Iron from 'jsr:@brc-dd/iron@1.2.1'
```

</details>

<details>
  <summary>deno - esm.sh - direct import</summary>

```ts
import * as Iron from 'https://esm.sh/iron-webcrypto@1.2.1'
```

</details>

<details>
  <summary>deno - deno.land - direct import</summary>

```ts
import * as Iron from 'https://deno.land/x/iron@v1.2.1/mod.ts'
```

</details>

<details>
  <summary>deno - npm</summary>

```sh
deno add npm:iron-webcrypto
```

```ts
import * as Iron from 'iron-webcrypto'
```

</details>

<details>
  <summary>deno - npm - direct import</summary>

```ts
import * as Iron from 'npm:iron-webcrypto@1.2.1'
```

</details>

Don't use this module directly in the browser. While it will work, it's not
recommended to use it in client-side code because of the security implications.

## Usage

Refer [`@hapi/iron`'s docs](https://hapi.dev/module/iron/).

> Check out [**unjs/h3**](https://github.com/unjs/h3) and
> [**vvo/iron-session**](https://github.com/vvo/iron-session) to see this module
> in use!

## Security Considerations

**Users are responsible for implementing `iron-webcrypto` in a secure manner and
ensuring the security of their cryptographic keys. I DO NOT guarantee the
security of this module.** So far, no security vulnerabilities have been
reported, but I am no cryptography expert. Quoting
[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API):

> The Web Crypto API provides a number of low-level cryptographic primitives.
> It's very easy to misuse them, and the pitfalls involved can be very subtle.
>
> Even assuming you use the basic cryptographic functions correctly, secure key
> management and overall security system design are extremely hard to get right,
> and are generally the domain of specialist security experts.
>
> Errors in security system design and implementation can make the security of
> the system completely ineffective.

As a request, it would be great if someone with expertise in this field could
thoroughly review the code.

Version 2 of this module is now available. However, version 1 will continue to
receive security updates until at least April 30, 2026.

## Migration from v1 to v2

- The functions no longer require an explicit WebCrypto implementation. This
  change aligns the API with `@hapi/iron`. Previously, this was necessary to
  support versions of Node.js prior to v19, which lacked WebCrypto API support
  via `globalThis.crypto`. With Node.js v18 now reaching its end of life, this
  workaround is no longer needed.

  ```diff
  - const sealed = await Iron.seal(_crypto, obj, password, Iron.defaults)
  + const sealed = await Iron.seal(obj, password, Iron.defaults)
  ```

## Credits

```txt
@hapi/iron
    Copyright (c) 2012-2022, Project contributors
    Copyright (c) 2012-2020, Sideway Inc
    All rights reserved.
    https://cdn.jsdelivr.net/npm/@hapi/iron@7.0.1/LICENSE.md

@smithy/util-base64
    Copyright 2018-2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
    https://cdn.jsdelivr.net/npm/@smithy/util-base64@3.0.0/LICENSE

@smithy/util-utf8
    Copyright 2018-2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
    https://cdn.jsdelivr.net/npm/@smithy/util-utf8@3.0.0/LICENSE
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/brc-dd/static/sponsors.svg">
    <img alt="brc-dd's sponsors" src='https://cdn.jsdelivr.net/gh/brc-dd/static/sponsors.svg'/>
  </a>
</p>
