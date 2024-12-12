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



function checkFormTestApp() {
    var ok = true;

    if (document.getElementById("test-app-1").value == "") {
        document.getElementById("test-app-1").classList.add("nhsuk-input--error");
        document.getElementById("test-app-1").closest(".nhsuk-form-group").classList.add("nhsuk-form-group--error");
        document.getElementById("test-app-1--error").style.display = "block";
        ok = false;
    } else {
        document.getElementById("test-app-1").classList.remove("nhsuk-input--error");
        document.getElementById("test-app-1").closest(".nhsuk-form-group").classList.remove("nhsuk-form-group--error");
        document.getElementById("test-app-1--error").style.display = "none";
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
        document.getElementById("test-email-1--error").style.display = "none";
    }

    return ok;
}



function checkFormCreateMessage() {
    var ok = true;
    var message_name_1 = document.getElementById("message-name-1");
    var message_name_1_error = document.getElementById("message-name-1--error");

    if (message_name_1.value == "") {
        message_name_1.classList.add("nhsuk-input--error");
        message_name_1.closest(".nhsuk-form-group").classList.add("nhsuk-form-group--error");
        message_name_1_error.style.display = "block";
        message_name_1.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        ok = false;
    } else {
        message_name_1.classList.remove("nhsuk-input--error");
        message_name_1.closest(".nhsuk-form-group").classList.remove("nhsuk-form-group--error");
        message_name_1_error.style.display = "none";
    }

    return ok;
}