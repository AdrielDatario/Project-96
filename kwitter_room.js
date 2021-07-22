var firebaseConfig = {
      apiKey: "AIzaSyDdx7G9Fe7j-7-PwgABuHLvqIG6znABVj4",
      authDomain: "project-96fb1.firebaseapp.com",
      projectId: "project-96fb1",
      storageBucket: "project-96fb1.appspot.com",
      messagingSenderId: "331043259975",
      appId: "1:331043259975:web:7f48d62b5bf51c17d41362"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var username = localStorage.getItem("user_name");  
    var room_name = localStorage.getItem("room_name");    
    document.getElementById("welcome").innerHTML = "welcome "+username+"!";

function addroom(){
      room_name = document.getElementById("roominput").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("room_output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     console.log("Room Name - " + Room_names)
     row = "<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
     document.getElementById("room_output").innerHTML += row;
     });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

      function logout(){
            localStorage.removeItem("username");
            localStorage.removeItem("room_name");
            window.location = "index.html";
      }
