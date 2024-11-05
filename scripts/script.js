// GSAP and ScrollTrigger plugin registration
gsap.registerPlugin(ScrollTrigger);

// Hero Section Text Animation (without SplitText)
gsap.from("#hero h1", {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 0.5,
    stagger: 0.05
});
gsap.from("#hero p", { duration: 1, y: 50, opacity: 0, delay: 1 });

// Service Card Animation (Staggered Fade-In)
gsap.from(".card", {
    scrollTrigger: {
        trigger: ".cards-container",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1
    },
    opacity: 0,
    y: 50,
    stagger: 0.2
});

// Parallax Effect on Hero Section
gsap.to(".hero", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        scrub: true
    },
    y: 100,
    ease: "none"
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

// Background Color Change on Scroll for "Why Partner with Us?" Section
gsap.to("body", {
    scrollTrigger: {
        trigger: ".why-partner",
        start: "top center",
        end: "bottom center",
        scrub: true
    },
    backgroundColor: "#f0f8ff",
    ease: "power1.inOut"
});

// Image Reveal Animation in Expertise Section
gsap.from(".card img", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".cards-container",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

// Fade and Rotate Effect on Section Titles
gsap.from(".title, .why-partner h2", {
    opacity: 0,
    rotation: -5,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: ".title",
        start: "top center",
        end: "bottom center",
        scrub: true
    }
});

// Wave Animation on CTA Button
const ctaButton = document.querySelector(".cta");
ctaButton.addEventListener("mouseenter", () => {
    gsap.to(ctaButton, { duration: 0.3, x: 10, repeat: 3, yoyo: true });
});
ctaButton.addEventListener("mouseleave", () => {
    gsap.to(ctaButton, { duration: 0.3, x: 0 });
});

// Scroll-based Progress Bar (requires HTML for progress bar)
gsap.to(".progress-bar", {
    width: "100%",
    scrollTrigger: {
        scrub: true
    }
});

gsap.from(".card", {
    duration: 1,
    y: 20,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
});

gsap.to(".hero h1", {
    duration: 2,
    scale: 1.5,
    rotation: 15,
    y: 50,
});
