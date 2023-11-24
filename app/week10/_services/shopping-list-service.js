import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const getItems = async (userId) => {
  const querySnapshot = await getDocs(collection(db, "users", userId, "items"));
  const result = [];
  querySnapshot.forEach((doc) => {
    result.push(doc.data());
  });

  return result;
};

export const addItem = async (userId, item) => {
  const docRef = await addDoc(collection(db, "users", userId, "items"), item);
  return docRef.id;
};
