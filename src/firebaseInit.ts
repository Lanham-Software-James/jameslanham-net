// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref as storageRef } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_fb_apiKey,
  authDomain: import.meta.env.VITE_fb_authDomain,
  projectId: import.meta.env.VITE_fb_projectId,
  storageBucket: import.meta.env.VITE_fb_storageBucket,
  messagingSenderId: import.meta.env.VITE_fb_messagingSenderId,
  appId: import.meta.env.VITE_fb_appId,
  measurementId: import.meta.env.VITE_fb_measurementId
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
export const homepageNavCarouselStorage = storageRef(storage, 'HomepageNavCarousel/');