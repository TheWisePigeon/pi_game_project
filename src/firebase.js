import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCl60Co3j3wG91_nPKYvWfjDuGCcAXCzss",
  authDomain: "pi-game-project.firebaseapp.com",
  projectId: "pi-game-project",
  storageBucket: "pi-game-project.appspot.com",
  messagingSenderId: "488111219746",
  appId: "1:488111219746:web:f5817b190ce58e05b7567b",
  measurementId: "G-0LF7Q779N0"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


const signupWithEmailAndPassword = async (email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        console.log(user); 
    } catch (error) {
        console.log(error);
    }
}

const logOut = ()=>{
    signOut(auth)
}

export {
    auth,
    db,
    signupWithEmailAndPassword,
    logOut
}