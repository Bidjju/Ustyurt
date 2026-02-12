// Burger Menu Dropdown Functionality
document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    const chapterLinks = document.querySelectorAll('.chapter-link');

    console.log('Burger menu initialized');
    console.log('Burger button:', burgerBtn);
    console.log('Menu overlay:', menuOverlay);
    console.log('Chapter links count:', chapterLinks.length);

    if (!burgerBtn || !menuOverlay) {
        console.error('Burger menu elements not found!');
        return;
    }

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
    }

    function closeMenu() {
        console.log('Closing menu');
        menuOverlay.classList.remove('active');
        burgerBtn.classList.remove('active');
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
