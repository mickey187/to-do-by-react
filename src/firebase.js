import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: 'AIzaSyBzhFXuWwPOeHhCgKrLowx-79IPrNetWkY',
  authDomain: 'to-do-by-react.firebaseapp.com',
  projectId: 'to-do-by-react',
  storageBucket: 'to-do-by-react.appspot.com',
  messagingSenderId: '409114732947',
  appId: '1:409114732947:web:15de0ad0d70ea413126066',
  measurementId: "G-B4TL47W1F7"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

// Initialize Authentication
const auth = getAuth(app);

// Initialize Storage
const storage = getStorage(app);

// Initialize Messaging
const message = getMessaging(app);

export { app, firestore, auth, storage, message };
