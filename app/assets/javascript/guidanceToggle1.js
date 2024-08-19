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