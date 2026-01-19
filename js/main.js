// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true,
    offset: 50,
    easing: 'ease-out',
    mirror: false,
    anchorPlacement: 'top-bottom',
    disable: false
});

// GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ===========================
// Counter Animation
// ===========================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    
    const timer = setInterval(() => {
        step++;
        current = Math.min(current + increment, target);
        
        if (target === 2) {
            element.textContent = Math.floor(current) + '×';
        } else {
            element.textContent = Math.floor(current) + '+';
        }
        
        if (step >= steps) {
            clearInterval(timer);
            if (target === 2) {
                element.textContent = target + '×';
            } else {
                element.textContent = target + '+';
            }
        }
    }, duration / steps);
}

// Observe counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            animateCounter(entry.target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.3 });

// Wait for DOM to be ready
setTimeout(() => {
    document.querySelectorAll('.counter').forEach(counter => {
        counterObserver.observe(counter);
    });
}, 100);

// ===========================
// Typewriter Effect for Hero Title
// ===========================
function typewriterEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = 'PORTFOLIO';
        heroTitle.textContent = '';
        heroTitle.style.width = 'auto';
        heroTitle.style.display = 'inline-block';
        heroTitle.style.borderRight = '4px solid var(--primary-red)';
        heroTitle.style.paddingRight = '10px';
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
                setTimeout(() => {
                    // Blinking cursor effect
                    setInterval(() => {
                        heroTitle.style.borderRight = 
                            heroTitle.style.borderRight === 'none' 
                            ? '4px solid var(--primary-red)' 
                            : 'none';
                    }, 500);
                }, 500);
            }
        }, 120);
    }
}

// Start typewriter when page loads
window.addEventListener('load', () => {
    setTimeout(typewriterEffect, 300);
});

// ===========================
// Navigation
// ===========================
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Hero Animations
// ===========================
gsap.from('.hero-title', {
    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
});

gsap.from('.profile-photo', {
    scale: 0,
    opacity: 0,
    duration: 1.5,
    delay: 0.3,
    ease: 'elastic.out(1, 0.5)'
});

gsap.from('.stat-item', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    delay: 0.8,
    ease: 'power2.out'
});

// Floating animation for decorative circles
gsap.to('.circle-decoration', {
    y: '+=30',
    x: '+=20',
    duration: 3,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
    stagger: {
        each: 1,
        from: 'random'
    }
});

// Language letters animation
gsap.to('.letter.korean', {
    y: -20,
    duration: 6,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1
});

gsap.to('.letter.english', {
    y: -25,
    duration: 7,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
    delay: 1
});

// ===========================
// Skills Progress Bars
// ===========================
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress + '%';
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// ===========================
// Trophy Card Animations
// ===========================
gsap.utils.toArray('.trophy-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2,
        ease: 'power2.out'
    });
    
    // Hover animation
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -15,
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ===========================
// Achievement Cards Animation
// ===========================
gsap.utils.toArray('.achievement-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
        },
        rotateY: 90,
        opacity: 0,
        duration: 1,
        delay: i * 0.2,
        ease: 'back.out(1.7)'
    });
});

// Trophy icon bounce
const trophyIcons = document.querySelectorAll('.trophy-icon');
trophyIcons.forEach(icon => {
    gsap.to(icon, {
        y: -10,
        duration: 0.8,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
    });
});

// ===========================
// Timeline Animation
// ===========================
gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
        },
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
});

// Animate timeline badges
gsap.utils.toArray('.timeline-badge').forEach(badge => {
    gsap.from(badge, {
        scrollTrigger: {
            trigger: badge,
            start: 'top 80%',
        },
        scale: 0,
        rotation: 360,
        duration: 0.8,
        ease: 'back.out(1.7)'
    });
});

// ===========================
// Photo Upload Functionality
// ===========================
const photoUploads = document.querySelectorAll('.photo-upload');
photoUploads.forEach(input => {
    input.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const placeholder = input.closest('.photo-placeholder');
                placeholder.style.backgroundImage = `url('${event.target.result}')`;
                placeholder.style.backgroundSize = 'cover';
                placeholder.style.backgroundPosition = 'center';
                
                // Hide icon and label
                placeholder.querySelector('i').style.display = 'none';
                placeholder.querySelector('.upload-label').textContent = 'Change Photo';
            };
            reader.readAsDataURL(file);
        }
    });
});

// ===========================
// Profile Image Upload
// ===========================
const profileImg = document.getElementById('profileImg');
const aboutImg = document.getElementById('aboutImg');

// Profile photo upload
if (profileImg) {
    const profilePhoto = profileImg.closest('.profile-photo');
    profilePhoto.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    profileImg.src = event.target.result;
                    profileImg.style.display = 'block';
                    const placeholder = profilePhoto.querySelector('.image-placeholder');
                    if (placeholder) {
                        placeholder.style.display = 'none';
                    }
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    });
    profilePhoto.style.cursor = 'pointer';
}

