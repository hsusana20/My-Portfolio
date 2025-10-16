// Navigation Menu Toggle
function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.transform = 'translateY(0)';
}

function cancel() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.transform = 'translateY(-500px)';
}

// Close dropdown when a link is clicked
document.querySelectorAll('.dropdown .links a').forEach(link => {
    link.addEventListener('click', function() {
        if (this.querySelector('i')) return; // Don't close if clicking the X button
        cancel();
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Hire Me Button
document.querySelector('.btn button').addEventListener('click', function() {
    // Option 1: Scroll to contact section
    const contactSection = document.querySelector('.contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
    
    // Option 2: You can also open an email
    // window.location.href = 'mailto:heirousana27@gmail.com?subject=Hire%20Me&body=Hi%20Heiro,%20I%20would%20like%20to%20discuss%20a%20project.';
});

// Download CV Button
document.querySelector('.button button').addEventListener('click', function() {
    // Replace with your actual CV file path
    const cvUrl = '../My-Portfolio/cv/BSIT-MI_Usana, Heiro.pdf'; // Update this path
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'BSIT-MI_Usana, Heiro.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Typewriter effect
const words = ['Web Developer', 'Mobile Developer'];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = '';
let isDeleting = false;

function typewriter() {
    const typewriterText = document.querySelector('.typewriter-text');
    
    if (!isDeleting) {
        // Typing
        if (letterIndex < words[wordIndex].length) {
            currentWord += words[wordIndex][letterIndex];
            typewriterText.textContent = currentWord;
            letterIndex++;
            setTimeout(typewriter, 100);
        } else {
            // Pause before deleting
            isDeleting = true;
            setTimeout(typewriter, 2000);
        }
    } else {
        // Deleting
        if (letterIndex > 0) {
            currentWord = currentWord.slice(0, -1);
            typewriterText.textContent = currentWord;
            letterIndex--;
            setTimeout(typewriter, 50);
        } else {
            // Move to next word
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            letterIndex = 0;
            currentWord = '';
            setTimeout(typewriter, 500);
        }
    }
}

// Start typewriter effect when page loads
window.addEventListener('load', typewriter);

// Social Links - Optional: Add tracking or popup effect
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Scroll to top functionality (optional)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #b74b4b;
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 99;
    transition: all 0.3s ease;
    font-size: 20px;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
        scrollToTopBtn.style.justifyContent = 'center';
        scrollToTopBtn.style.alignItems = 'center';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form validation for contact (if you add a contact form)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}