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

    if (document.getElementById("template-letter-sender-1").value == "") {
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
    }

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