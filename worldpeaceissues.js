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

// Task 4 ------------------------------------------

rootRef.on(
  "value",

  (snapshot) => {
    const listTableBody = document.getElementById("list-table-body");

    // clear all the table rows first
    listTableBody.textContent = "";

    snapshot.forEach((child) => {
      issue = child.val();
      console.log(issue);
      var row = document.createElement("tr");
      row.innerHTML =
        "<td>" +
        issue.severity +
        "</td><td>" +
        issue.description +
        "</td><td>" +
        "<select onchange='updateIssue(\"" +
        child.key +
        "\", this.value)'>" +
        "<option value='no'" +
        (issue.resolved == "no" ? " selected" : "") +
        ">no</option>" +
        "<option value='yes'" +
        (issue.resolved == "yes" ? " selected" : "") +
        ">yes</option>" +
        "</select>" +
        "</td>" +
        "<td onclick='deleteIssue(\"" +
        child.key +
        "\")'>x</td>";
      listTableBody.append(row);
    });
  },

  (error) => {
    console.log("Error: " + error.code);
  }
);

// Task 5 ------------------------------------------

function addNewIssue() {
  const severity = document.getElementById("severity-dropdown").value;
  const description = document.getElementById("description-textfield").value;
  const resolved = document.getElementById("resolved-dropdown").value;

  if (description.length == 0) {
    alert("Description cannot be blank!");
    return;
  }

  rootRef.push({
    description: description,
    resolved: resolved,
    severity: severity,
  });
  document.getElementById("description-textfield").value = "";
}

// Task 6 ------------------------------------------

function updateIssue(issueKey, newResolvedValue) {
  var recordRef = firebase.database().ref("remotedigitalschool/" + issueKey);

  recordRef.update({
    resolved: newResolvedValue,
  });
}

// Task 7 ------------------------------------------

function deleteIssue(issueKey) {
  if (confirm("Are you sure?")) {
    alert("delete function for issue key: " + issueKey);
  }
}

// function deleteIssue(issueKey) {
//   if (confirm("Are you sure?")) {
//     var recordRef = firebase.database().ref("remotedigitalschool/" + issueKey);
//     recordRef
//       .remove()
//       .then(function () {
//         alert("Issue " + issueKey + " has been deleted successfully.");
//       })
//       .catch(function (error) {
//         console.error("Error deleting issue: ", error);
//       });
//   }
// }


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
