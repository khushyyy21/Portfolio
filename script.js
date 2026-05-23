function scrollToSection() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

// Fade animation on scroll
window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".project-card, .skill-box");

    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if(position < screen - 100) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0px)";
        }
    });
});