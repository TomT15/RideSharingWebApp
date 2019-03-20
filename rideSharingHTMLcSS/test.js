// Initialize Firebase
var config = {
    apiKey: "AIzaSyApmRAMvcs-SDBL08lykImZENr2rifpqlg",
    authDomain: "ride-sharing-4c8e7.firebaseapp.com",
    databaseURL: "https://ride-sharing-4c8e7.firebaseio.com",
    projectId: "ride-sharing-4c8e7",
    storageBucket: "ride-sharing-4c8e7.appspot.com",
    messagingSenderId: "217057301737"
};
firebase.initializeApp(config);
var db = firebase.firestore();
var docIDList = [];
//function autoGenerate {

db.collection("Users").get().then(function (querySnapshot) {
querySnapshot.forEach(function (doc) {
    // doc.data() is never undefined for query doc snapshots
    docIDList.push(doc.id);
                                  
dLength = docIDList.length; text = "<ul>";
for (i = 0; i < dLength; i++) {
text += "<li>" + docIDList[i] + "</li>";
}
text += "</ul>";

document.getElementById("test").innerHTML = text;
})
}); 
