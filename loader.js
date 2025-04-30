/**
 * Website Preloader and Logo Animation
 * Shows a loading animation until the website is fully loaded
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get the preloader element
    const preloader = document.getElementById('preloader');
    
    // Hide preloader when page is loaded
    window.addEventListener('load', function() {
        // Add the fade-out class to start the transition
        preloader.classList.add('fade-out');
        
        // Remove the preloader from the DOM after the transition
        setTimeout(function() {
            preloader.style.display = 'none';
            
            // Add animation class to logo after preloader is gone
            const logoImg = document.querySelector('.logo-img');
            if (logoImg) {
                logoImg.classList.add('logo-animated');
            }
            
            // Add animation to logo text
            const logoText = document.querySelector('.logo-text');
            if (logoText) {
                logoText.classList.add('logo-text-animated');
            }
            
            // Add animation to footer logo
            const footerLogo = document.querySelector('.footer-logo-img');
            if (footerLogo) {
                footerLogo.classList.add('logo-animated');
            }
        }, 500); // Match this to the CSS transition time
    });
    
    // If the page takes too long to load, hide the preloader after 5 seconds
    setTimeout(function() {
        if (preloader.style.display !== 'none') {
            preloader.classList.add('fade-out');
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 5000);
});