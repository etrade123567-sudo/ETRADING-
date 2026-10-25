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

// Announcement Bar Close
const announcementBar = document.getElementById('announcementBar');
if (announcementBar) {
    const closeBtn = announcementBar.querySelector('.close-announcement');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            announcementBar.style.display = 'none';
        });
    }
}

// Hero Video Fallback (if video fails to load)
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
    heroVideo.addEventListener('error', () => {
        // Fallback to gradient background
        const hero = document.querySelector('.hero');
        hero.style.background = 'linear-gradient(135deg, #D4AF37, #E8D4A8)';
        heroVideo.style.display = 'none';
    });
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
document.querySelectorAll('.course-card, .why-card, .inzo-card, .contact-card, .result-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Scroll to top on page load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Add active state to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('nav a').forEach(link => {
                link.style.color = 'var(--dark-text)';
            });

            const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.style.color = 'var(--gold-primary)';
            }
        }
    });
});

// Dynamic results loading (replace with API call later if needed)
function loadResults() {
    const resultsGrid = document.getElementById('resultsGrid');
    if (!resultsGrid) return;

    // This is a placeholder - you can replace with API call later
    const sampleResults = [
        {
            name: 'محمد أحمد',
            profit: '+$5,000',
            review: 'الدورة غيّرت نظري للتداول تماماً'
        },
        {
            name: 'فاطمة علي',
            profit: '+$8,500',
            review: 'أفضل استثمار قمت به في حياتي'
        },
        {
            name: 'علي خالد',
            profit: '+$12,000',
            review: 'المتابعة المباشرة ساعدتني كثيراً'
        }
    ];

    // Results are already in HTML, but this function can be used to update them dynamically
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadResults();
});

// WhatsApp number (update with actual number)
const whatsappBtn = document.querySelector('.floating-btn.whatsapp');
if (whatsappBtn) {
    whatsappBtn.href = 'https://wa.me/yourwhatsappnumber'; // Update this
}

// Console message
console.log('%cأكاديمية إيترايدينغ', 'font-size: 24px; color: #D4AF37; font-weight: bold;');
console.log('%cتعليم التداول الاحترافي', 'font-size: 16px; color: #666;');