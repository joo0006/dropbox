import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCu8-H8n2_bCbRQO7sq5ivrA127ObucSM0",
    authDomain: "dropbox-clone-42339.firebaseapp.com",
    projectId: "dropbox-clone-42339",
    storageBucket: "dropbox-clone-42339.appspot.com",
    messagingSenderId: "141162724524",
    appId: "1:141162724524:web:12152c68064f8f2b49f309"
  };
const app = getApps().length ? getApp(): initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };
