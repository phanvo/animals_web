/*
    External JS file
    Author: Phan Vo - 300320809
*/

// display/hide links inside hamburger menu
function hamburgerMenuFunc() {
  var menu = document.getElementById("myLinks");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
} // end hamburgerMenuFunc

// display/hide the back-to-top button when the user scrolls down from the top of the document, using onsroll event
window.onscroll = function() {
  var backToTopBtn = document.getElementById("backToTopBtn");

  // only handle back-to-top button for desktop layout
  if (screen.width < 769){
    backToTopBtn.style.display = "none";
    return;
  }

  // display back-to-top button when navigation items are nearly off the screen
  if (document.body.scrollTop > 260 || document.documentElement.scrollTop > 260) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}; // end onscroll event

// scroll back to the top of the document when clicking the button
function topPageFunc() {
  document.body.scrollTop = 0;            // for Safari
  document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
} // end topPageFunc

// handle onload event of pages
window.onload = function () { 
  startClockTime();   // run clock with date
  
  var currentPage = window.location.pathname.split("/").pop();    
  if(currentPage.startsWith("contact")){        // check current page whether it is Contact page
    randomAddressImage();   // handle random image for the address section of Contact page
  }
}; // end onload event

// handle form event at Contact page to display thank you message
function handleFormEvent(event){
  event.preventDefault();

  var modal = document.getElementById("myModal");
  modal.style.display = "block";      // open modal window

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
      modal.style.display = "none";   // close the modal when clicking "x"
  }

  // close the modal when clicking anywhere outside of the modal
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
} // end handleFormEvent

// handle clock with date
function startClockTime() {
  var today = new Date();   // get current date
  
  // extract year, month, day from current date
  var dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });
  var [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(today);

  // extract hours, minutes, seconds of the current date
  var h = today.getHours();
  var m = checkTime(today.getMinutes());
  var s = checkTime(today.getSeconds());

  // build a full string to display
  document.getElementById('clock').innerHTML = month + ", " + day + ", " + year + " " + h + ":" + m + ":" + s;

  // update current date and time in real time
  setTimeout(startClockTime, 500);
} // end startClockTime

// format time with leading zero
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;  // add zero in front of numbers < 10
  }
  return i;
} // end checkTime

// create random image for address section of Contact page
function randomAddressImage(){
  var folderPath = "images/";
  var fishes = ["cuttlefish.jpg", "killerwhale.jpg", "mandarinfish.jpg", "lionfish.jpg", "piranha.jpg", "tigershark.jpg"];
  var randomFish = fishes[Math.floor(Math.random() * fishes.length)];

  document.getElementById("addressImg").src = folderPath + randomFish;
} // end randomAddressImage