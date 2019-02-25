var config = {
    apiKey: "AIzaSyCzdmFfujk0A1UegxmmE5vVPR3il7UEEeg",
    authDomain: "ride-sharing-web-app.firebaseapp.com", 
    databaseURL: "https://ride-sharing-web-app.firebaseio.com",
    storageBucket: "ride-sharing-web-app.appspot.com",
};
firebase.initializeApp(config);
// Get a reference to the database service
var firestore = firebase.firestore();

var docRef1 = firestore.Collection("Users").doc("1234567789");

docRef1.get().then(function(doc) {
    if(doc.exists) {
        console.log("document data:", doc.data());
    } else {
        console.log("No such documentation or an error in coding occured.");
        console.log("see functionallity.js around line 16 for error in code.");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
/* new style of sheet from youtube this gets data from the firebase
function renderCafe(doc) {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    
    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().any;
    city.textContent = doc.data().any;
    
    li.appendChild(name);
    li.appendChild(city);
    
    cafeList.appendChild(li);
}

db.collect('Users').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    })
})
*/

/* function writeUserData(ID, email, first_name, last_name, middle_name, User_password) {
  firebase.database().ref('users/' + userId).set({
    studentID: ID,
    fName: first_name,
    lName: last_name,
    mName: middle_name,
    password: User_password
  }); 
} */
