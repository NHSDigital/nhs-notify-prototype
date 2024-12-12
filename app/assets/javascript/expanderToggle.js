
// Keep the relevant expander open across the user's session


var expanderDraft = document.getElementById("expanderDraft")
var expanderDraftSummary = document.getElementById("expanderDraft").getElementsByClassName("nhsuk-details__summary")[0]

expanderDraftSummary.addEventListener("click", (event) => {

    if (expanderDraft.hasAttribute("open")) {
        sessionStorage.setItem("expanderDraftStorage", "closed")
    } else {
        sessionStorage.setItem("expanderDraftStorage", "open")
    }

});

var expanderDraftStorage = sessionStorage.getItem("expanderDraftStorage")

window.addEventListener("load", (event) => {

    if (expanderDraftStorage === "open") {
        expanderDraft.open = true
    } else {
        expanderDraft.open = false
    }

});




var expanderProd = document.getElementById("expanderProd")
var expanderPodSummary = document.getElementById("expanderProd").getElementsByClassName("nhsuk-details__summary")[0]

expanderPodSummary.addEventListener("click", (event) => {

    if (expanderProd.hasAttribute("open")) {
        sessionStorage.setItem("expanderProdStorage", "closed")
    } else {
        sessionStorage.setItem("expanderProdStorage", "open")
    }

});

var expanderProdStorage = sessionStorage.getItem("expanderProdStorage")

window.addEventListener("load", (event) => {

    if (expanderProdStorage === "open") {
        expanderProd.open = true
    } else {
        expanderProd.open = false
    }

});