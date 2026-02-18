document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('photoLightbox');
    const lightboxImg = document.getElementById('photoLightboxImage');
    const lightboxCaption = document.getElementById('photoLightboxCaption');
    const closeBtn = document.getElementById('photoLightboxClose');
    const prevBtn = document.getElementById('photoPrev');
    const nextBtn = document.getElementById('photoNext');
    const items = Array.from(document.querySelectorAll('.photo-gallery-item'));

    if (!lightbox || !items.length) {
        return;
    }

    let currentIndex = 0;

    function renderPhoto(index) {
        const item = items[index];
        const src = item.getAttribute('data-src') || '';
        const caption = item.getAttribute('data-caption') || '';
        const img = item.querySelector('img');
        const alt = img ? img.getAttribute('alt') : caption;

        lightboxImg.src = src;
        lightboxImg.alt = alt || '';
        lightboxCaption.textContent = caption;
    }

    function openLightbox(index) {
        currentIndex = index;
        renderPhoto(currentIndex);
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % items.length;
        renderPhoto(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        renderPhoto(currentIndex);
    }

    items.forEach(function (item, index) {
        item.addEventListener('click', function () {
            openLightbox(index);
        });
    });

    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (!lightbox.classList.contains('active')) {
            return;
        }

        if (event.key === 'Escape') {
            closeLightbox();
        }

        if (event.key === 'ArrowRight') {
            showNext();
        }

        if (event.key === 'ArrowLeft') {
            showPrev();
        }
    });
});
