import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBXoD7Fg6PElNkVXXP12ediu7jlgOlSE04",
  authDomain: "coderhouse-ecommerce-1d45c.firebaseapp.com",
  projectId: "coderhouse-ecommerce-1d45c",
  storageBucket: "coderhouse-ecommerce-1d45c.appspot.com",
  messagingSenderId: "919069151915",
  appId: "1:919069151915:web:9a9b7eed5d49d934db9dee"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


