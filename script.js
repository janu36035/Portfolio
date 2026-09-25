/* =========================================================
   PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const navContainer = document.querySelector(".nav-container");
const navMenu = document.querySelector(".nav-menu");


// Create mobile menu button

const menuButton = document.createElement("button");

menuButton.classList.add("menu-button");

menuButton.innerHTML = `
    <i class="fa-solid fa-bars"></i>
`;

menuButton.setAttribute("aria-label", "Open navigation menu");


// Add button to navbar

if (navContainer) {
    navContainer.appendChild(menuButton);
}


// Open / close mobile menu

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("mobile-active");

    const icon = menuButton.querySelector("i");

    if (navMenu.classList.contains("mobile-active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// Close mobile menu when a link is clicked

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("mobile-active");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop - 150 &&
            window.scrollY < sectionTop + sectionHeight - 150
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-container, .skill-card, .project-card, .featured-project, .timeline-item, .education-card, .contact-card"
);


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const footerYear = document.querySelector(".footer p");

if (footerYear) {

    const currentYear = new Date().getFullYear();

    footerYear.innerHTML =
        `© ${currentYear} Polamreddy Jahnavi. All rights reserved.`;

}


/* =========================================================
   PROJECT BUTTON PROTECTION
========================================================= */

// Prevent empty "#" links from jumping to the top

const emptyLinks = document.querySelectorAll('a[href="#"]');

emptyLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

    });

});


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "Welcome to Polamreddy Jahnavi's Portfolio 🚀"
);