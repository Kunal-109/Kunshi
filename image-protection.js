/**
 * Image Protection Script - Optimized
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
});