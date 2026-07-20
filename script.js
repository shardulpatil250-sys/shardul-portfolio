// ==========================
// Smooth Scroll for Nav Links
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ==========================
// Active Navigation Link
// ==========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ==========================
// Reveal Animation
// ==========================
const revealElements = document.querySelectorAll(
    ".project-card, .skill-box, #about p"
);

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "0.8s";

});

window.addEventListener("scroll", reveal);

reveal();

// ==========================
// Typing Effect
// ==========================
const text = "Aspiring Full Stack Developer";
const typingElement = document.querySelector(".hero h2");

let index = 0;

function typeText() {

    if (index < text.length) {

        typingElement.textContent += text.charAt(index);

        index++;

        setTimeout(typeText, 80);

    }

}

typingElement.textContent = "";

typeText();

// ==========================
// Navbar Shadow on Scroll
// ==========================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ==========================
// Welcome Message
// ==========================
window.addEventListener("load", () => {

    console.log("Welcome to Shardul Rupesh Patil's Portfolio 🚀");

});