// About photo upload
if (aboutImg) {
    const imageWrapper = aboutImg.closest('.image-wrapper');
    imageWrapper.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    aboutImg.src = event.target.result;
                    aboutImg.style.display = 'block';
                    const placeholder = imageWrapper.querySelector('.image-placeholder');
                    if (placeholder) {
                        placeholder.style.display = 'none';
                    }
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    });
    imageWrapper.style.cursor = 'pointer';
}

// ===========================
// Language Cards Animation
// ===========================
gsap.utils.toArray('.language-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
        },
        rotateX: 90,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'back.out(1.7)'
    });
});

// ===========================
// Project Cards Animation
// ===========================
gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2,
        ease: 'back.out(1.7)'
    });
});

// ===========================
// Contact Form Animation
// ===========================
gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 80%',
    },
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
});

gsap.from('.contact-item', {
    scrollTrigger: {
        trigger: '.contact-info-grid',
        start: 'top 80%',
    },
    x: -100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add your form submission logic here
        const formData = new FormData(contactForm);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// ===========================
// Social Links Animation
// ===========================
gsap.from('.social-link', {
    scrollTrigger: {
        trigger: '.social-links',
        start: 'top 80%',
    },
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'back.out(1.7)'
});

// Social link hover effects
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, {
            scale: 1.2,
            rotation: 360,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
    
    link.addEventListener('mouseleave', () => {
        gsap.to(link, {
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});

// ===========================
// Scroll to Top Button
// ===========================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// Parallax Effect for Sections
// ===========================
gsap.utils.toArray('section').forEach(section => {
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
        ease: 'none'
    });
});

// ===========================
// Cursor Animation (Optional)
// ===========================
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

const cursorFollower = document.createElement('div');
cursorFollower.className = 'cursor-follower';
document.body.appendChild(cursorFollower);

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

// Smooth follower animation
function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateFollower);
}
animateFollower();

// Add styles for custom cursor
const cursorStyles = document.createElement('style');
cursorStyles.textContent = `
    .custom-cursor {
        width: 10px;
        height: 10px;
        background: var(--primary-red);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: transform 0.1s ease;
    }
    
    .cursor-follower {
        width: 40px;
        height: 40px;
        border: 2px solid var(--primary-red);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
        opacity: 0.5;
    }
    
    a:hover ~ .custom-cursor,
    button:hover ~ .custom-cursor {
        transform: translate(-50%, -50%) scale(2);
    }
`;
document.head.appendChild(cursorStyles);

// ===========================
// Text Reveal Animation for Paragraphs
// ===========================
const revealText = () => {
    const textElements = document.querySelectorAll('.description-box p, .timeline-content .description');
    
    textElements.forEach((text) => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: 'top 90%',
                toggleActions: 'play none none none',
                once: true
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out'
        });
    });
};

// Call after DOM is ready
setTimeout(revealText, 100);

// ===========================
// Animated Section Titles
// ===========================
const animateSectionTitles = () => {
    const titles = document.querySelectorAll('.section-title');
    
    titles.forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true
            },
            opacity: 0,
            x: -50,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
};

// Call after DOM is ready
setTimeout(animateSectionTitles, 100);

// ===========================
// Word by Word Animation
// ===========================
function animateWords(selector) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
        const text = element.textContent.trim();
        const words = text.split(' ');
        element.innerHTML = '';
        
        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word;
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            span.style.marginRight = '0.3em';
            element.appendChild(span);
            
            gsap.to(span, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    once: true
                },
                opacity: 1,
                y: 0,
                duration: 0.4,
                delay: index * 0.08,
                ease: 'power2.out'
            });
            
            gsap.from(span, {
                y: 15,
                duration: 0.4,
                delay: index * 0.08
            });
        });
    });
}

// Apply word animation after page load
window.addEventListener('load', () => {
    setTimeout(() => {
        animateWords('.hero-description');
    }, 2500);
});

// ===========================
// Loading Animation
// ===========================
window.addEventListener('load', () => {
    gsap.to('body', {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut'
    });
});

// ===========================
// Smooth Scroll for all links
// ===========================
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

// ===========================
// Console Art
// ===========================
console.log('%c Welcome to My Portfolio! ', 'background: #E63946; color: white; font-size: 20px; padding: 10px; font-weight: bold;');
console.log('%c Built with ❤️ by CHHIM CHAKRIYA ', 'color: #6366F1; font-size: 14px;');
console.log('%c Check out the animations! ', 'color: #10B981; font-size: 12px;');

