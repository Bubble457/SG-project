import { db, auth } from "./firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export const savePersonalityResult = async (trait) => {
  const user = auth.currentUser;
  if (!user) return;

  await addDoc(collection(db, "results"), {
    uid: user.uid,
    email: user.email,
    trait,
    createdAt: new Date(),
  });
};

export const fetchUserResults = async () => {
  const user = auth.currentUser;
  if (!user) return [];

  const q = query(collection(db, "results"), where("uid", "==", user.uid));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => doc.data());
};
