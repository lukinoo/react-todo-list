import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBQVEhoQcfqSvNgrhDEOcbtw8A_sAuNeCw",
  authDomain: "todoapp-ce795.firebaseapp.com",
  projectId: "todoapp-ce795",
  storageBucket: "todoapp-ce795.appspot.com",
  messagingSenderId: "253698220301",
  appId: "1:253698220301:web:9f89e92327958f06dcd044"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db};