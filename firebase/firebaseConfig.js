import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAWpi3a0R20PcO4vCQxgWP5bv7lbN9Rwwo",
  authDomain: "apifirebase-81bf4.firebaseapp.com",
  projectId: "apifirebase-81bf4",
  storageBucket: "apifirebase-81bf4.firebasestorage.app",
  messagingSenderId: "992054594014",
  appId: "1:992054594014:web:1a88d1df7f225676c5754f"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };