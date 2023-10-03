import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyChs-7rOBbs1LgEH7B2veiI8LCU7Tbd994",
  authDomain: "react-dragon-news-auth-b5771.firebaseapp.com",
  projectId: "react-dragon-news-auth-b5771",
  storageBucket: "react-dragon-news-auth-b5771.appspot.com",
  messagingSenderId: "1017871566302",
  appId: "1:1017871566302:web:51a8a4a6724dd363d2494f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;