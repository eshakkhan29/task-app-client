import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyD8myxHcww6L5xR8kdeP3MkcaiSXxH0hfs",
    authDomain: "task-app-1f56f.firebaseapp.com",
    projectId: "task-app-1f56f",
    storageBucket: "task-app-1f56f.appspot.com",
    messagingSenderId: "715914572095",
    appId: "1:715914572095:web:475a707fdfa566e32a638a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;