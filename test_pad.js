// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiebNw49x5t7z0y3VLDJktmRlRCkD7tTQ",
  authDomain: "my-firebase-learning-pro-d2a44.firebaseapp.com",
  databaseURL:
    "https://my-firebase-learning-pro-d2a44-default-rtdb.firebaseio.com",
  projectId: "my-firebase-learning-pro-d2a44",
  storageBucket: "my-firebase-learning-pro-d2a44.appspot.com",
  messagingSenderId: "327960534108",
  appId: "1:327960534108:web:7c36d98b480510e96bda99",
  measurementId: "G-6H9KL8DB21",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Paste the web app's configuration above this line
// Our code starts below
const rootRef = firebase.database().ref("issues/");
// GET A ROOT REFERENCE to issues HERE (type along)

// Task 3 ------------------------------------------

rootRef.push({
  description: "Logo does not show up on screen 3",
  resolved: "yes",
  severity: "minor",
});

rootRef.push({
  description: "Screen flashes on save",
  resolved: "no",
  severity: "moderate",
});
