// ES6 or Vanilla JavaScript

function checkFormFolder() {
    var ok = true;

    if (document.getElementById("folder-name-1").value == "") {
        document.getElementById("folder-name-1").classList.add("nhsuk-input--error");
        document.getElementById("folder-name-1").closest(".nhsuk-form-group").classList.add("nhsuk-form-group--error");
        document.getElementById("folder-name-1--error").style.display = "block";
        ok = false;
    } else {
        document.getElementById("folder-name-1").classList.remove("nhsuk-input--error");
        document.getElementById("folder-name-1").closest(".nhsuk-form-group").classList.remove("nhsuk-form-group--error");
        document.getElementById("folder-name-1--error").style.display = "none";
    }

    return ok;
}



function checkFormApp() {
    var ok = true;

    if (document.getElementById("template-app-name-1").value == "") {
        document.getElementById("template-app-name-1").classList.add("nhsuk-input--error");
        document.getElementById("template-app-name-1").closest(".nhsuk-form-group").classList.add("nhsuk-form-group--error");
        document.getElementById("template-app-name-1--error").style.display = "block";
        ok = false;
    } else {
        document.getElementById("template-app-name-1").classList.remove("nhsuk-input--error");
        document.getElementById("template-app-name-1").closest(".nhsuk-form-group").classList.remove("nhsuk-form-group--error");
        document.getElementById("template-app-name-1--error").style.display = "none";
    }

    if (document.getElementById("template-app-message-1").value == "") {
        document.getElementById("template-app-message-1").classList.add("nhsuk-input--error");
        document.getElementById("template-app-message-1").closest(".nhsuk-form-group").classList.add("nhsuk-form-group--error");
        document.getElementById("template-app-message-1--error").style.display = "block";
        ok = false;
    } else {
        document.getElementById("template-app-message-1").classList.remove("nhsuk-input--error");
        document.getElementById("template-app-message-1").closest(".nhsuk-form-group").classList.remove("nhsuk-form-group--error");
        document.getElementById("template-app-message-1--error").style.display = "none";
    }

    return ok;
}


function checkFormEmail() {
    var ok = true;

    if (document.getElementById("template-email-name-1").value == "") {
        document.getElementById("template-email-name-1").classList.add("nhsuk-input--error");
        document.getElementById("template-email-name-1").closest(".nhsuk-form-group").classList.add("nhsuk-form-group--error");
        document.getElementById("template-email-name-1--error").style.display = "block";
        ok = false;
    } else {
        document.getElementById("template-email-name-1").classList.remove("nhsuk-input--error");
        document.getElementById("template-email-name-1").closest(".nhsuk-form-group").classList.remove("nhsuk-form-group--error");
        document.getElementById("template-email-name-1--error").style.display = "none";
    }

    if (document.getElementById("template-email-subject-1").value == "") {
        document.getElementById("template-email-subject-1").classList.add("nhsuk-input--error");
        document.getElementById("template-email-subject-1").closest(".nhsuk-form-group").classList.add("nhsuk-form-group--error");
        document.getElementById("template-email-subject-1--error").style.display = "block";
        ok = false;
    } else {
        document.getElementById("template-email-subject-1").classList.remove("nhsuk-input--error");
        document.getElementById("template-email-subject-1").closest(".nhsuk-form-group").classList.remove("nhsuk-form-group--error");
        document.getElementById("template-email-subject-1--error").style.display = "none";
    }

    if (document.getElementById("template-email-message-1").value == "") {
        document.getElementById("template-email-message-1").classList.add("nhsuk-input--error");
        document.getElementById("template-email-message-1").closest(".nhsuk-form-group").classList.add("nhsuk-form-group--error");
        document.getElementById("template-email-message-1--error").style.display = "block";
        ok = false;
    } else {
        document.getElementById("template-email-message-1").classList.remove("nhsuk-input--error");
        document.getElementById("template-email-message-1").closest(".nhsuk-form-group").classList.remove("nhsuk-form-group--error");
        document.getElementById("template-email-message-1--error").style.display = "none";
    }

    return ok;
}

function checkFormSMS() {
    var ok = true;

    if (document.getElementById("template-sms-name-1").value == "") {
        document.getElementById("template-sms-name-1").classList.add("nhsuk-input--error");
        document.getElementById("template-sms-name-1").closest(".nhsuk-form-group").classList.add("nhsuk-form-group--error");
        document.getElementById("template-sms-name-1--error").style.display = "block";
        ok = false;
    } else {
        document.getElementById("template-sms-name-1").classList.remove("nhsuk-input--error");
        document.getElementById("template-sms-name-1").closest(".nhsuk-form-group").classList.remove("nhsuk-form-group--error");
        document.getElementById("template-sms-name-1--error").style.display = "none";
    }

    if (document.getElementById("template-sms-message-1").value == "") {
        document.getElementById("template-sms-message-1").classList.add("nhsuk-input--error");
        document.getElementById("template-sms-message-1").closest(".nhsuk-form-group").classList.add("nhsuk-form-group--error");
        document.getElementById("template-sms-message-1--error").style.display = "block";
        ok = false;
    } else {
        document.getElementById("template-sms-message-1").classList.remove("nhsuk-input--error");
        document.getElementById("template-sms-message-1").closest(".nhsuk-form-group").classList.remove("nhsuk-form-group--error");
        document.getElementById("template-sms-message-1--error").style.display = "none";
    }

    return ok;
}


