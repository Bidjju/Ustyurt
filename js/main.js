// Burger Menu Dropdown Functionality
document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    const chapterLinks = document.querySelectorAll('.chapter-link');
    const header = document.querySelector('.site-header');
    const logo = document.querySelector('.logo-img');

    console.log('Burger menu initialized');
    console.log('Burger button:', burgerBtn);
    console.log('Menu overlay:', menuOverlay);
    console.log('Chapter links count:', chapterLinks.length);

    if (!burgerBtn || !menuOverlay) {
        console.error('Burger menu elements not found!');
    }

    if (header && logo) {
        updateLogoTheme(header, logo);
        window.addEventListener('resize', function() {
            updateLogoTheme(header, logo);
        });
    }

    // Convert footer SVG <img> to inline SVG so per-page CSS color can be applied.
    inlineFooterSvgs();

    if (burgerBtn && menuOverlay) {
        // Toggle menu
        burgerBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const isActive = menuOverlay.classList.contains('active');
            
            console.log('Burger clicked, isActive:', isActive);
            
            if (isActive) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        function openMenu() {
            console.log('Opening menu');
            menuOverlay.classList.add('active');
            burgerBtn.classList.add('active');
            document.body.classList.add('menu-open');
        }

        function closeMenu() {
            console.log('Closing menu');
            menuOverlay.classList.remove('active');
            burgerBtn.classList.remove('active');
            document.body.classList.remove('menu-open');
        }

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (menuOverlay.classList.contains('active') && 
                !e.target.closest('.menu-wrapper')) {
                console.log('Clicked outside, closing menu');
                closeMenu();
            }
        });

        // Close menu when clicking a chapter link
        chapterLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                console.log('Chapter link clicked');
                closeMenu();
            });
        });

        // Close menu with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
                console.log('Escape pressed, closing menu');
                closeMenu();
            }
        });
    }

    // Smooth scroll for all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 0;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
});

async function inlineFooterSvgs() {
    const footerImages = document.querySelectorAll('img.footer-landscape-image');
    if (!footerImages.length) {
        return;
    }

    for (const img of footerImages) {
        const src = img.getAttribute('src');
        if (!src || !src.toLowerCase().endsWith('.svg')) {
            continue;
        }

        try {
            const response = await fetch(src);
            if (!response.ok) {
                continue;
            }

            const svgText = await response.text();
            const parsed = new DOMParser().parseFromString(svgText, 'image/svg+xml');
            const svg = parsed.querySelector('svg');
            if (!svg) {
                continue;
            }

            svg.classList.add('footer-ornament');
            svg.removeAttribute('width');
            svg.removeAttribute('height');

            svg.querySelectorAll('path, polygon, rect, circle, ellipse').forEach(function(shape) {
                shape.classList.add('silhouette');
                shape.removeAttribute('fill');
            });

            img.replaceWith(svg);
        } catch (error) {
            console.error('Failed to inline footer SVG:', src, error);
        }
    }
}

function updateLogoTheme(header, logo) {
    const bgColor = window.getComputedStyle(header).backgroundColor;
    const rgb = (bgColor.match(/\d+/g) || []).map(Number);
    const r = (rgb[0] || 0) / 255;
    const g = (rgb[1] || 0) / 255;
    const b = (rgb[2] || 0) / 255;
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const isLight = luminance > 0.62;
    const expectedSrc = isLight ? 'images/Logo.svg' : 'images/Logo-white.svg';

    header.classList.toggle('nav-light', isLight);
    header.classList.toggle('nav-dark', !isLight);
    if (!logo.getAttribute('src') || !logo.getAttribute('src').endsWith(expectedSrc.replace('images/', ''))) {
        logo.setAttribute('src', expectedSrc);
    }
}
