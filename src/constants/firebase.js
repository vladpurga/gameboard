/**
 * Firebase Reference/Init
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import * as Firebase from 'firebase';
let firebaseInitialized = false;

// if (
  // API_KEY !== 'null' &&
  // AUTH_DOMAIN !== 'null' &&
  // DATABASE_URL !== 'null' &&
  // STORAGE_BUCKET !== 'null' &&
  // MESSAGING_SENDER_ID !== 'null'
// ) {
  // Firebase.initializeApp({
    // apiKey: API_KEY,
    // authDomain: AUTH_DOMAIN,
    // databaseURL: DATABASE_URL,
    // storageBucket: STORAGE_BUCKET,
    // messagingSenderId: MESSAGING_SENDER_ID,
  // });

  // firebaseInitialized = true;
// }

export const FirebaseRef = firebaseInitialized ? Firebase.database().ref() : null;
export default firebaseInitialized ? Firebase : null;
