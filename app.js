var config = {
    apiKey: "AIzaSyCP__FHfo0jcsqU5u7Zg_404gEBsUkNYN4",
    authDomain: "sample-f47b1.firebaseapp.com",
    databaseURL: "https://sample-f47b1.firebaseio.com",
    projectId: "sample-f47b1",
    messagingSenderId: "1057166052443",
  };
  firebase.initializeApp(config);

  var firestore=firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();



function test() {
var inputElem =document.querySelectorAll("input");
// console.log(inputElem[0].value);
var pathRef=firestore.doc("sample/"+inputElem[0].value);
pathRef.set({
  Name:inputElem[0].value,
  Email:inputElem[1].value,
  roll:inputElem[2].value
}).then(()=>{
  console.log("Data saved successfully");
})


}

//
// firebase.auth().signInWithPopup(provider).then(function(result) {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;
//   // ...
//   console.log(user);
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
//   console.log(errorMessage);
// });






function googleSignin() {

  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorMessage);
    // ...
  });

}
