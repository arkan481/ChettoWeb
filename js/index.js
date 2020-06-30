var popupBox = document.getElementById("boxpop");
var nameInput = document.getElementById("nameinput");

function showPopUp() {
    popupBox.style.display = "flex";
}

function hidePopUp() {
    popupBox.style.display = "none";
}

function redirectToChat() {
    var name = nameInput.value
    if (name.length == 0) {
        alert("Please Input Your Name");
    }else {
        localStorage["name"] = name;
        window.location = "../chatpage2.html";
    }
}
