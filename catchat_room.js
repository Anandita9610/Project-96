const firebaseConfig = {
    apiKey: "AIzaSyBdsyxL9bvacvB_PMxs3lndlef3zc3nd_k",
    authDomain: "cat-chat-1ba7e.firebaseapp.com",
    databaseURL: "https://cat-chat-1ba7e-default-rtdb.firebaseio.com",
    projectId: "cat-chat-1ba7e",
    storageBucket: "cat-chat-1ba7e.appspot.com",
    messagingSenderId: "429776957074",
    appId: "1:429776957074:web:68d2ec8b6f0864c436c04b",
    measurementId: "G-Y93P5QNNYL"
  };
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "catchat_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "catchat_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }
      
