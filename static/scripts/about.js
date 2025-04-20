const prev = document.getElementById('prev');
const next = document.getElementById('next');
const sections = Array.from(document.querySelectorAll('.section'));

let currentIndex = 0;

// Intersection Observer to track the visible section
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            currentIndex = sections.indexOf(entry.target);
            buttonDisplay();  // Update button states when the visible section changes
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));

// Enable or disable buttons based on current index
function buttonDisplay() {
    prev.disabled = currentIndex === 0;
    next.disabled = currentIndex === sections.length - 1;
}

// Scroll to the current section
function scrollToSection() {
    if (currentIndex >= 0 && currentIndex < sections.length) {
        sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
    }
}

// Click handlers for next and previous buttons
prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        scrollToSection();
    }
});

next.addEventListener('click', () => {
    if (currentIndex < sections.length - 1) {
        currentIndex++;
        scrollToSection();
    }
});


// Projects Slider
const swiper = new Swiper('.slide-content', {
    // parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    fade: true,
    grabCursor: true,
    spaceBetween: 15,

    // pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }
    },
});