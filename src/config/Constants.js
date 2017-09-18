import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyD9Iysd_ZEUMLcJRooTqWMLypEdWYfDlsE",
    authDomain: "yuanhua-288e1.firebaseapp.com",
    databaseURL: "https://yuanhua-288e1.firebaseio.com",
    projectId: "yuanhua-288e1",
    storageBucket: "yuanhua-288e1.appspot.com",
    messagingSenderId: "407408680313"
}
firebase.initializeApp(firebaseConfig)
export const firebaseRef = firebase.database().ref()
export const firebaseAuth = firebase.auth
