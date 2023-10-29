import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_nN7ldFrM-3yCbg3ShDmqBP1F8NeqSTE",
  authDomain: "foodapp-56ca8.firebaseapp.com",
  projectId: "foodapp-56ca8",
  storageBucket: "foodapp-56ca8.appspot.com",
  messagingSenderId: "809923765152",
  appId: "1:809923765152:web:e58458a0326c869385bac5"
};

const app = initializeApp(firebaseConfig);

export default app