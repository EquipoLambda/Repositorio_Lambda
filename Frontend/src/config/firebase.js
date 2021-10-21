//utilizando variables de entorno definidas en el archivo .env
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const fb = firebase.initializeApp({
    "projectId": "authlambda",
    "appId": "1:727272307057:web:ab3b3881800a35a6859ed0",
    "storageBucket": "authlambda.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyAxQfoc3CloTASU3VofGJlUpu6GPvAhEx4",
    "authDomain": "authlambda.firebaseapp.com",
    "messagingSenderId": "727272307057"
  });