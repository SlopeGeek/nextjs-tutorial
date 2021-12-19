import firebase from 'firebase'

const firebaseConfig  = {
    apiKey: "AIzaSyA6qop4lgD0lthhIFLe2e61bShiNeWQuWk",
    authDomain: "shunsuke-react2021.firebaseapp.com",
    databaseURL:"https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js",
    projectId: "shunsuke-react2021",
    storageBucket: "shunsuke-react2021.appspot.com",
    messagingSenderId: "625794318703",
    appId: "1:625794318703:web:ce99ba32619f3607a9689a"
}

if (firebase.apps.length == 0) {
    firebase.initializeApp(firebaseConfig)
}
