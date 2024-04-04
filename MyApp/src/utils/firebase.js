import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDEMmo5ObQVsUaiyWSeSUKPpC-532TpxLc",
  authDomain: "myapp-43c92.firebaseapp.com",
  projectId: "myapp-43c92",
  storageBucket: "myapp-43c92.appspot.com",
  messagingSenderId: "330191000317",
  appId: "1:330191000317:web:1af7c0504e5e37ba76a494"
};

export const app = initializeApp(firebaseConfig);