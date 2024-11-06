import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCrLbN7oxhFaIAErhkZCLZeYaN-QBP9NXY",
  authDomain: "e-commerce-d5014.firebaseapp.com",
  projectId: "e-commerce-d5014",
  storageBucket: "e-commerce-d5014.appspot.com",
  messagingSenderId: "698673905638",
  appId: "1:698673905638:web:ef869ffbd194e88a25a027",
  measurementId: "G-H1WH4YXTKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let provider =new GoogleAuthProvider()
export { app, auth,provider };
