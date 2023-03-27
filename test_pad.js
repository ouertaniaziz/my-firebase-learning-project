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
const rootRef = firebase.database().ref("remotedigitalschool/");
// GET A ROOT REFERENCE to issues HERE (type along)

// Task 3 ------------------------------------------

rootRef.push({
  test1: "hhhhhhhhhhhhhh",
  test2: "noo",
  severity: "minor",
});
rootRef.push({
  test1: "hhhhhhhhhhhhhh",
  test2: "noo",
  severity: "minor",
});
rootRef.push({
  test1: "hhhhhhhhhhhhhh",
  test2: "noo",
  severity: "minor",
});
rootRef.push({
  test1: "hhhhhhhhhhhhhh",
  test2: "noo",
  severity: "minor",
});

rootRef.push({
  description: "aziz houssem on bilel",
  resolved: "no",
  severity: "moderate",
});
/*      "<td><input type='button' class='btn btn-danger' value='X' onclick='deleteIssue(\"" + child.key + "\")'/></td>";
 */

// Task 7 ------------------------------------------

function deleteIssue(issueKey) {
  if (confirm("Are you sure?")) {
    alert("delete function for issue key: " + issueKey);
  }
}

// Utility function to encode special HTML characters so that the
// web browser does not treat them as HTML tags
// but as literal characters

function encodeHtml(str) {
  str = str.replace(/&/g, "&amp;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/ /g, "&nbsp;");
  return str;
}
