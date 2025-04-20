const toggler = document.querySelector('#toggler');
const toggle_icon = document.querySelector('#toggle-icon');
const imgBox = document.querySelector('.img-box');

// Function to apply the current theme from localStorage
function applyTheme() {
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-bs-theme', theme);

    // Set the toggle icon based on the theme
    if (theme === 'dark') {
        toggle_icon.classList.remove('bi-moon-stars');
        toggle_icon.classList.add('bi-sun');
        imgBox.classList.add('dark-mode');
    } else {
        toggle_icon.classList.remove('bi-sun');
        toggle_icon.classList.add('bi-moon-stars');
        imgBox.classList.remove('dark-mode');
    }
}

// Toggle theme and update localStorage
toggler.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Save the selected theme to localStorage


    // Update the icon accordingly
    if (newTheme === 'dark') {
        toggle_icon.classList.remove('bi-moon-stars');
        toggle_icon.classList.add('bi-sun');
        imgBox.classList.add('dark-mode');
    } else {
        toggle_icon.classList.remove('bi-sun');
        toggle_icon.classList.add('bi-moon-stars');
        imgBox.classList.remove('dark-mode');
    }
});

// Apply the theme on page load
applyTheme();


// typewriter effect
function typeWriter(ele_id, text, speed, color) {
    return new Promise((resolve) => {
        let i = 0;

        function typing() {
            if (i < text.length) {
                ele = document.getElementById(ele_id)
                ele.innerHTML += text.charAt(i);
                if (color) {
                    ele.setAttribute('style', `color: ${color};`);
                }
                i++;
                setTimeout(typing, speed);
            } else {
                resolve();  // Resolve the promise once typing is finished
            }
        }

        typing();  // Start typing
    });
}

// Fad in animation
function Fade(ele_id, fadetype) {
    const ele = document.getElementById(ele_id);
    ele.style.animation = `${fadetype} 2s forwards`;
    ele.style.opacity = 1;
}

async function startTyping() {
    await typeWriter('intro-0', 'Hello World!', 50);
    await typeWriter('intro-1', 'I\'m ', 50);
    await typeWriter('intro-2', 'Mohamed Amin', 50, 'var(--custom-purpel)');
    await typeWriter('intro-3', ' Aksaim', 50);
    Fade('intro', 'fadeDown');
    setTimeout(() => {
        Fade('download-btn', 'fadeRight');
    }, 200);
    setTimeout(() => {
        Fade('see-more-btn', 'fadeLeft');
    }, 220);
}

startTyping();