import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Chaves de acesso ao firebase
const firebaseConfig = {
  apiKey: "AIzaSyAZrcaDK2DpU-UT40QKImks2EgBfhhKbvI",
  authDomain: "bibliotech-eurico.firebaseapp.com",
  projectId: "bibliotech-eurico",
  storageBucket: "bibliotech-eurico.appspot.com",
  messagingSenderId: "144154104188",
  appId: "1:144154104188:web:25ebd20da265fc797814f9"
};

// Inicializa o app com base nas configurações acima
export const app = initializeApp(firebaseConfig);
// Configura o Authentication e seus recurso de login/cadastro
export const auth = getAuth(app); 
// Configura o Firestore e seus recursos de banco de dados
export const db = getFirestore(app); 
// Configura o Storage e seus recursos de upload
export const storage = getStorage(app);