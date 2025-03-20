document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Contact Form Validation
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;
        this.querySelectorAll("input, textarea").forEach(field => {
            if (!field.checkValidity()) {
                field.style.borderColor = "red";
                isValid = false;
            } else {
                field.style.borderColor = "green";
            }
        });

        if (isValid) {
            alert("Message sent successfully!");
            form.reset();
            form.querySelectorAll("input, textarea").forEach(field => field.style.borderColor = "");
        } else {
            alert("Please fill all fields correctly.");
        }
    });

    // Fade-in Animation for Sections & Projects
    function fadeInElements() {
        const elements = document.querySelectorAll("section, .project");
        elements.forEach(el => {
            const position = el.getBoundingClientRect().top;
            if (position < window.innerHeight - 50) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    }

    document.addEventListener("scroll", fadeInElements);
    fadeInElements(); // Initial check on page load
});
