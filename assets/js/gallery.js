document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    
    let currentIndex = 0;
    const images = [];
    
    galleryItems.forEach(function(item, index) {
        const img = item.querySelector('img');
        const title = item.querySelector('.gallery-item-title');
        
        images.push({
            src: img ? img.src : '',
            alt: img ? img.alt : title ? title.textContent : 'Gallery image',
            title: title ? title.textContent : ''
        });
        
        item.addEventListener('click', function() {
            openLightbox(index);
        });
        
        item.setAttribute('role', 'button');
        item.setAttribute('tabindex', '0');
        
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
            }
        });
    });
    
    function openLightbox(index) {
        currentIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function updateLightbox() {
        const image = images[currentIndex];
        
        if (image.src) {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
        }
        
        lightboxCaption.textContent = image.title;
    }
    
    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox();
    }
    
    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightbox();
    }
    
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrev);
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNext);
    }
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showPrev();
        } else if (e.key === 'ArrowRight') {
            showNext();
        }
    });
});
