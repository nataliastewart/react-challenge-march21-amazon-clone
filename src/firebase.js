import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyCbbQjGLBnghfgqeHzgzsjvMRQlLL9JnOg',
	authDomain: 'march21--clone.firebaseapp.com',
	projectId: 'march21--clone',
	storageBucket: 'march21--clone.appspot.com',
	messagingSenderId: '1011032890680',
	appId: '1:1011032890680:web:ea4cfbf4322d0ef53e75cd',
	measurementId: 'G-NJVDTVT85H',
});

const db = firebase.firestore();

export { db };
