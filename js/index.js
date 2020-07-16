var popupBox = document.getElementById("boxpop");
var nameInput = document.getElementById("nameinput");
var slideIndex = 1;
var tutorBox = document.getElementsByClassName("tutorbox");

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

function redirectAboutUs() {
    window.location = "./aboutus.html";
}

function redirectHowTo() {
    window.location = "./howto.html";
}

function redirectIndex() {
    window.location = "./index.html";
}

function userArkan() {
    window.location = "https://github.com/arkan481";
}

function userFino() {
    window.location = "https://github.com/finobasri";
    alert("asdd");
}

function changeSlide(option) {
    showDivs(slideIndex += option);
}

function showDivs(index) {
    var i;
    if (index > tutorBox.length) {slideIndex = 1}
    if (index < 1) {slideIndex = tutorBox.length} ;
    for (i = 0; i < tutorBox.length; i++) {
      tutorBox[i].style.display = "none";
    }
    tutorBox[slideIndex-1].style.display = "block";
  }
