let firstButton = document.getElementById("first-button");
let message = document.getElementById("message");

function showMessage() {
    message.innerHTML = "คลิกทำไมก่อน";
}

//addEventListener ( เหตุการ์ณ, คำสั่ง );
firstButton.addEventListener("click", showMessage);