// ===========================
// ID Cards Auto Scroll with Manual Controls
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const cardsGrid = document.querySelector('.id-cards-grid');
    const cardsContainer = document.querySelector('.id-cards-scroll-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    
    if (!cardsGrid || !cardsContainer) return;
    
    const allCards = Array.from(cardsGrid.children);
    const totalCards = allCards.length;
    
    // Clone cards for infinite loop effect
    allCards.forEach(card => {
        const clone = card.cloneNode(true);
        cardsGrid.appendChild(clone);
    });
    
    let currentIndex = 0;
    const maxIndex = totalCards;
    let autoScrollInterval;
    let isTransitioning = false;
    
    // Create indicators
    function createIndicators() {
        if (!indicatorsContainer) return;
        
        indicatorsContainer.innerHTML = '';
        for (let i = 0; i < maxIndex; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('carousel-indicator');
            if (i === 0) indicator.classList.add('active');
            
            indicator.addEventListener('click', () => {
                if (isTransitioning) return;
                currentIndex = i;
                scrollCards();
                updateIndicators();
                resetAutoScroll();
            });
            
            indicatorsContainer.appendChild(indicator);
        }
    }
    
    function updateIndicators() {
        if (!indicatorsContainer) return;
        
        const indicators = indicatorsContainer.querySelectorAll('.carousel-indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex % maxIndex);
        });
    }
    
    function scrollCards() {
        if (isTransitioning) return;
        
        const cardWidth = cardsGrid.children[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(cardsGrid).gap);
        const offset = (cardWidth + gap) * currentIndex;
        cardsGrid.style.transform = `translateX(-${offset}px)`;
        updateIndicators();
    }
    
    function scrollToNext() {
        if (isTransitioning) return;
        isTransitioning = true;
        
        currentIndex++;
        
        if (currentIndex >= maxIndex) {
            cardsGrid.style.transition = 'transform 0.8s ease-in-out';
            scrollCards();
            
            setTimeout(() => {
                cardsGrid.style.transition = 'none';
                currentIndex = 0;
                scrollCards();
                
                setTimeout(() => {
                    cardsGrid.style.transition = 'transform 0.8s ease-in-out';
                    isTransitioning = false;
                }, 50);
            }, 800);
        } else {
            scrollCards();
            setTimeout(() => {
                isTransitioning = false;
            }, 800);
        }
    }
    
    function scrollToPrev() {
        if (isTransitioning) return;
        isTransitioning = true;
        
        currentIndex--;
        
        if (currentIndex < 0) {
            cardsGrid.style.transition = 'none';
            currentIndex = maxIndex;
            const cardWidth = cardsGrid.children[0].offsetWidth;
            const gap = parseFloat(getComputedStyle(cardsGrid).gap);
            const offset = (cardWidth + gap) * currentIndex;
            cardsGrid.style.transform = `translateX(-${offset}px)`;
            
            setTimeout(() => {
                cardsGrid.style.transition = 'transform 0.8s ease-in-out';
                currentIndex = maxIndex - 1;
                scrollCards();
                
                setTimeout(() => {
                    isTransitioning = false;
                }, 50);
            }, 50);
        } else {
            scrollCards();
            setTimeout(() => {
                isTransitioning = false;
            }, 800);
        }
    }
    
    // Initialize indicators
    createIndicators();
    
    // Manual controls
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Next button clicked, currentIndex:', currentIndex);
            scrollToNext();
            resetAutoScroll();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Prev button clicked, currentIndex:', currentIndex);
            scrollToPrev();
            resetAutoScroll();
        });
    }
    
    // Touch/Swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    cardsContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    cardsContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                scrollToNext();
            } else {
                scrollToPrev();
            }
            resetAutoScroll();
        }
    }
    
    // Mouse drag support (desktop)
    let isDragging = false;
    let startX = 0;
    
    cardsContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX;
        cardsContainer.style.cursor = 'grabbing';
    });
    
    cardsContainer.addEventListener('mouseleave', () => {
        isDragging = false;
        cardsContainer.style.cursor = 'grab';
    });
    
    cardsContainer.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        cardsContainer.style.cursor = 'grab';
        
        const moveX = e.pageX - startX;
        const dragThreshold = 50;
        
        if (Math.abs(moveX) > dragThreshold) {
            if (moveX < 0) {
                scrollToNext();
            } else {
                scrollToPrev();
            }
            resetAutoScroll();
        }
    });
    
    cardsContainer.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
    });
    
    // Auto scroll every 5 seconds
    function startAutoScroll() {
        autoScrollInterval = setInterval(scrollToNext, 5000);
    }
    
    function resetAutoScroll() {
        clearInterval(autoScrollInterval);
        startAutoScroll();
    }
    
    startAutoScroll();
    
    // Pause on hover
    cardsContainer.addEventListener('mouseenter', () => {
        clearInterval(autoScrollInterval);
        cardsContainer.style.cursor = 'grab';
    });
    
    cardsContainer.addEventListener('mouseleave', () => {
        if (!isDragging) {
            startAutoScroll();
            cardsContainer.style.cursor = 'default';
        }
    });
    
    // Recalculate on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            currentIndex = 0;
            cardsGrid.style.transition = 'none';
            cardsGrid.style.transform = 'translateX(0)';
            createIndicators();
            setTimeout(() => {
                cardsGrid.style.transition = 'transform 0.8s ease-in-out';
            }, 50);
        }, 250);
    });
});
