const navLinks = document.querySelectorAll("#nav-links > div");

navLinks.forEach(navLink => {
    let currentSelection = navLink.className;
    let allDropdowns = document.querySelectorAll(".dropdown-selections");
    let currentDropdown = document.querySelector(`.${currentSelection}.dropdown-selections`);

    navLink.addEventListener("mouseover", () => {
        allDropdowns.forEach(dropDown => {
            dropDown.style.visibility = "hidden";
            dropDown.classList.remove("makeMove");
        });
        currentDropdown.style.visibility = "visible";
        currentDropdown.classList.add("makeMove");
        currentDropdown.addEventListener("mouseover", () => {
            currentDropdown.style.visibility="visible";
        });
        currentDropdown.addEventListener("mouseout", () => {
            currentDropdown.style.visibility="hidden";
            currentDropdown.classList.remove("makeMove");
        });
    });
    navLink.addEventListener("mouseout", () => {
        allDropdowns.forEach(dropDown => {
            dropDown.style.visibility = "hidden";
            dropDown.classList.remove("makeMove");
        });
    });
});