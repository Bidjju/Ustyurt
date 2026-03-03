document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('photoLightbox');
    const lightboxImg = document.getElementById('photoLightboxImage');
    const lightboxCaption = document.getElementById('photoLightboxCaption');
    const closeBtn = document.getElementById('photoLightboxClose');
    const prevBtn = document.getElementById('photoPrev');
    const nextBtn = document.getElementById('photoNext');
    const galleryGrid = document.getElementById('photoGalleryGrid');

    const galleryData = [
        { src: 'images/1.jpg', caption: 'Ustyurt landscape view 1' },
        { src: 'images/2.jpg', caption: 'Ustyurt landscape view 2' },
        { src: 'images/6.jpg', caption: 'Ustyurt landscape view 6' },
        { src: 'images/27.jpg', caption: 'Ustyurt landscape view 27' },
        { src: 'images/DJI_0176_Cor.jpg', caption: 'Aerial view of the nominated property' },
        { src: 'images/cave-hero.jpg', caption: 'Ustyurt cave landscape' }
    ];

    if (galleryGrid && !galleryGrid.querySelector('.photo-gallery-item')) {
        const fragment = document.createDocumentFragment();
        galleryData.forEach(function (photo) {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'photo-gallery-item';
            button.setAttribute('data-src', photo.src);
            button.setAttribute('data-caption', photo.caption);

            const image = document.createElement('img');
            image.src = photo.src;
            image.alt = photo.caption;
            image.loading = 'lazy';
            image.decoding = 'async';

            button.appendChild(image);
            fragment.appendChild(button);
        });
        galleryGrid.appendChild(fragment);
    }

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
