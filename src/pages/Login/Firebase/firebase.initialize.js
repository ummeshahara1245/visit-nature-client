import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializationAuthFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializationAuthFirebase;