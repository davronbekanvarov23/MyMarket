import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeITseSA5xu8dRqsugltGDow5OGdywOdo",
  authDomain: "mymarket-22322.firebaseapp.com",
  projectId: "mymarket-22322",
  storageBucket: "mymarket-22322.appspot.com",
  messagingSenderId: "582480983908",
  appId: "1:582480983908:web:19fbf76809aab3bc682c71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()