import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDpDrTKBnImnRprwV9qEvQKWIIzSzr0_0o",
    authDomain: "chatify-e98ae.firebaseapp.com",
    databaseURL: "https://chatify-e98ae.firebaseio.com",
    projectId: "chatify-e98ae",
    storageBucket: "chatify-e98ae.appspot.com",
    messagingSenderId: "146487397992",
    appId: "1:146487397992:web:5f682b82356964260d75dd",
    measurementId: "G-RX41F76XBD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider} ;
  export default db;