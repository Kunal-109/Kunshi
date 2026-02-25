// Creative Studio - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Greeting animation removed - now handled by typing-animation.js

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Intersection Observer for animations
    const animateElements = document.querySelectorAll('.section-header, .about-container, .skills-container, .featured-gallery, .contact-container');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    // Separate observer for counter animation
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounters();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 }); // Higher threshold ensures section is more visible
        
        counterObserver.observe(statsSection);
    }
    
    // Counter animation function
    function startCounters() {
        const counters = document.querySelectorAll('.counter-value');
        const duration = 2000; // Total animation duration in milliseconds (2 seconds)
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const suffix = counter.getAttribute('data-suffix') || '';
            let count = 0;
            const startTime = Date.now();
            
            // Calculate frames needed for smooth animation
            const frameDuration = 1000 / 60; // 60fps
            
            const updateCount = () => {
                const currentTime = Date.now();
                const elapsedTime = currentTime - startTime;
                
                if (elapsedTime < duration) {
                    // Calculate progress (0 to 1)
                    const progress = elapsedTime / duration;
                    
                    // Use easeOutQuad for smoother animation
                    const easedProgress = 1 - (1 - progress) * (1 - progress);
                    
                    // Calculate current count based on progress
                    count = Math.floor(target * easedProgress);
                    counter.innerText = count + suffix;
                    
                    // Request next frame
                    requestAnimationFrame(updateCount);
                } else {
                    // Ensure we end with the exact target value
                    counter.innerText = target + suffix;
                }
            };
            
            // Start the animation
            requestAnimationFrame(updateCount);
        });
    }
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Portfolio page functionality
    const isPortfolioPage = document.querySelector('.portfolio-page');
    
    if (isPortfolioPage) {
        // Portfolio filters
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filter portfolio items
                portfolioItems.forEach(item => {
                    if (filterValue === 'all') {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 100);
                    } else if (item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
        
        // Project modals
        const modal = document.getElementById('projectModal');
        const modalBody = document.getElementById('modalBody');
        const closeModal = document.querySelector('.close-modal');
        const portfolioLinks = document.querySelectorAll('.portfolio-link');
        
        // Project data - would normally be loaded from a database or API
        const projectData = {
            project1: {
                title: "Horizon Coffee Co. Branding",
                category: "Branding",
                client: "Horizon Coffee Co.",
                year: "2024",
                description: "A complete brand identity project for a specialty coffee roaster, featuring logo design, packaging, stationery, and digital assets.",
                challenge: "Create a distinctive identity that communicates the premium quality and artisanal approach while standing out in the crowded coffee market.",
                solution: "Developed a minimalist yet warm brand system with earthy tones and natural textures, complemented by premium typography and custom illustrations of coffee origins.",
                images: ["https://via.placeholder.com/900x600", "https://via.placeholder.com/900x600", "https://via.placeholder.com/900x600"]
            },
            project2: {
                title: "Evergreen Fitness Branding",
                category: "Branding",
                client: "Evergreen Fitness",
                year: "2024",
                description: "A wellness brand identity for a fitness studio focused on holistic health and nature-inspired workouts.",
                challenge: "Craft a brand that communicates strength and wellness while maintaining a calm, inviting atmosphere distinct from high-intensity gym aesthetics.",
                solution: "Created a balanced identity with organic shapes, a refreshing color palette, and typography that projects both strength and serenity.",
                images: ["https://via.placeholder.com/900x600", "https://via.placeholder.com/900x600"]
            },
            project3: {
                title: "Artisan Bakery Branding",
                category: "Branding",
                client: "The Daily Loaf",
                year: "2023",
                description: "A comprehensive brand identity for an artisanal bakery specializing in sourdough bread and pastries.",
                challenge: "Balance traditional craftsmanship with contemporary appeal to attract both bread enthusiasts and casual customers.",
                solution: "Created a warm, rustic identity with hand-drawn elements and a color palette inspired by wheat fields and fresh-baked bread.",
                images: ["https://via.placeholder.com/900x600", "https://via.placeholder.com/900x600"]
            },
            project4: {
                title: "Summer Festival Poster",
                category: "Poster Design",
                client: "City Arts Committee",
                year: "2024",
                description: "Promotional poster design for an annual summer music and arts festival.",
                challenge: "Capture the energy and diversity of a multi-day festival while clearly communicating essential event information.",
                solution: "Created a vibrant, dynamic composition with bold typography and custom illustrations representing different art forms.",
                images: ["https://via.placeholder.com/900x600"]
            },
            // Add more project data as needed for other portfolio items
        };
        
        // Open modal with project data
        portfolioLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const projectId = this.getAttribute('data-modal');
                const project = projectData[projectId];
                
                if (project) {
                    // Create modal content
                    let modalContent = `
                        <div class="project-modal-header">
                            <h2>${project.title}</h2>
                            <div class="project-category">${project.category}</div>
                        </div>
                        <div class="project-images">
                    `;
                    
                    // Add image slider/gallery
                    project.images.forEach(img => {
                        modalContent += `<div class="project-image"><img src="${img}" alt="${project.title}"></div>`;
                    });
                    
                    modalContent += `
                        </div>
                        <div class="project-details">
                            <div class="project-info">
                                <div class="info-item">
                                    <h4>Client</h4>
                                    <p>${project.client}</p>
                                </div>
                                <div class="info-item">
                                    <h4>Year</h4>
                                    <p>${project.year}</p>
                                </div>
                                <div class="info-item">
                                    <h4>Category</h4>
                                    <p>${project.category}</p>
                                </div>
                            </div>
                            <div class="project-description">
                                <h3>Project Overview</h3>
                                <p>${project.description}</p>
                                <h3>Challenge</h3>
                                <p>${project.challenge}</p>
                                <h3>Solution</h3>
                                <p>${project.solution}</p>
                            </div>
                        </div>
                    `;
                    
                    // Insert content and show modal
                    modalBody.innerHTML = modalContent;
                    modal.style.display = 'flex';
                    document.body.style.overflow = 'hidden'; // Prevent scrolling
                    
                    // Add simple image slider functionality if multiple images
                    if (project.images.length > 1) {
                        const projectImages = document.querySelector('.project-images');
                        const imgElements = projectImages.querySelectorAll('.project-image');
                        let currentImg = 0;
                        
                        // Create navigation buttons
                        const prevBtn = document.createElement('button');
                        prevBtn.className = 'slide-btn prev-btn';
                        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
                        
                        const nextBtn = document.createElement('button');
                        nextBtn.className = 'slide-btn next-btn';
                        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
                        
                        projectImages.appendChild(prevBtn);
                        projectImages.appendChild(nextBtn);
                        
                        // Show first image
                        imgElements.forEach((img, index) => {
                            if (index !== currentImg) img.style.display = 'none';
                        });
                        
                        // Add event listeners
                        prevBtn.addEventListener('click', () => {
                            imgElements[currentImg].style.display = 'none';
                            currentImg = (currentImg - 1 + imgElements.length) % imgElements.length;
                            imgElements[currentImg].style.display = 'block';
                        });
                        
                        nextBtn.addEventListener('click', () => {
                            imgElements[currentImg].style.display = 'none';
                            currentImg = (currentImg + 1) % imgElements.length;
                            imgElements[currentImg].style.display = 'block';
                        });
                    }
                }
            });
        });
        
        // Close modal
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            });
        }
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Normally would send data to a server here
            // For demo purposes, just show a success message
            contactForm.innerHTML = `
                <div class="form-success">
                    <div class="success-icon"><i class="fas fa-check-circle"></i></div>
                    <h3>Thank you for your message!</h3>
                    <p>I'll get back to you as soon as possible.</p>
                </div>
            `;
        });
    }
    
    // Add smooth scrolling to internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.querySelector('i').classList.remove('fa-times');
                    menuToggle.querySelector('i').classList.add('fa-bars');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

