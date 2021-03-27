import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyDdXFXmpf5orCmb-GT08TyQ3qpdXZPGEKs',
	authDomain: 'clone2-87a5d.firebaseapp.com',
	projectId: 'clone2-87a5d',
	storageBucket: 'clone2-87a5d.appspot.com',
	messagingSenderId: '730024494734',
	appId: '1:730024494734:web:9378caa2a6654166a9ebdf',
	measurementId: 'G-8T3ECY9W0M',
});

const db = firebase.firestore();

export { db };
