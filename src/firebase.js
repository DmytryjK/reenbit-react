import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
	const firebaseConfig = {
		apiKey: "AIzaSyBMSY6691BgyLBx8n3BmI0Ad6-r-lEduJI",
		authDomain: "reenbit-react-ebd88.firebaseapp.com",
		projectId: "reenbit-react-ebd88",
		storageBucket: "reenbit-react-ebd88.appspot.com",
		messagingSenderId: "225790670121",
		appId: "1:225790670121:web:3f91a3fd50684b7fb6b338"
	};

	const app = initializeApp(firebaseConfig);
	export const auth = getAuth(app);
