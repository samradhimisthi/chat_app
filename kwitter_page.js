//YOUR FIREBASE LINKS\
// Your web app's Firebase configuration
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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_item");

function send() {
    msg = document.getElementById("msg").Value;
    firebase.database().ref(room_name).push({
        name: Luser_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").Value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                    childKey = childSnapshot.key;
                    childData = childSnapshot.val();
                    if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
                        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                        like_button = "button class='btn btn-warning' id=" + firebase_message_id + " value="
                        like + "onclick='updateLike(this.id)'>'";
                        span_with_tag = "<span class='glyphical-thumbs-up'>Like: " + like + "</span></button><hr>";

                        row = name_with_tag + message_with_tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;
                        //End code
                    })
            });
    }
    getData();

    function updateLike(message_id) {
        console.log("clicked on like button - " + message_id);
        button_id = message_id;
        likes = document.getElementById(button_id).Value;
        update_Like = Number(likes) + 1;
        console.log(update_Likes);

        firebase.database().ref(room_name).child(message_id).updateLike({
            like: update_Likes
        });

    }

    function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location.replace("index.html");
    }