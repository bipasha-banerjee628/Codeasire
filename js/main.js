/* ======================================
   TYPING ANIMATION
====================================== */

const words = [
    "Internships",
    "Industry Training",
    "Live Projects",
    "AI Automation",
    "Career Guidance",
    "Placement Assistance",
    "Verified Certificates"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type() {

    let current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {
            deleting = true;
            setTimeout(type, 1500);
            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(type, deleting ? 50 : 100);

}

type();



/* ======================================
   SHRINK NAVBAR ON SCROLL
====================================== */

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        nav.style.padding = "12px 40px";
        nav.style.background = "rgba(2,6,23,.9)";
        nav.style.boxShadow = "0 10px 40px rgba(0,0,0,.3)";

    } else {

        nav.style.padding = "18px 40px";
        nav.style.background = "rgba(255,255,255,.08)";
        nav.style.boxShadow = "none";

    }

});



/* ======================================
   SCROLL PROGRESS BAR
====================================== */

const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.width = "0%";
progress.style.background = "linear-gradient(90deg,#2563eb,#06b6d4)";
progress.style.zIndex = "99999";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    let total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let percent = (window.scrollY / total) * 100;

    progress.style.width = percent + "%";

});



/* ======================================
   MOUSE GLOW
====================================== */

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "250px";
glow.style.height = "250px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
"radial-gradient(circle,rgba(37,99,235,.18),transparent 70%)";
glow.style.filter = "blur(20px)";
glow.style.zIndex = "-1";

document.body.appendChild(glow);

window.addEventListener("mousemove", e => {

    glow.style.left = e.clientX - 125 + "px";
    glow.style.top = e.clientY - 125 + "px";

});



/* ======================================
   BUTTON RIPPLE EFFECT
====================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const x = e.offsetX;
        const y = e.offsetY;

        circle.style.left = x + "px";
        circle.style.top = y + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        },600);

    });

});
/* ===========================
   COUNTER ANIMATION
=========================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 100;

            const update = () => {

                if(count < target){

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target + "+";

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => counterObserver.observe(counter));


/*==========================
FAQ
==========================*/

window.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".faq-item");

    console.log("FAQs found:", faqItems.length);

    faqItems.forEach(item => {

        item.querySelector(".faq-question").addEventListener("click", () => {

            console.log("Clicked");

            faqItems.forEach(faq => {

                if (faq !== item) {

                    faq.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

});

/*==========================
PARTICLES
==========================*/

if (typeof particlesJS !== "undefined") {

    particlesJS("particles-js", {

        particles: {

            number: {
                value: 70,
                density: {
                    enable: true,
                    value_area: 900
                }
            },

            color: {
                value: "#2563eb"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.4
            },

            size: {
                value: 3,
                random: true
            },

            line_linked: {
                enable: true,
                distance: 160,
                color: "#2563eb",
                opacity: 0.25,
                width: 1
            },

            move: {
                enable: true,
                speed: 2,
                out_mode: "bounce"
            }

        },

        interactivity: {

            detect_on: "canvas",

            events: {

                onhover: {
                    enable: true,
                    mode: "grab"
                },

                onclick: {
                    enable: true,
                    mode: "push"
                }

            }

        },

        retina_detect: true

    });

}
/*==========================
MOBILE MENU
==========================*/
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");

if(menuBtn && closeBtn && mobileMenu){

menuBtn.onclick=()=>{

mobileMenu.classList.add("active");
document.body.style.overflow="hidden";

};

closeBtn.onclick=()=>{

mobileMenu.classList.remove("active");
document.body.style.overflow="auto";

};

document.querySelectorAll(".mobile-menu a").forEach(link=>{

link.onclick=()=>{

mobileMenu.classList.remove("active");
document.body.style.overflow="auto";

};

});

}
/*==========================
PRELOADER
==========================*/

/*==========================
PRELOADER
==========================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (!preloader) return;

    // Wait for the loading bar animation to finish
    setTimeout(() => {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 800);

    }, 2200);

});