import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeauth = ()=>{
    initializeApp(firebaseConfig);
}

export default initializeauth ;