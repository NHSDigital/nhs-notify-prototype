
// Open the guidance column if the user has left it open during their session
window.addEventListener("load", (event) => {

var columnRight = document.getElementById("column-right")
var columnLeft = document.getElementById("column-left")
var guidance = sessionStorage.getItem("guidance")

if (guidance === "open") {
    columnLeft.classList.add("nhsuk-grid-column-two-thirds")
    columnLeft.classList.remove("nhsuk-grid-column-full")
    columnRight.style.display = "block"
    button.innerHTML = "Hide formatting &amp; personalisation guidance"
    columnRight.removeAttribute("aria-hidden")
}

});


// Toggle the guidance column if the user clicks on the toggle link
var button = document.getElementById("guidanceToggle");
button.addEventListener("click", guidanceShowHideV2);

function guidanceShowHideV2() {

    var columnRight = document.getElementById("column-right")
    var columnLeft = document.getElementById("column-left")
    var guidance = sessionStorage.getItem("guidance")

    // Hide
    if (guidance === "open") {
        columnLeft.classList.remove("nhsuk-grid-column-two-thirds")
        columnLeft.classList.add("nhsuk-grid-column-full")
        columnRight.style.display = "none"
        button.innerHTML = "Show formatting &amp; personalisation guidance"
        columnRight.setAttribute("aria-hidden", "true")
        sessionStorage.setItem("guidance", "closed")
    } 
    // Show
    else {
        columnLeft.classList.add("nhsuk-grid-column-two-thirds")
        columnLeft.classList.remove("nhsuk-grid-column-full")
        columnRight.style.display = "block"
        button.innerHTML = "Hide formatting &amp; personalisation guidance"
        columnRight.removeAttribute("aria-hidden")
        sessionStorage.setItem("guidance", "open")
    }

    var guidance = sessionStorage.getItem("guidance")
    console.log(guidance)

    return false;

}