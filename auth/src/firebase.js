import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.firebaseConfig = {
    apiKey: process.envi.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.envi.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.envi.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.envi.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.envi.REACT_APP_FIREBASE_MESSEGING_SENDER_ID,
    appId: process.envi.REACT_APP_FIREBASE_APP_ID
  };

  export const auth = app.auth()
  export default app

  