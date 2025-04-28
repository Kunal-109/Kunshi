/**
 * Image Protection Script
 * Prevents common methods of image downloading
 */

document.addEventListener('DOMContentLoaded', function() {
    // Prevent right-click on images
    document.addEventListener('contextmenu', function(e) {
        if (e.target.nodeName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });

    // Prevent drag and drop of images
    document.addEventListener('dragstart', function(e) {
        if (e.target.nodeName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });

    // Prevent keyboard shortcuts for saving images
    document.addEventListener('keydown', function(e) {
        // Prevent Ctrl+S, Ctrl+U, F12
        if ((e.ctrlKey && (e.keyCode === 83 || e.keyCode === 85)) || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
    });

    // Add invisible overlay on images to make them harder to download
    const addOverlays = function() {
        const images = document.querySelectorAll('.portfolio-image img, .gallery-item img, .hero-image img, .about-image img');
        
        images.forEach(function(img) {
            // Only add overlay if it doesn't already have one
            if (!img.parentNode.querySelector('.image-overlay')) {
                const overlay = document.createElement('div');
                overlay.className = 'image-overlay';
                overlay.style.position = 'absolute';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.zIndex = '10';
                
                // Make sure parent has position relative
                if (window.getComputedStyle(img.parentNode).position !== 'relative') {
                    img.parentNode.style.position = 'relative';
                }
                
                img.parentNode.appendChild(overlay);
            }
        });
    };

    // Add overlays when page loads
    addOverlays();
    
    // Add overlays again when portfolio items are generated
    if (typeof generatePortfolioItems === 'function') {
        const originalGenerate = generatePortfolioItems;
        generatePortfolioItems = function() {
            originalGenerate();
            setTimeout(addOverlays, 500);
        };
    }
});