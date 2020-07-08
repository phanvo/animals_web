/*
    External JS file
    Author: Phan Vo - 300320809
*/

// check empty input
function validateRequiredInput(obj){
    if(obj.validity.valueMissing || obj.value.trim().length == 0){
        obj.setCustomValidity("Input cannot be empty");
        return false;
    } else {
        obj.setCustomValidity("");
        return true;
    }
} // end validateRequiredInput

// validate form
function validateForm(form){
    validateFirstName(form);
    validateLastName(form);
    validateEmail(form);
    validateGender(form);
    validatePhoneNumber(form);
    validateEnquiry(form);
    validateMessage(form);
} // end validateForm

// validate name
function validateName(obj, typeName){
    var isValid = validateRequiredInput(obj);
    if(!isValid){
        return;
    }

    if(obj.validity.patternMismatch){
        obj.setCustomValidity("Invalid " + typeName + ". Please check again");
    } else {
        obj.setCustomValidity("");
    }
} // end validateName

// validate first name
function validateFirstName(form){
    var obj = form.elements["firstName"];

    validateName(obj, "first name");
} // end validateFirstName

// validate last name
function validateLastName(form){
    var obj = form.elements["lastName"];

    validateName(obj, "last name");
} // end validateLastName

// validate email
function validateEmail(form){
    var obj = form.elements["email"];

    var isValid = validateRequiredInput(obj);
    if(!isValid){
        return;
    }

    if(obj.validity.patternMismatch){
        obj.setCustomValidity("Invalid email. Please check again");
    } else {
        obj.setCustomValidity("");
    }
} // end validateEmail

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
} // end validateGender

// validate and format phone number nicely
function validatePhoneNumber(form) {
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
} // end validatePhoneNumber

// validate enquiry
function validateEnquiry(form){
    var obj = form.elements["enquiry"];

    var isValid = validateRequiredInput(obj);
    if(!isValid){
        return;
    }

    if(obj.validity.patternMismatch){
        obj.setCustomValidity("Invalid enquiry. Please check again");
    } else {
        obj.setCustomValidity("");
    }
} // end validateEnquiry

// validate message
function validateMessage(form){
    var obj = form.elements["message"];

    var isValid = validateRequiredInput(obj);
    if(!isValid){
        return;
    }

    if(obj.validity.tooShort || obj.validity.tooLong){
        obj.setCustomValidity("Message length must be between 5 and 200");
    } else {
        obj.setCustomValidity("");
    }
} // end validateMessage