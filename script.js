// header
const bar = document.getElementById("bar");
const nav = document.getElementById("nav");

bar.onclick = (e) => {
    const icon = e.target.getAttribute("class")
    if (icon == "fa-solid fa-bars") {
        e.target.setAttribute("class", "fa-solid fa-xmark")

    } else {
        e.target.setAttribute("class", "fa-solid fa-bars")
    }
    nav.classList.toggle("showNav")
}

//Function to toggle between light and dark modes in nav-bar
document.addEventListener('DOMContentLoaded', function () {
    var modeChangeButton = document.getElementById('modeChangeButton');
    var linkElements = {
        light: ['lightMode.css', 'lightModeCommon.css'],
        dark: ['darkMode.css', 'darkModeCommon.css']
    };

    // Function to load stylesheets based on mode
    function loadStyles(cssFiles) {
        // Remove existing link elements
        document.querySelectorAll('link[rel="stylesheet"]').forEach(function (linkElement) {
            linkElement.remove();
        });
        // Append new link elements for the given CSS files
        cssFiles.forEach(function (cssFile) {
            var linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.type = 'text/css';
            linkElement.href = cssFile;
            document.head.appendChild(linkElement);
        });
    }

    // Function to toggle mode
    function toggleMode() {
        var currentMode = localStorage.getItem('mode');
        if (currentMode === 'dark') {
            loadStyles(linkElements.light); // Switch to light mode CSS
            localStorage.setItem('mode', 'light');
        } else {
            loadStyles(linkElements.dark); // Switch to dark mode CSS
            localStorage.setItem('mode', 'dark');
        }
    }

    // Event listener for mode change button click
    modeChangeButton.addEventListener('click', function (event) {
        event.preventDefault();
        toggleMode();
    });

    // Initial load of styles based on stored mode or default to light mode
    var storedMode = localStorage.getItem('mode');
    if (storedMode === 'dark') {
        loadStyles(linkElements.dark);
    } else {
        loadStyles(linkElements.light);
        localStorage.setItem('mode', 'light'); // Default to light mode
    }
});






// carousel
const carouselContainer = document.querySelector(".carouselContainer");
const eachCarousel = document.querySelector(".eachCarousel").clientWidth;
const allEachCarousel = document.querySelectorAll(".eachCarousel");
const allIndicator = document.querySelectorAll(".indicator");

const slideCarousel = (index) => {
    for (let x = 0; x < allEachCarousel.length; x++) {
        if (x === index) {
            allEachCarousel[x].classList.add("eachCarouselBorder")
            allIndicator[x].classList.add("activeIndicator")
        } else {
            allEachCarousel[x].classList.remove("eachCarouselBorder")
            allIndicator[x].classList.remove("activeIndicator")
        }
    }
    carouselContainer.scrollLeft = (index * (eachCarousel + 10))
    console.log(carouselContainer.scrollLeft)
}