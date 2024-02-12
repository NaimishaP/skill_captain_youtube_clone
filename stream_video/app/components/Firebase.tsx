// Import the functions you need from the SDKs you need
import { initializeApp, getApps} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEeHY53p1SApDWByi-cEsSAtlsTyWs53o",
  authDomain: "clone-media-player-6467b.firebaseapp.com",
  projectId: "clone-media-player-6467b",
  storageBucket: "clone-media-player-6467b.appspot.com",
  messagingSenderId: "420815288852",
  appId: "1:420815288852:web:406fdab65e69488e730501",
  measurementId: "G-FWW51TGSBT"
};

// Initialize Firebase
let firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebaseApp;