import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAxNYpwWIzws3-P_wtWrIDcbD203KMcSos",
    authDomain: "pondith-online.firebaseapp.com",
    projectId: "pondith-online",
    storageBucket: "pondith-online.appspot.com",
    messagingSenderId: "664742088944",
    appId: "1:664742088944:web:93a6b1f83b2503bd857235"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;

  