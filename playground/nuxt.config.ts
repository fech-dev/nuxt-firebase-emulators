export default defineNuxtConfig({
  modules: [
    '../src/module',
    'nuxt-vuefire',
  ],
  ssr: false,
  devtools: { enabled: true },
  compatibilityDate: '2025-02-01',

  firebaseEmulators: {
    auth: {
      enabled: true,
      port: 9091,
    },
    firestore: {
      enabled: true,
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
