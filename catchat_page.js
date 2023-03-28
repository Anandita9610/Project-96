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


  function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  });

  document.getElementById("msg").value = "";
}


function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html"
}

