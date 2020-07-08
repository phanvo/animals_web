/*
    External JS file
    Author: Phan Vo - 300320809
*/

function hamburgerMenuFunc() {
  var menu = document.getElementById("myLinks");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
} // end hamburgerMenuFunc

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  //Get the button:
  var backToTopBtn = document.getElementById("backToTopBtn");

  // only handle back to top button for desktop layout
  if (screen.width < 769){
    backToTopBtn.style.display = "none";
    return;
  }

  // display back to top button when navigation items are off the screen
  if (document.body.scrollTop > 260 || document.documentElement.scrollTop > 260) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function topPageFunc() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} // end topPageFunc

window.onload = function () { 
  startClockTime();

  var currentPage = window.location.pathname.split("/").pop();
  if(currentPage.startsWith("contact")){
    randomAddressImage();
  }
};

function startClockTime() {
  var today = new Date();
  
  var dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });
  var [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(today);

  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML = month + ", " + day + ", " + year + " " + h + ":" + m + ":" + s;
  setTimeout(startClockTime, 500);
} // end startClockTime

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;  // add zero in front of numbers < 10
  }
  return i;
} // end checkTime

function randomAddressImage(){
  var folderPath = "images/";
  var fishes = ["cuttlefish.jpg", "killerwhale.jpg", "mandarinfish.jpg", "lionfish.jpg", "piranha.jpg", "tigershark.jpg"];
  var randomFish = fishes[Math.floor(Math.random() * fishes.length)];

  document.getElementById("addressImg").src = folderPath + randomFish;
} // end randomAddressImage