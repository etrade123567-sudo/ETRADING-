// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Close menu when link is clicked
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
    });
});

// Support Modal
const supportBtn = document.getElementById('supportBtn');
const supportModal = document.getElementById('supportModal');
const closeBtn = document.querySelector('.close');
const supportForm = document.getElementById('supportForm');

supportBtn.addEventListener('click', () => {
    supportModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    closeModal();
});

window.addEventListener('click', (event) => {
    if (event.target == supportModal) {
        closeModal();
    }
});

function closeModal() {
    supportModal.style.display = 'none';
}

// Support Form Submission
supportForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = supportForm.querySelector('input[type="text"]').value;
    const email = supportForm.querySelector('input[type="email"]').value;
    const subject = supportForm.querySelectorAll('input[type="text"]')[1].value;
    const message = supportForm.querySelector('textarea').value;
    
    const mailtoLink = `mailto:etrade123567@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`الاسم: ${name}\nالبريد: ${email}\n\nالرسالة:\n${message}`)}`;
    
    window.location.href = mailtoLink;
    closeModal();
    supportForm.reset();
});

// Smooth Scroll Helper
function scrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        nav.classList.remove('open');
    }
}

// FAQ Toggle
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isOpen = faqItem.classList.contains('open');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('open');
    });
    
    // Toggle current FAQ
    if (!isOpen) {
        faqItem.classList.add('open');
    }
}

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.feature-card, .course-card, .contact-card, .result-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Scroll to top on page load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Console message
console.log('%cأكاديمية إيترايدينغ', 'font-size: 24px; color: #D4AF37; font-weight: bold;');
console.log('%cتعليم التداول الاحترافي', 'font-size: 16px; color: #666;');