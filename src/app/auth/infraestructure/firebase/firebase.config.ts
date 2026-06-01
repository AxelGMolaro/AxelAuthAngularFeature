import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQiK0zlENGAV1H7TvsXhDG9I0DgneQTuw",
  authDomain: "argentinian-barber-app.firebaseapp.com",
  projectId: "argentinian-barber-app",
  storageBucket: "argentinian-barber-app.firebasestorage.app",
  messagingSenderId: "628273594121",
  appId: "1:628273594121:web:c6a98a1f826a47baa6ddd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)