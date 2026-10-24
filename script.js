// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translateY(15px)' : '';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translateY(-15px)' : '';
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    });
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation to elements on scroll
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

// Apply animation to course cards and payment methods
document.querySelectorAll('.course-card, .payment-method').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// CTA Button Click Handler
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    const coursesSection = document.getElementById('courses');
    coursesSection.scrollIntoView({ behavior: 'smooth' });
});

// Course Button Click Handlers
const courseButtons = document.querySelectorAll('.course-btn');
courseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === 0) {
            // Basic course button
            alert('تم الانتقال إلى صفحة التسجيل المجاني للدورة الأساسية');
        } else {
            // Premium course button
            alert('تم الانتقال إلى صفحة الاشتراك في دورة SMC الاحترافية');
        }
    });
});

// Contact Links
const contactLinks = document.querySelectorAll('.contact-link');
contactLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.borderColor = 'var(--gold-primary)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.borderColor = 'var(--border-light)';
    });
});

// Navbar scroll effect
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Add ripple effect to buttons
document.querySelectorAll('.cta-button, .course-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add loading animation to hero section
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 100);
});

// Add aria labels for accessibility
document.querySelectorAll('.nav-link').forEach(link => {
    link.setAttribute('role', 'navigation');
});

document.querySelectorAll('button').forEach(button => {
    if (!button.getAttribute('aria-label')) {
        button.setAttribute('role', 'button');
    }
});

// Support Modal Functionality
const supportBtn = document.getElementById('supportBtn');

// Create support modal HTML
const supportModal = document.createElement('div');
supportModal.className = 'support-modal';
supportModal.id = 'supportModal';
supportModal.innerHTML = `
    <div class="support-content">
        <div class="support-header">
            <h3 class="support-title">اتصل بنا</h3>
            <button class="close-support">&times;</button>
        </div>
        <div class="support-email">
            <strong>البريد الإلكتروني:</strong>
            <a href="mailto:etrade123567@gmail.com">etrade123567@gmail.com</a>
        </div>
        <form class="support-form" id="supportForm">
            <div class="form-group">
                <label for="name">الاسم</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">البريد الإلكتروني</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="subject">الموضوع</label>
                <input type="text" id="subject" name="subject" required>
            </div>
            <div class="form-group">
                <label for="message">الرسالة</label>
                <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" class="submit-support">إرسال الرسالة</button>
        </form>
    </div>
`;

document.body.appendChild(supportModal);

// Support modal functions
const closeBtn = supportModal.querySelector('.close-support');
const supportForm = document.getElementById('supportForm');

supportBtn.addEventListener('click', () => {
    supportModal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    supportModal.classList.remove('active');
});

supportModal.addEventListener('click', (e) => {
    if (e.target === supportModal) {
        supportModal.classList.remove('active');
    }
});

supportForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link
    const mailtoLink = `mailto:etrade123567@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`الاسم: ${name}\nالبريد: ${email}\n\n${message}`)}`;
    
    window.location.href = mailtoLink;
    
    // Show confirmation
    alert('تم إرسال رسالتك! شكراً لتواصلك معنا.');
    supportForm.reset();
    supportModal.classList.remove('active');
});
