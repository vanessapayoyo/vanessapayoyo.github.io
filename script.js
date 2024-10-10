document.getElementById("nameButton").addEventListener("click", function() {
    const userName = prompt("Please enter your name:");
        document.getElementById("nameDisplay").textContent = `Hello, ${userName}! Welcome to my website.`;
    
});

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

    
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function mouseOver(element) {
    element.style.color = "blue";
}

function mouseOut(element) {
    element.style.color = "black";
}


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

