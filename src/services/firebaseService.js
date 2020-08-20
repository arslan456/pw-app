import firebase from 'firebase';

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
  const messaging=firebase.messaging();

export function initNotification(){
    Notification.requestPermission().then((permission)=> {
        console.log(permission)
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                  console.log("TOKEN");
                  console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');
                  
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);

              });
        }
    })
}