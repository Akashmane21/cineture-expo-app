
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyALrAZvIP4QBIS3RdqwZhOlYHmehgqRGrg",
    authDomain: "show-time-f1227.firebaseapp.com",
    databaseURL: "https://show-time-f1227-default-rtdb.firebaseio.com",
    projectId: "show-time-f1227",
    storageBucket: "show-time-f1227.appspot.com",
    messagingSenderId: "970515632532",
    appId: "1:970515632532:web:e75f4244d5b31cb3827f81",
    measurementId: "G-LDMF2MED2Y"
  };
  // Initialize Firebase

  const showTimeDB =firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  export default showTimeDB;
