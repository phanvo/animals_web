/*
    External JS file
    Author: Phan Vo - 300320809
*/

function hamburgerMenuFunc() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

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
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// adjust navigation bar height dynamically when all contents loaded
// window.onload = function() {
//   // only handle back to top button for desktop layout
//   if (screen.width < 769){
//     return;
//   }

//   var headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
//   var footerHeight = document.getElementsByTagName("footer")[0].offsetHeight;
//   document.getElementById("topnav").style.height = (document.body.scrollHeight - headerHeight - footerHeight).toString() + "px";
// }

