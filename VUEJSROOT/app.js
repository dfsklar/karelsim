window.firebaseApp = firebase.initializeApp(window.firebaseConfig);
var auth = window.firebaseApp.auth();
window.firebaseStorageRef = window.firebaseApp.storage().ref();
var db = window.firebaseStorageRef;

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    arrFolders: null
  }
});
