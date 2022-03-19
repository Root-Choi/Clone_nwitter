import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyAhfo0cQE4pUmNnHiw1MH-l70NT0Im_UJo',
    authDomain: 'nwitter-18eca.firebaseapp.com',
    projectId: 'nwitter-18eca',
    storageBucket: 'nwitter-18eca.appspot.com',
    messagingSenderId: '408183737995',
    appId: '1:408183737995:web:19dad617f14f97718a0e8e',
};

export default firebase.initializeApp(firebaseConfig);
