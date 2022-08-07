import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCJzF0i2eHOFxUXZj1fczSVbCQT9_2Nzmk",
  authDomain: "uber-next-clone-58f12.firebaseapp.com",
  projectId: "uber-next-clone-58f12",
  storageBucket: "uber-next-clone-58f12.appspot.com",
  messagingSenderId: "587662795619",
  appId: "1:587662795619:web:b84d3ec4c01d5c06782956"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}