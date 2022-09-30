import {initializeApp} from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  updateEmail,
  updatePassword,
} from 'firebase/auth';
import {
  getDoc,
  getFirestore,
  updateDoc,
  setDoc,
  doc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

// -------------------------------------DB

const db = getFirestore(app);

export const addNewDoc = async (email) => {
  await setDoc(doc(db, 'users', email), {
    favorits: [],
  });
};

export const addToDoc = async (email, newFavorit) => {
  const currentFavoritsList = await getUserDoc(email);
  await updateDoc(doc(db, 'users', email), {
    favorits: [...currentFavoritsList, newFavorit],
  });
  return await getUserDoc(email);
};

export const removeFromDoc = async (email, id) => {
  const currentFavoritsList = await getUserDoc(email);
  const newFavoritList = currentFavoritsList.filter((item) => item !== id);
  await updateDoc(doc(db, 'users', email), {
    favorits: [...newFavoritList],
  });
  return await getUserDoc(email);
};

export const getUserDoc = async (email) => {
  const docRef = doc(db, 'users', email);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().favorits;
  } else {
    return;
  }
};

// -------------------------------------Auth

const auth = getAuth(app);

export const signUp = async (email, password, displayName) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  updateUserProfile(displayName);
  return result;
};

export const signIn = async (email, password) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result;
};

export const logout = async () => {
  await signOut(auth);
};

export const updateUserProfile = async (displayName) => {
  await updateProfile(auth.currentUser, {
    displayName: displayName,
  });
};

export const updateUserEmail = async (email) => {
  await updateEmail(auth.currentUser, email);
};

export const updateUserPassword = async (password) => {
  await updatePassword(auth.currentUser, password);
};
