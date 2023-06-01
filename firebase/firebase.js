
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCsXS_JRDKV4oH0qbCv_dBfIAPqnQsqx9w",
  authDomain: "zeusmusic-c54b9.firebaseapp.com",
  projectId: "zeusmusic-c54b9",
  storageBucket: "zeusmusic-c54b9.appspot.com",
  messagingSenderId: "334712235224",
  appId: "1:334712235224:web:8af0caaa9f0137c2f3e3ad",
  measurementId: "G-KDWKTGTTL5"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app}