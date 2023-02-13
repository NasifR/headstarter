import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCD9JeyWHr5wvW6IUOK1PlRPECymfDNmK8",
    authDomain: "tech-incubator-608c5.firebaseapp.com",
    projectId: "tech-incubator-608c5",
    storageBucket: "tech-incubator-608c5.appspot.com",
    messagingSenderId: "940676246825",
    appId: "1:940676246825:web:5b3d002fa45468fa449b38"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire