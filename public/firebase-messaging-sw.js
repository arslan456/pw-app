importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js');
const firebaseConfig = {
    apiKey: "AIzaSyBhzfLLlPeMlSJpc7t0fWkcfIj6OSZnPog",
    authDomain: "notification-app-3dd87.firebaseapp.com",
    databaseURL: "https://notification-app-3dd87.firebaseio.com",
    projectId: "notification-app-3dd87",
    storageBucket: "notification-app-3dd87.appspot.com",
    messagingSenderId: "651987392082",
    appId: "1:651987392082:web:770b25cfa6edcdc58b318b"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();