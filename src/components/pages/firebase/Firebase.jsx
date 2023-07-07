import { Firestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// Configuramos la información del proyecto en Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDq6owHFkYqRFFBpNpwHkLqwvP06BOXDTk",
    authDomain: "portafolio-7f8a6.firebaseapp.com",
    databaseURL: "https://portafolio-7f8a6-default-rtdb.firebaseio.com",
    projectId: "portafolio-7f8a6",
    storageBucket: "portafolio-7f8a6.appspot.com",
    messagingSenderId: "441286437082",
    appId: "1:441286437082:web:dd8df41c00ab33e61b5de3",
    measurementId: "G-2J7C1M2ET6"
    };

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);

// Exportamos la instancia de Firestore
export const db = getFirestore(app);
