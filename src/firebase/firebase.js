import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD6Qz0XKVLfpGX4x3FcLIL8ZIxQ98Y6eaI",
    authDomain: "round-forge-96908.firebaseapp.com",
    databaseURL: "https://round-forge-96908.firebaseio.com",
    projectId: "round-forge-96908",
    storageBucket: "",
    messagingSenderId: "634720613982"
};
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
