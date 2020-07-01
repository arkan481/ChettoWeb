var slideIndex = 1;
var tutorBox = document.getElementsByClassName("tutorbox");

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