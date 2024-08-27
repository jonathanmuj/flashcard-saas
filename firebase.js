import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyD2MfTrfD6ut6k8FZFrJ_Hc5BmqE2om5ag",
    authDomain: "flashcard-66de3.firebaseapp.com",
    projectId: "flashcard-66de3",
    storageBucket: "flashcard-66de3.appspot.com",
    messagingSenderId: "1079186139000",
    appId: "1:1079186139000:web:3dddf763920d8bea2f4a8d"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;