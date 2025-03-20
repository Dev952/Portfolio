document.addEventListener("DOMContentLoaded", function () {
    // Add hover effect to social links
    let socialLinks = document.querySelectorAll(".social-links a");

    socialLinks.forEach((link) => {
        link.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
        });

        link.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Smooth scrolling
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
});

