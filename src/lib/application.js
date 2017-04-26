import { initializeApp } from 'firebase'

const application = initializeApp({
  apiKey: "AIzaSyArJUAWQlQ88u5nImF1WXX4YPiFe-3GrWQ",
  authDomain: "allugame-f3193.firebaseapp.com",
  databaseURL: "https://allugame-f3193.firebaseio.com",
  projectId: "allugame-f3193",
  storageBucket: "allugame-f3193.appspot.com",
  messagingSenderId: "308801738062"
})

export const database = application.database()

export const authentication = application.auth()

export default application
