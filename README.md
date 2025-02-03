
# Firebase Emulators

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Automatically connects to firebase emulators.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/fech-dev/nuxt-firebase-emulators?file=playground%2Fapp.vue)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-firebase-emulators
```

⚠️ This module relies on the `nuxt-vuefire` module, ensure to have it installed.


## How it works
The module will install a client plugin where will handle the connection to emulators.
This plugin will be ignored if the application is run in production mode.

## Config
You can configure which emulators to connect through the `firebaseEmulators` config key.

```typescript
//nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    'nuxt-firebase-emulators', // <-- It's important to put this module before the nuxt-vuefire module.
    'nuxt-vuefire',
  ],

  firebaseEmulators: {
    auth: {
      enabled: process.env.FIREBASE_EMULATOR_AUTH === 'true', // env variables are read as strings... so we need to convert them to the right type
      port: 9091,
    },
    firestore: {
      enabled: process.env.FIREBASE_EMULATOR_FIRESTORE === 'true',
      port: 3031,
    },
  },

  vuefire: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    },
    auth: {
      enabled: true,
    },
  },

})

```

## Available Emulators

- auth
- firestore
- ...others to be implemented soon


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  pnpm install
  
  # Generate type stubs
  pnpm dev:prepare
  
  # Develop with the playground
  pnpm dev
  
  # Build the playground
  pnpm dev:build
  
  # Run ESLint
  pnpm lint
  
  # Run Vitest
  pnpm test
  pnpm test:watch
  
  # Release new version
  pnpm release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-firebase-emulators/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-firebase-emulators

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-firebase-emulators.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/nuxt-firebase-emulators

[license-src]: https://img.shields.io/npm/l/nuxt-firebase-emulators.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-firebase-emulators

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
