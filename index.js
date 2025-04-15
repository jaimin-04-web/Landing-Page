//navbar functionality starts from here
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    function getScrollThreshold() {
        return window.innerWidth < 768 ? 185 : 190;
    }

    window.addEventListener('scroll', () => {
        const scrollThreshold = getScrollThreshold();
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});


// page current location an all functionality Start's from here.
const links = document.querySelectorAll('.navbar .list-item, .footer-menu .new-list-item');
const offset = 90;

links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const targetPosition = targetElement.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    });
});
// page current location an all functionality Ends's here.


// BUTTON FOR SCROLL UP FULLY 
var Btn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', function () {
    if (window.scrollY > 1000) {
        Btn.style.visibility = 'visible';
        Btn.style.opacity = 1;
    } else {
        Btn.style.visibility = 'hidden';
        Btn.style.opacity = 0;
    }
});
Btn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Button JS End's Here..!


// Current page navigation heigh light
const menuItems = document.querySelectorAll('.list-item');
menuItems.forEach(item => {
    item.addEventListener('click', function () {
        menuItems.forEach(i => i.classList.remove('current-page'));
        this.classList.add('current-page');
    });
});


// Active on scroll nav items
let sections = document.querySelectorAll('.divs');
let navLinks = document.querySelectorAll('.list li a');
const navbarOffset = 120; // Height of the fixed navbar

window.onscroll = () => {
    let scrollTop = window.scrollY + navbarOffset; // Adjust scroll position by navbar height

    sections.forEach(sec => {
        let sectionTop = sec.offsetTop; // Section's top offset
        let sectionHeight = sec.offsetHeight; // Section's height
        let id = sec.getAttribute('id'); // Section ID

        // Check if the section is in the viewport
        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
            navLinks.forEach(links => {
                links.classList.remove('current-page'); // Remove active class
            });
            let activeLink = document.querySelector(`header .menu .list li a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('current-page'); // Add active class
            }
        }
    });
};

// Swiper slides code for cars.
new Swiper(".mySwiper02", {
    loop: true,
    slidesPerView: 4,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        300: {  // Small screens (phones)
            slidesPerView: 1,
        },
        480: {  // Slightly larger phones
            slidesPerView: 1,
        },
        768: {  // Tablets
            slidesPerView: 2,
        },
        1024: { // Desktops
            slidesPerView: 4,
        }
    },
});

// Swiper slides code for service.
new Swiper(".mySwiper03", {
    loop: true,
    autoplay: {
        delay: 150,
        disableOnInteraction: false,
    },
    speed: 2500,
    slidesPerView: 1, // Default to 1 for small screens

    breakpoints: {
        300: {  // Small screens (phones)
            slidesPerView: 1,
        },
        480: {  // Slightly larger phones
            slidesPerView: 1,
        },
        768: {  // Tablets
            slidesPerView: 2,
        },
        1024: { // Desktops
            slidesPerView: 3,
        }
    },
});



// Typing Animation for home page.
const animeText = document.getElementById('anime-text');
const texts = [
    'Welcome to Tanna Travels.',
    'Your Journey Awaits.',
    'Explore the World With Us.'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
        animeText.textContent = currentText.slice(0, charIndex--);
    } else {
        animeText.textContent = currentText.slice(0, charIndex++);
    }

    const typingSpeed = isDeleting ? 100 : 150;

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(type, typingSpeed);
}
type();



// Show the overlay
function showLoadingOverlay() {
    document.getElementById('loadingOverlay').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Chrome back issue fix
window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
        document.getElementById("loadingOverlay").style.display = "none";
        document.body.style.overflow = "auto";
    }
});