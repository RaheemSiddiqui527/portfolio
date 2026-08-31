// Raheem Design Studio - Premium JavaScript Logic
const WHATSAPP_NUMBER = "919321926162";

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    initScrollAnimations();
    initHeaderScroll();
    
    // Desktop only interactions
    if (window.matchMedia("(min-width: 769px)").matches) {
        initCustomCursor();
        initMagneticButtons();
        initServiceHover();
    }
    
    initPortfolioFiltering();
    initProjectModals();
    initWhatsAppIntegration();
});

// Theme Management
function initTheme() {
    const toggleBtn = document.getElementById('theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark' || (!currentTheme && prefersDark.matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            let theme = 'light';
            if (document.documentElement.getAttribute('data-theme') !== 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
                theme = 'dark';
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
            }
            localStorage.setItem('theme', theme);
            updateThemeIcon(theme);
        });
    }
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Mobile Menu
function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    if (btn && nav) {
        btn.addEventListener('click', () => {
            nav.classList.toggle('active');
            btn.querySelector('i').className = nav.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                btn.querySelector('i').className = 'fas fa-bars';
            });
        });
    }
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Custom Cursor
function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    const hoverTargets = document.querySelectorAll('.hover-target, a, button');
    const projectTriggers = document.querySelectorAll('.project-trigger');

    if (!cursor) return;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mouseenter', () => cursor.style.opacity = '1');
    document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
    
    // Normal hover elements
    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        target.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
    
    // Project hover (View Project state)
    projectTriggers.forEach(target => {
        target.addEventListener('mouseenter', () => {
            cursor.classList.add('view-project');
            cursor.classList.remove('hover'); // Override normal hover
        });
        target.addEventListener('mouseleave', () => cursor.classList.remove('view-project'));
    });
}

// Magnetic Buttons
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.magnetic-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px) scale(1)';
        });
    });
}

// Service List Image Preview
function initServiceHover() {
    const serviceItems = document.querySelectorAll('.service-item');
    const previewContainer = document.getElementById('service-preview-container');
    const previewBox = document.getElementById('service-preview');
    const previewImg = document.getElementById('service-preview-img');
    
    if (!previewBox) return;

    document.addEventListener('mousemove', (e) => {
        // Move the preview container with the mouse slightly delayed/smoothed via css transform usually, 
        // but absolute positioning is fine here.
        if (previewContainer) {
            previewBox.style.left = e.clientX + 'px';
            previewBox.style.top = e.clientY + 'px';
        }
    });

    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const imgUrl = item.getAttribute('data-image');
            if(imgUrl) {
                previewImg.src = imgUrl;
                previewBox.classList.add('active');
            }
        });
        
        item.addEventListener('mouseleave', () => {
            previewBox.classList.remove('active');
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// Portfolio Filtering
function initPortfolioFiltering() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            items.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => item.style.display = 'none', 400);
                }
            });
        });
    });
}

// Case Study Modals
function initProjectModals() {
    const triggers = document.querySelectorAll('.project-trigger');
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close');
    
    if(!modal) return;
    
    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            // Populate modal data
            document.getElementById('modal-title').textContent = trigger.getAttribute('data-title');
            document.getElementById('modal-category').textContent = trigger.getAttribute('data-type');
            document.getElementById('modal-year').textContent = trigger.getAttribute('data-year');
            document.getElementById('modal-image').src = trigger.getAttribute('data-image');
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// WhatsApp Integration
function initWhatsAppIntegration() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const whatsapp = document.getElementById('whatsapp').value.trim();
            const service = document.getElementById('service').value;
            const budget = document.getElementById('budget').value;
            const message = document.getElementById('message').value.trim();
            
            const whatsappText = `Hello Raheem Design Studio 👋\n\nI would like to discuss a project.\n\n━━━━━━━━━━━━━━\n\n👤 Name: ${name}\n📧 Email: ${email}\n📱 WhatsApp: ${whatsapp}\n🎨 Service: ${service}\n💰 Budget: ${budget}\n\n📝 PROJECT DETAILS:\n${message}\n\n━━━━━━━━━━━━━━\n\nLooking forward to hearing from you!`;
            
            const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
            
            window.open(url, '_blank');
            
            setTimeout(() => {
                form.reset();
                btn.innerHTML = originalText;
            }, 2000);
        });
    }
}