function checkFormLetter() {
    var ok = true;

    if (document.getElementById("template-letter-name-1").value == "") {
        document.getElementById("template-letter-name-1").classList.add("nhsuk-input--error");
        document.getElementById("template-letter-name-1").closest(".nhsuk-form-group").classList.add("nhsuk-form-group--error");
        document.getElementById("template-letter-name-1--error").style.display = "block";
        ok = false;
    } else {
        document.getElementById("template-letter-name-1").classList.remove("nhsuk-input--error");
        document.getElementById("template-letter-name-1").closest(".nhsuk-form-group").classList.remove("nhsuk-form-group--error");
        document.getElementById("template-letter-name-1--error").style.display = "none";
    }

    /*if (document.getElementById("template-letter-sender-1").value == "") {
        document.getElementById("template-letter-sender-1").classList.add("nhsuk-input--error");
        document.getElementById("template-letter-sender-1").closest(".nhsuk-form-group").classList.add("nhsuk-form-group--error");
        document.getElementById("template-letter-sender-1--error").style.display = "block";
        ok = false;
    } else {
        document.getElementById("template-letter-sender-1").classList.remove("nhsuk-input--error");
        document.getElementById("template-letter-sender-1").closest(".nhsuk-form-group").classList.remove("nhsuk-form-group--error");
        document.getElementById("template-letter-sender-1--error").style.display = "none";
    }

    if (document.getElementById("template-letter-heading-1").value == "") {
        document.getElementById("template-letter-heading-1").classList.add("nhsuk-input--error");
        document.getElementById("template-letter-heading-1").closest(".nhsuk-form-group").classList.add("nhsuk-form-group--error");
        document.getElementById("template-letter-heading-1--error").style.display = "block";
        ok = false;
    } else {
        document.getElementById("template-letter-heading-1").classList.remove("nhsuk-input--error");
        document.getElementById("template-letter-heading-1").closest(".nhsuk-form-group").classList.remove("nhsuk-form-group--error");
        document.getElementById("template-letter-heading-1--error").style.display = "none";
    }*/

    if (document.getElementById("template-letter-message-1").value == "") {
        document.getElementById("template-letter-message-1").classList.add("nhsuk-input--error");
        document.getElementById("template-letter-message-1").closest(".nhsuk-form-group").classList.add("nhsuk-form-group--error");
        document.getElementById("template-letter-message-1--error").style.display = "block";
        ok = false;
    } else {
        document.getElementById("template-letter-message-1").classList.remove("nhsuk-input--error");
        document.getElementById("template-letter-message-1").closest(".nhsuk-form-group").classList.remove("nhsuk-form-group--error");
        document.getElementById("template-letter-message-1--error").style.display = "none";
    }

    return ok;
}


function checkFormTestSMS() {
    var ok = true;

    if (document.getElementById("test-sms-1").value == "") {
        document.getElementById("test-sms-1").classList.add("nhsuk-input--error");
        document.getElementById("test-sms-1").closest(".nhsuk-form-group").classList.add("nhsuk-form-group--error");
        document.getElementById("test-sms-1--error").style.display = "block";
        ok = false;
    } else {
        document.getElementById("test-sms-1").classList.remove("nhsuk-input--error");
        document.getElementById("test-sms-1").closest(".nhsuk-form-group").classList.remove("nhsuk-form-group--error");
        document.getElementById("test-sms-1--error").style.display = "none";
    }

    return ok;
}


function checkFormTestEmail() {
    var ok = true;

    if (document.getElementById("test-email-1").value == "") {
        document.getElementById("test-email-1").classList.add("nhsuk-input--error");
        document.getElementById("test-email-1").closest(".nhsuk-form-group").classList.add("nhsuk-form-group--error");
        document.getElementById("test-email-1--error").style.display = "block";
        ok = false;
    } else {
        document.getElementById("test-email-1").classList.remove("nhsuk-input--error");
        document.getElementById("test-email-1").closest(".nhsuk-form-group").classList.remove("nhsuk-form-group--error");
        document.getElementById("test-semailms-1--error").style.display = "none";
    }

    return ok;
}


// Show and hide the guidance in the right-hand column on the create template pages.
function guidanceShowHide() {

    var columnRight = document.getElementById("column-right");
    var columnLeft = document.getElementById("column-left");
    var classIsPresent = columnLeft.classList.contains("nhsuk-grid-column-two-thirds");
    var button = document.getElementById("toggle");

    if (classIsPresent) {
        columnLeft.classList.remove("nhsuk-grid-column-two-thirds");
        columnLeft.classList.add("nhsuk-grid-column-full");
        columnRight.style.display = "none";
        button.innerHTML = "Show template guidance";
        columnRight.setAttribute("aria-hidden", "true");
    } else {
        columnLeft.classList.add("nhsuk-grid-column-two-thirds");
        columnLeft.classList.remove("nhsuk-grid-column-full");
        columnRight.style.display = "block";
        button.innerHTML = "Hide template guidance";
        columnRight.removeAttribute("aria-hidden");
    }

    return false;

}


function guidanceShowHideV2() {

    var columnRight = document.getElementById("column-right");
    var columnLeft = document.getElementById("column-left");
    var classIsPresent = columnLeft.classList.contains("nhsuk-grid-column-two-thirds");
    var button = document.getElementById("toggle");

    if (classIsPresent) {
        columnLeft.classList.remove("nhsuk-grid-column-two-thirds");
        columnLeft.classList.add("nhsuk-grid-column-full");
        columnRight.style.display = "none";
        button.innerHTML = "Show formatting &amp; personalisation guidance";
        columnRight.setAttribute("aria-hidden", "true");
    } else {
        columnLeft.classList.add("nhsuk-grid-column-two-thirds");
        columnLeft.classList.remove("nhsuk-grid-column-full");
        columnRight.style.display = "block";
        button.innerHTML = "Hide formatting &amp; personalisation guidance";
        columnRight.removeAttribute("aria-hidden");
    }

    return false;

}