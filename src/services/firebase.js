
import {initializeApp} from 'firebase/app';

import { getFirestore, orderBy, collection, getDocs, doc, getDoc, query, where, addDoc, writeBatch } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyCvIE47hSA6Z_VTg0HfAb4KqM-fb5IX4xs",
  authDomain: "react-e-86b7e.firebaseapp.com",
  projectId: "react-e-86b7e",
  storageBucket: "react-e-86b7e.appspot.com",
  messagingSenderId: "919567694629",
  appId: "1:919567694629:web:830815a5d03821d76c78cc"
  };

  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;


export async function getItems() {
  const productsRef = collection(db, "peliculas");

  
  const productsSnap = await getDocs(productsRef);
  const documents = productsSnap.docs;

  const docsData = documents.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return docsData;
}

export async function getSingleItem(idURL) {
  
  const docRef = doc(db, "peliculas", idURL);
  const docSnap = await getDoc(docRef);
  return { id: docSnap.id, ...docSnap.data() };
}

export async function getItemsByCategory(category) {
  const productsRef = collection(db, "peliculas");

  
  const q = query(productsRef, where("category", "==", category));

  const productsSnap = await getDocs(q);
  const documents = productsSnap.docs;

  const docsData = documents.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return docsData;
}

export async function createOrder(order) {
  const collectionOrdersRef = collection(db, "orders");
  const response = await addDoc(collectionOrdersRef, order);
  return response.id; 
}