import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
// Paste the Firebase Web App configuration here (see README-ADMIN.md).
 const firebaseConfig = {
    apiKey: "AIzaSyALgarIWejxY0Xr7ocfo9EgH02qGBKo8Dk",
    authDomain: "saurabh-portfolio-4aa7b.firebaseapp.com",
    projectId: "saurabh-portfolio-4aa7b",
    storageBucket: "saurabh-portfolio-4aa7b.firebasestorage.app",
    messagingSenderId: "1017040260891",
    appId: "1:1017040260891:web:8c0629c7b69ca40d2dcdbe",
    measurementId: "G-NYZFBDRWZE"
  };

export const firebaseReady=Object.values(firebaseConfig).every(Boolean);const app=firebaseReady?initializeApp(firebaseConfig):null;export const db=app?getFirestore(app):null;export const auth=app?getAuth(app):null;
