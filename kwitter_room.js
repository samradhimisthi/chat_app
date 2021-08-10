var firebaseConfig = {
    apiKey: "AIzaSyBJ5rEE0l4ZqDHVfXrHSqavTK9w-dRhcVU",
    authDomain: "kwitter-666b9.firebaseapp.com",
    databaseURL: "https://kwitter-666b9-default-rtdb.firebaseio.com",
    projectId: "kwitter-666b9",
    storageBucket: "kwitter-666b9.appspot.com",
    messagingSenderId: "83459673487",
    appId: "1:83459673487:web:19782d2c4653ab82a58ffa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function addRoom() {
    Room_name = document.getElementById("room_name").Value;

    firebase.database().ref("/").child(Room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", Room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}