/**
 * Smooth Navigation Script
 * Handles clean URL navigation without hash fragments
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get current path
    const currentPath = window.location.pathname;
    
    // Handle section navigation
    function navigateToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        } else if (currentPath !== '/') {
            // If we're not on the homepage, redirect to the homepage with the section
            window.location.href = '/' + (sectionId ? '?section=' + sectionId : '');
        }
    }
    
    // Check for section parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const sectionParam = urlParams.get('section');
    
    if (sectionParam) {
        // Remove the query parameter from URL without reloading
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
        
        // Navigate to the section after a short delay to allow page to load
        setTimeout(() => {
            navigateToSection(sectionParam);
        }, 100);
    }
    
    // Handle clean URL navigation
    document.querySelectorAll('a[href^="/"]').forEach(link => {
        const href = link.getAttribute('href');
        
        // Skip links that are just the root or have additional path segments
        if (href === '/' || href.indexOf('/', 1) !== -1) {
            return;
        }
        
        // For section links like /about, /skills, etc.
        const sectionId = href.substring(1); // Remove the leading slash
        
        link.addEventListener('click', function(e) {
            // If we're on the homepage, scroll to the section
            if (currentPath === '/' || currentPath === '/index.html') {
                e.preventDefault();
                navigateToSection(sectionId);
            }
            // Otherwise, the default behavior will navigate to the homepage with the section parameter
        });
    });
});