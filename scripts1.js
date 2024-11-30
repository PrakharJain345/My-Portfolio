// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add visibility animation to sections on scroll
document.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (sectionTop < viewportHeight * 0.8) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });

    // Update active link based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let currentIndex = sections.length;

    sections.forEach((section, index) => {
        if (window.scrollY + 50 >= section.offsetTop) {
            currentIndex = index;
        }
    });

    navLinks.forEach((link, index) => {
        link.classList.remove('active');
        if (index === currentIndex) {
            link.classList.add('active');
        }
    });
});

// Highlight social media icons on hover
document.querySelectorAll('.social-links img').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.3)';
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.boxShadow = 'none';
    });
});
