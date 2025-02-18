import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export interface FirebaseEmulatorsModuleOptions {
  auth: {
    enabled?: boolean
    port?: number
  }
  firestore: {
    enabled?: boolean
    port?: number
  }
}

declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    firebaseEmulators?: FirebaseEmulatorsModuleOptions
  }
}

export default defineNuxtModule<FirebaseEmulatorsModuleOptions>({
  meta: {
    name: 'firebase-emulators',
    configKey: 'firebaseEmulators',
  },
  defaults: {
    auth: {
      enabled: toBoolean(process.env.FIREBASE_EMULATOR_AUTH),
      port: 9099,
    },
    firestore: {
      enabled: toBoolean(process.env.FIREBASE_EMULATOR_FIRESTORE),
      port: 8080,
    },
  },
  setup(options: FirebaseEmulatorsModuleOptions, nuxt) {
    const { NODE_ENV } = process.env
    if (NODE_ENV === 'production') return

    const { resolve } = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.firebaseEmulators = { ...options }

    addPlugin(resolve('./runtime/plugin.client'))
  },
})

function toBoolean(value: number | undefined | null | string | boolean) {
  return ![0, undefined, null, 'false', '', false].includes(value)
}
