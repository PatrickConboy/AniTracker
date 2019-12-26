import firebase from 'firebase'

const config = { 
  apiKey: "AIzaSyD-Qrqk60VFoRrWzgN7yBIaqPcWNOOlbRo", 
  authDomain: "anitracker-9f73f.firebaseapp.com", 
  databaseURL: "https://anitracker-9f73f.firebaseio.com", 
  projectId: "anitracker-9f73f", 
  storageBucket: "anitracker-9f73f.appspot.com", 
  messagingSenderId: "226302437942", 
  appId: "1:226302437942:web:e71e5b6b9e2f9682580697", 
  measurementId: "G-JH7JQ601CY" 
};

firebase.initializeApp(config)
export default firebase