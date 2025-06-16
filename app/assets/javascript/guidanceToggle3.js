
// Close the guidance column if the user has left it closed during their session
window.addEventListener("load", (event) => {

var columnRight = document.getElementById("column-right")
var columnLeft = document.getElementById("column-left")
var guidance = sessionStorage.getItem("guidance")

if (guidance === "closed") {
    columnLeft.classList.remove("nhsuk-grid-column-two-thirds")
    columnLeft.classList.add("nhsuk-grid-column-full")
    columnRight.style.display = "none"
    button.innerHTML = "Show formatting and personalisation guidance"
    columnRight.addAttribute("aria-hidden")
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
    if (guidance === "closed") {
        columnLeft.classList.add("nhsuk-grid-column-two-thirds")
        columnLeft.classList.remove("nhsuk-grid-column-full")
        columnRight.style.display = "block"
        button.innerHTML = "Hide formatting and personalisation guidance"
        columnRight.removeAttribute("aria-hidden")
        sessionStorage.setItem("guidance", "open")
    } 
    
    // Show
    else {
        columnLeft.classList.remove("nhsuk-grid-column-two-thirds")
        columnLeft.classList.add("nhsuk-grid-column-full")
        columnRight.style.display = "none"
        button.innerHTML = "Show formatting and personalisation guidance"
        columnRight.setAttribute("aria-hidden", "true")
        sessionStorage.setItem("guidance", "closed")
    }

    return false;

}