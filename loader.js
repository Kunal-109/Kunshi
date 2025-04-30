/**
 * Enhanced Website Preloader and Logo Animation
 * Shows an attractive loading animation until the website is fully loaded
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get the preloader element
    const preloader = document.getElementById('preloader');
    const body = document.body;
    
    // Prevent scrolling while preloader is active
    body.style.overflow = 'hidden';
    
    // Add loading percentage to the loader text (simulated)
    const loaderText = document.querySelector('.loader-text');
    let loadingProgress = 0;
    const progressInterval = setInterval(function() {
        loadingProgress += Math.floor(Math.random() * 10) + 1;
        if (loadingProgress > 100) loadingProgress = 100;
        
        if (loaderText) {
            loaderText.textContent = `LOADING ${loadingProgress}%`;
        }
        
        if (loadingProgress === 100) {
            clearInterval(progressInterval);
            if (loaderText) loaderText.textContent = 'READY!';
            
            // Small delay after reaching 100% before fading out
            setTimeout(function() {
                fadeOutPreloader();
            }, 500);
        }
    }, 200);
    
    // Function to fade out the preloader
    function fadeOutPreloader() {
        preloader.classList.add('fade-out');
        
        // Remove the preloader from the DOM after the transition
        setTimeout(function() {
            preloader.style.display = 'none';
            body.style.overflow = ''; // Restore scrolling
            
            // Animate logo elements with slight delay between them
            setTimeout(function() {
                // Add animation class to logo after preloader is gone
                const logoImg = document.querySelector('.logo-img');
                if (logoImg) {
                    logoImg.classList.add('logo-animated');
                }
                
                // Add animation to logo text with slight delay
                setTimeout(function() {
                    const logoText = document.querySelector('.logo-text');
                    if (logoText) {
                        logoText.classList.add('logo-text-animated');
                    }
                }, 200);
                
                // Add animation to footer logo
                const footerLogo = document.querySelector('.footer-logo-img');
                if (footerLogo) {
                    footerLogo.classList.add('logo-animated');
                }
            }, 100);
            
        }, 800); // Match this to the CSS transition time
    }
    
    // Hide preloader when page is loaded
    window.addEventListener('load', function() {
        // If the progress interval is still running, let it complete naturally
        if (loadingProgress < 100) {
            loadingProgress = 90; // Jump to near completion
        }
    });
    
    // If the page takes too long to load, hide the preloader after 5 seconds
    setTimeout(function() {
        if (preloader.style.display !== 'none') {
            clearInterval(progressInterval);
            if (loaderText) loaderText.textContent = 'READY!';
            setTimeout(function() {
                fadeOutPreloader();
            }, 300);
        }
    }, 5000);
    
    // Add some particle effects to the preloader
    createParticles();
});

// Function to create floating particles in the preloader
function createParticles() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    
    // Create particle container
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.position = 'absolute';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.overflow = 'hidden';
    particleContainer.style.pointerEvents = 'none';
    particleContainer.style.zIndex = '1';
    
    preloader.appendChild(particleContainer);
    
    // Create particles
    for (let i = 0; i < 20; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    
    // Random size between 5px and 15px
    const size = Math.random() * 10 + 5;
    
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    // Random opacity
    const opacity = Math.random() * 0.5 + 0.1;
    
    // Random animation duration
    const duration = Math.random() * 10 + 10;
    
    // Style the particle
    particle.style.position = 'absolute';
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.borderRadius = '50%';
    particle.style.backgroundColor = '#ED557B';
    particle.style.opacity = opacity.toString();
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.transform = 'scale(0)';
    particle.style.animation = `floatParticle ${duration}s linear infinite`;
    
    // Add keyframes for this specific particle
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% {
                transform: translate(0, 0) scale(0);
                opacity: 0;
            }
            10% {
                transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) scale(1);
                opacity: ${opacity};
            }
            90% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0.5);
                opacity: ${opacity / 2};
            }
            100% {
                transform: translate(${Math.random() * 150 - 75}px, ${Math.random() * 150 - 75}px) scale(0);
                opacity: 0;
            }
        }
    `;
    
    document.head.appendChild(style);
    container.appendChild(particle);
}