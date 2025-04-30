/**
 * Optimized Smooth Navigation Script
 * Handles smooth scrolling for anchor links
 */

document.addEventListener('DOMContentLoaded', function() {
    // Calculate header height once for better performance
    const headerHeight = document.querySelector('header')?.offsetHeight || 80;
    
    // Function to handle smooth scrolling
    function smoothScroll(targetId) {
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update URL hash without jumping
            history.pushState(null, null, '#' + targetId);
        }
    }
    
    // Handle anchor link clicks
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.getAttribute('href') !== '#') { // Skip empty anchors
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                smoothScroll(targetId);
            });
        }
    });
    
    // Handle initial hash in URL
    if (window.location.hash && window.location.hash !== '#') {
        const targetId = window.location.hash.substring(1);
        // Delay scrolling slightly to ensure page is fully loaded
        setTimeout(() => smoothScroll(targetId), 100);
    }
});