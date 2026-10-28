// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // Close menu when link clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
        });
    });
}

// Smooth Scroll Function
function scrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        navMenu?.classList.remove('open');
    }
}

// FAQ Toggle
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isOpen = faqItem.classList.contains('open');
    
    // Close all FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('open');
    });
    
    // Open clicked FAQ
    if (!isOpen) {
        faqItem.classList.add('open');
    }
}

// Scroll animations for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.feature-card, .course-card, .result-card, .faq-item').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Scroll to top on page load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.style.color = 'var(--dark)';
            });
            const activeLink = document.querySelector(`[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.style.color = 'var(--primary)';
            }
        }
    });
});

console.log('%cأكاديمية إيترايدينغ', 'font-size: 20px; color: #D4AF37; font-weight: bold;');
console.log('%cتعليم التداول الاحترافي', 'font-size: 14px; color: #666;');