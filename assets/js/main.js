document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinksItems = navLinks.querySelectorAll('a');

    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Animate hamburger
        const spans = menuToggle.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Handle keyboard accessibility for menu toggle
    menuToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            menuToggle.click();
        }
    });

    // Close menu when clicking a link
    navLinksItems.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Contact form handling with Formspree
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            // Formspree handles submission, but we can add visual feedback
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Formspree will redirect on success, but we can handle errors
            contactForm.addEventListener('formspree:success', function() {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
            
            contactForm.addEventListener('formspree:error', function() {
                alert('Sorry, there was an error sending your message. Please try again or email us directly.');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }

    // Gallery item click handling
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // In a real implementation, this would open a lightbox
            console.log('Gallery item clicked');
        });
        
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                console.log('Gallery item clicked');
            }
        });
    });

    // Hero Slider
    const slides = document.querySelectorAll('.hero .slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;
    let slideInterval;

    if (slides.length > 0) {
        function showSlide(index) {
            slides.forEach(function(slide) {
                slide.classList.remove('active');
            });
            dots.forEach(function(dot) {
                dot.classList.remove('active');
            });
            
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }

        function nextSlide() {
            let next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }

        function prevSlide() {
            let prev = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prev);
        }

        function startSlider() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        function stopSlider() {
            clearInterval(slideInterval);
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                stopSlider();
                nextSlide();
                startSlider();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                stopSlider();
                prevSlide();
                startSlider();
            });
        }

        dots.forEach(function(dot, index) {
            dot.addEventListener('click', function() {
                stopSlider();
                showSlide(index);
                startSlider();
            });
        });

        startSlider();
    }
});
