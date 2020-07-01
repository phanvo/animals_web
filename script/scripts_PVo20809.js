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



function validateRequiredInput(obj){
  // check empty input
  if(obj.value.trim().length == 0){
    obj.setCustomValidity("Input cannot be empty");
    return false;
  } else {
    obj.setCustomValidity("");
    return true;
  }
}

// validate form
function validateForm(form){
  validateFirstName(form);
  validateLastName(form);
  validateEmail(form);
  validateGender(form);
  validatePhoneNumber(form);
  validateEnquiry(form);
  validateMessage(form);
}

// validate name
function validateName(obj, typeName){
  var isValid = validateRequiredInput(obj);
  if(!isValid){
    return;
  }

  // check if the email has correct format
  var match = obj.value.match(/^[A-Za-z\s]{1,30}$/);

  if(match){
    obj.setCustomValidity("");
  } else {
    obj.setCustomValidity("Invalid " + typeName + ". Please check again");
  }
}

// validate first name
function validateFirstName(form){
  var obj = form.elements["firstName"];

  validateName(obj, "first name");
}

// validate last name
function validateLastName(form){
  var obj = form.elements["lastName"];

  validateName(obj, "last name");
}

// validate email
function validateEmail(form){
  var obj = form.elements["email"];

  var isValid = validateRequiredInput(obj);
  if(!isValid){
    return;
  }

  // check if the email has correct format
  var match = obj.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);

  if(match){
    obj.setCustomValidity("");
  } else {
    obj.setCustomValidity("Invalid email. Please check again");
  }
}

// validate gender
function validateGender(form){
  var male = form["gender1"].checked;
  var female = form["gender2"].checked;
  var other = form["gender3"].checked;

  if(male || female || other){
    form["gender1"].setCustomValidity("");
  } else {
    form["gender1"].setCustomValidity("Please select one of these genders");
  }
}

// validate and format phone number nicely
function validatePhoneNumber (form) {
  var obj = form.elements["phone"];

  var isValid = validateRequiredInput(obj);
  if(!isValid){
    return;
  }

  // filter numbers only
  var cleaned = ('' + obj.value).replace(/\D/g, '');
  
  // check if the number has correct length (10 digits)
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    obj.value = '(' + match[1] + ') ' + match[2] + '-' + match[3];    // format phone number
    obj.setCustomValidity("");
  } else {
    obj.setCustomValidity("Invalid phone number. Only 10-digit number is allowed");
  }
}

// validate enquiry
function validateEnquiry(form){
  var obj = form.elements["enquiry"];
  var enquiry = obj.value;

  var isValid = validateRequiredInput(obj);
  if(!isValid){
    return;
  }

  if(enquiry == "General" || enquiry == "Technical" || enquiry == "Events" || enquiry == "Donate"){
    obj.setCustomValidity("");
  } else {
    obj.setCustomValidity("Invalid enquiry. Please check again");
  }
}

// validate message
function validateMessage(form){
  var obj = form.elements["message"];

  validateRequiredInput(obj);
}