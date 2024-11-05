// Wave Animation on CTA Button
const ctaButton = document.querySelector(".cta");
ctaButton.addEventListener("mouseenter", () => {
    gsap.to(ctaButton, { duration: 0.3, x: 10, repeat: 3, yoyo: true });
});
ctaButton.addEventListener("mouseleave", () => {
    gsap.to(ctaButton, { duration: 0.3, x: 0 });
});



const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        // Get the description element
        const description = card.querySelector('.description');

        // Toggle the display of the clicked card's description
        if (description.style.display === 'block') {
            description.style.display = 'none'; // Hide if already visible
        } else {
            // First, hide all descriptions
            cards.forEach(c => c.querySelector('.description').style.display = 'none');
            description.style.display = 'block'; // Show the clicked card's description
        }
    });
});


// Hover Animation for Cards
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.05, duration: 0.3 });
    });
    card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3 });
    });
});

// Image Reveal Animation in Expertise Section
gsap.from(".card img", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".cards-container",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});


// Service Card Animation (Simultaneous Pop-In with Bounce Effect)
window.onload = function() {
    gsap.from(".card", {
        opacity: 0,
        scale: 0.8,
        y: 50,
        rotate: 5,
        duration: 0.4, // Duration for the animation
        ease: "bounce.out"
    });
};















