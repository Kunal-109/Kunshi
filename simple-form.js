// Simple form handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Create a notification div if it doesn't exist
        let notification = document.getElementById('form-notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'form-notification';
            notification.style.width = '100%';
            notification.style.textAlign = 'center';
            notification.style.margin = '20px auto 0';
            notification.style.padding = '15px';
            notification.style.borderRadius = '8px';
            notification.style.fontWeight = '500';
            notification.style.display = 'none';
            
            // Insert after the submit button
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.parentNode.insertBefore(notification, submitButton.nextSibling);
        }
        
        // Show loading message
        notification.style.display = 'block';
        notification.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
        notification.style.color = '#3b82f6';
        notification.style.border = '1px solid rgba(59, 130, 246, 0.2)';
        notification.innerHTML = '<div style="font-weight:bold; margin-bottom:5px; font-size:16px;">Sending your message...</div><div>Please wait while we process your submission.</div>';
        
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
                // Success
                contactForm.reset();
                notification.style.backgroundColor = 'rgba(52, 211, 153, 0.1)';
                notification.style.color = '#10b981';
                notification.style.border = '1px solid rgba(52, 211, 153, 0.2)';
                notification.innerHTML = '<div style="font-weight:bold; margin-bottom:5px; font-size:16px;">Thank you for your message!</div><div>I\'ve received your inquiry and will get back to you as soon as possible, usually within 24-48 hours.</div>';
                
                // Redirect after delay
                setTimeout(() => {
                    window.location.href = '/thank-you';
                }, 3000);
            } else {
                // Error
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            notification.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
            notification.style.color = '#ef4444';
            notification.style.border = '1px solid rgba(239, 68, 68, 0.2)';
            notification.innerHTML = '<div style="font-weight:bold; margin-bottom:5px; font-size:16px;">Oops! Something went wrong.</div><div>There was a problem sending your message. Please try again or contact me directly at <a href="mailto:Kunshi.agency@gmail.com" style="color:inherit; text-decoration:underline;">Kunshi.agency@gmail.com</a></div>';
        });
    });
});