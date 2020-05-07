import firebase from 'firebase/app'
import 'firebase/firestore'

// NOTE: Change this for production
const config = {
  apiKey: 'AIzaSyBXCKSDmZ3jM-B0B2LsvChFy-_8Az9Iuok',
  authDomain: 'vueadminpro.firebaseapp.com',
  databaseURL: 'https://vueadminpro.firebaseio.com',
  projectId: 'vueadminpro',
  storageBucket: 'vueadminpro.appspot.com',
  messagingSenderId: '429142221540',
  appId: '1:429142221540:web:1929bc7d4ac53115d142f1'
}

export const db = firebase.initializeApp(config)
  .firestore()

//
// Firebase references
// export const projectsRef = db.ref('Projects')

// export const prioritiesRef = db.ref('Priorities')

export const tagsCollection = db.collection('Tags')
