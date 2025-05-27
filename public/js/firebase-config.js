// 🔥 ACTUALIZA ESTA CONFIGURACIÓN CON LA TUYA REAL
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "tiktok-infographics.firebaseapp.com",
  projectId: "tiktok-infographics", 
  storageBucket: "tiktok-infographics.firebasestorage.app",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js';
import { getAuth, signInAnonymously } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js';
import { getFunctions } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-functions.js';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);

// Auto-login anónimo para poder usar Functions
signInAnonymously(auth).catch(console.error);
