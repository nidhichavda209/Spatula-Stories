import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtpv3UJ12I-zwCAoc8gyRpcjusZdTd0O4",
  authDomain: "spatula-stories-6d4bb.firebaseapp.com",
  projectId: "spatula-stories-6d4bb",
  storageBucket: "spatula-stories-6d4bb.appspot.com",
  messagingSenderId: "876784117482",
  appId: "1:876784117482:web:0384ba2c616a6e8d535993",
  measurementId: "G-W7SX38EEFN",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
