// Display welcome message with user name
document.getElementById("nameButton").addEventListener("click", function() {
    const userName = prompt("Please enter your name:");
    document.getElementById("nameDisplay").textContent = `Hello, ${userName}! Welcome to my website.`;
});

// Enlarge and shrink profile image
const img = document.getElementById("img1");

function toggleImgSize() {
    if (img.style.width === "60%") {
        img.style.width = "40%";
    } else {
        img.style.width = "60%";
    }
    img.style.height = "auto";
    img.style.transition = "width 0.5s ease";
}


// Audio Citation Button
function toggleCitation() {
    const citation = document.querySelector(".audio-citation");
    const button = document.querySelector(".citation-button");
    if (citation.style.display === "none" || citation.style.display === "") {
        citation.style.display = "block"; // Show citation
        button.textContent = "Hide Citation"; // Change button text
    } else {
        citation.style.display = "none"; // Hide citation
        button.textContent = "Audio Citation"; // Revert button text
    }
}


// Toggle text size between normal and large
function toggleTextSize() {
    document.body.classList.toggle("large-text");
    if (body.classList.contains("large-text")) {
        body.classList.remove("large-text"); // Revert to normal text size
    } else {
        body.classList.add("large-text"); // Increase text size
    }
}


// Toggle color scheme for accessibility
function toggleColorScheme() {
    const body = document.body;
    if (body.classList.contains("colorblind-mode")) {
        body.classList.remove("colorblind-mode"); // Revert to default color scheme
    } else {
        body.classList.add("colorblind-mode"); // Apply accessible color scheme
    }
}


// Show alt text descriptions for images
function showAltText() {
    const descriptions = [
        "Description of Image 1",
        "Description of Image 2",
        "Description of Image 3"
    ];
    document.getElementById("altTextDisplay").innerText = descriptions.join("\n");
}

// Dropdown toggle for navigation
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Change text color on mouse hover
function mouseOver(element) {
    element.style.color = "blue";
}

function mouseOut(element) {
    element.style.color = "black";
}

function toggleAltText(button) {
    const altText = button.nextElementSibling; // Get the <p> element with the alt text
    if (altText.style.display === "none" || altText.style.display === "") {
        altText.style.display = "block"; // Show alt text
        button.textContent = "Hide Description"; // Change button text
    } else {
        altText.style.display = "none"; // Hide alt text
        button.textContent = "Description"; // Revert button text
    }
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
