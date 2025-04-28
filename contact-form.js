/**
 * Contact Form Handler
 * Manages form submission with validation and feedback
 */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');
    
    if (!contactForm) return;
    
    // Add CSS for form status messages
    const style = document.createElement('style');
    style.textContent = `
        .form-status {
            margin: 1.5rem auto 0;
            padding: 1rem;
            border-radius: 0.5rem;
            font-weight: 500;
            display: none;
            text-align: center;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            line-height: 1.5;
            font-size: 1rem;
        }
        
        .form-status.success {
            display: block;
            background-color: rgba(52, 211, 153, 0.1);
            color: #10b981;
            border: 1px solid rgba(52, 211, 153, 0.2);
        }
        
        .form-status.error {
            display: block;
            background-color: rgba(239, 68, 68, 0.1);
            color: #ef4444;
            border: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        .form-status.loading {
            display: block;
            background-color: rgba(59, 130, 246, 0.1);
            color: #3b82f6;
            border: 1px solid rgba(59, 130, 246, 0.2);
        }
    `;
    document.head.appendChild(style);
    
    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading message
        formStatus.className = 'form-status loading';
        formStatus.innerHTML = '<strong>Sending your message...</strong><br>Please wait while we process your submission.';
        
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
                formStatus.innerHTML = '<strong>Thank you for your message!</strong><br>I\'ve received your inquiry and will get back to you as soon as possible, usually within 24-48 hours.';
                
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
            formStatus.innerHTML = '<strong>Oops! Something went wrong.</strong><br>There was a problem sending your message. Please try again or contact me directly at <a href="mailto:Kunshi.agency@gmail.com">Kunshi.agency@gmail.com</a>';
        });
    });
});