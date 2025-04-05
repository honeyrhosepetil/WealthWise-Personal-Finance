import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpRl_64cfCFu0n9AREZkmgIC_HgN-R8IA",
  authDomain: "wealthwise-8eddb.firebaseapp.com",
  projectId: "wealthwise-8eddb",
  storageBucket: "wealthwise-8eddb.firebasestorage.app",
  messagingSenderId: "810425264100",
  appId: "1:810425264100:web:3c9783a7ca5709d59149f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage), 
})
export const db = getFirestore(app);