// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpSBIbpsppBCMEW2PQplVL7-ksnuvNTO4",
  authDomain: "gransaga-firebase.firebaseapp.com",
  projectId: "gransaga-firebase",
  storageBucket: "gransaga-firebase.appspot.com",
  messagingSenderId: "39411318229",
  appId: "1:39411318229:web:c2d3f2b3dede4e7768115c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const auth = getAuth();

//註冊功能
export const createUser = (email,password)=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        const user = userCredential.user;
        alert('註冊成功')
    })
    .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('註冊失敗')
    })
}

//登入功能
export const loginUser = (email,password)=>{
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        const user = userCredential.user;
        alert('登入成功')
    })
    .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('登入失敗')
    })
}

//登出功能
export const logout = ()=>{
    signOut(auth)
    .then(()=>{
        alert('已登出')
    })
    .catch((error)=>{
        alert('登出失敗')
    })
}


const db = getFirestore(app);
