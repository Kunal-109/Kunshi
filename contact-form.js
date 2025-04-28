/**
 * Contact Form Handler
 * Manages form submission with validation and feedback
 */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');
    
    if (!contactForm) return;
    
    // We're now using inline styles for form status messages
    
    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading message with inline styles
        formStatus.className = 'form-status loading';
        formStatus.style.display = 'block';
        formStatus.style.width = '100%';
        formStatus.style.textAlign = 'center';
        formStatus.style.margin = '20px auto 0';
        formStatus.style.padding = '15px';
        formStatus.style.borderRadius = '8px';
        formStatus.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
        formStatus.style.color = '#3b82f6';
        formStatus.style.border = '1px solid rgba(59, 130, 246, 0.2)';
        formStatus.innerHTML = '<strong style="display: block; margin-bottom: 5px; font-size: 16px;">Sending your message...</strong><span>Please wait while we process your submission.</span>';
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Send form data using fetch
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Success - clear form and show success message
                contactForm.reset();
                formStatus.className = 'form-status success';
                formStatus.style.display = 'block';
                formStatus.style.width = '100%';
                formStatus.style.textAlign = 'center';
                formStatus.style.margin = '20px auto 0';
                formStatus.style.padding = '15px';
                formStatus.style.borderRadius = '8px';
                formStatus.style.backgroundColor = 'rgba(52, 211, 153, 0.1)';
                formStatus.style.color = '#10b981';
                formStatus.style.border = '1px solid rgba(52, 211, 153, 0.2)';
                formStatus.innerHTML = '<strong style="display: block; margin-bottom: 5px; font-size: 16px;">Thank you for your message!</strong><span>I\'ve received your inquiry and will get back to you as soon as possible, usually within 24-48 hours.</span>';
                
                // Redirect to thank you page after a delay (3.5 seconds)
                setTimeout(() => {
                    window.location.href = formData.get('_next') || '/thank-you';
                }, 3500);
            } else {
                // Error - show error message
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            formStatus.className = 'form-status error';
            formStatus.style.display = 'block';
            formStatus.style.width = '100%';
            formStatus.style.textAlign = 'center';
            formStatus.style.margin = '20px auto 0';
            formStatus.style.padding = '15px';
            formStatus.style.borderRadius = '8px';
            formStatus.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
            formStatus.style.color = '#ef4444';
            formStatus.style.border = '1px solid rgba(239, 68, 68, 0.2)';
            formStatus.innerHTML = '<strong style="display: block; margin-bottom: 5px; font-size: 16px;">Oops! Something went wrong.</strong><span>There was a problem sending your message. Please try again or contact me directly at <a href="mailto:Kunshi.agency@gmail.com" style="color: inherit; text-decoration: underline;">Kunshi.agency@gmail.com</a></span>';
        });
    });
});