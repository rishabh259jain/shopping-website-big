import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDVdL0G-r8nIpXJf38s5PvgqRG6UzeDYGM",
  authDomain: "react-pro-30832.firebaseapp.com",
  databaseURL: "https://react-pro-30832.firebaseio.com",
  projectId: "react-pro-30832",
  storageBucket: "react-pro-30832.appspot.com",
  messagingSenderId: "134180378034",
  appId: "1:134180378034:web:00e1a4203ef6cdeb26c0ab",
  measurementId: "G-D21L6KFCCR",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();
  console.log(snapshot, userRef);

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Below few lines is setting up google authentication utility:-

const provider = new firebase.auth.GoogleAuthProvider();
//making a copy of GoogleAuthProvider class from the athentication library

provider.setCustomParameters({ prompt: "select_account" });
//setting some custom parameters to this new class object named provider

export const signInWithGoogle = () => auth.signInWithPopup(provider); // This is where we choose Google instead of fb, twitter, github, etc

export default firebase;
