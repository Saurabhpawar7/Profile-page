import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
// Paste the Firebase Web App configuration here (see README-ADMIN.md).
 const firebaseConfig = {
    apiKey: "AIzaSyBPN_zWKg64uhtLNKawqm94PfURmUOnN7Y",
    authDomain: "saurabh-portfolio-40613.firebaseapp.com",
    projectId: "saurabh-portfolio-40613",
    storageBucket: "saurabh-portfolio-40613.firebasestorage.app",
    messagingSenderId: "922529000109",
    appId: "1:922529000109:web:ec15b77b195e3a19c27424",
    measurementId: "G-3ERZRCDTJN"
  };

export const firebaseReady=Object.values(firebaseConfig).every(Boolean);const app=firebaseReady?initializeApp(firebaseConfig):null;export const db=app?getFirestore(app):null;export const auth=app?getAuth(app):null;
