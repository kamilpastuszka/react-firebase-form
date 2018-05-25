import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA6sZmYeFhD7mucvF8H4m2xES7f6ofZu0U",
    authDomain: "reactjs-firebase-app.firebaseapp.com",
    databaseURL: "https://reactjs-firebase-app.firebaseio.com",
    projectId: "reactjs-firebase-app",
    storageBucket: "reactjs-firebase-app.appspot.com",
    messagingSenderId: "467138533460"
  };

  firebase.initializeApp(config);

export default firebase;
