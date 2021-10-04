// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAL_olvInmDJ5J6zh3lw34zoszbza--FQQ",
    authDomain: "realtymaindb.firebaseapp.com",
    databaseURL: "https://realtymaindb-default-rtdb.firebaseio.com",
    projectId: "realtymaindb",
    storageBucket: "realtymaindb.appspot.com",
    messagingSenderId: "825569997875",
    appId: "1:825569997875:web:8c9cef39b37009ad0adf46"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();