import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBoKSZd2mATFNnAJmuUEhK-spjTnAPgH44",
  authDomain: "resturantapp-402b6.firebaseapp.com",
  databaseURL: "https://resturantapp-402b6-default-rtdb.firebaseio.com",
  projectId: "resturantapp-402b6",
  storageBucket: "resturantapp-402b6.appspot.com",
  messagingSenderId: "516602619791",
  appId: "1:516602619791:web:88ab847bbe0a1018ce8dfa",
  measurementId: "G-0HK6SLKV7L"
};
  

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);



export { app, firestore, storage , auth };
