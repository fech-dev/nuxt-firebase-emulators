import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app'
import { connectFirestoreEmulator } from 'firebase/firestore'
import { connectAuthEmulator } from 'firebase/auth'
import { useFirestore, useFirebaseAuth } from 'vuefire'

export default defineNuxtPlugin((nuxt) => {
  if (!('vuefire' in nuxt.$config.public)) {
    throw new Error('nuxt-firebase-emulators error: nuxt-vuefire not detected')
  }

  const config = useRuntimeConfig()
  const { firebaseEmulators } = config.public

  console.info('Firebase Emulators: ')

  if (firebaseEmulators?.firestore.enabled) {
    console.info('🛜 Connecting to Firesore Emulator')
    const db = useFirestore()
    connectFirestoreEmulator(db, '127.0.0.1', firebaseEmulators?.firestore.port || 8080)
    console.info('✅ Firestore connected\n\n')
  }

  if (firebaseEmulators?.auth.enabled) {
    console.info('🛜 Connecting to Firebase Auth Emulator')
    const auth = useFirebaseAuth()!
    const url = `http://127.0.0.1:${firebaseEmulators?.auth.port || 9099}`
    connectAuthEmulator(auth, url)
    console.info('✅ Firebase Auth connected\n')
  }
})
