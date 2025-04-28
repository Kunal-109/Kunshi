// Simple form handler without Formspree
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
            notification.style.boxSizing = 'border-box';
            notification.style.wordWrap = 'break-word';
            notification.style.whiteSpace = 'normal';
            notification.style.lineHeight = '1.5';
            
            // Insert after the submit button
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const spacerDiv = submitButton.nextElementSibling;
            if (spacerDiv) {
                spacerDiv.parentNode.insertBefore(notification, spacerDiv);
            } else {
                submitButton.parentNode.insertBefore(notification, submitButton.nextSibling);
            }
        }
        
        // Show loading message
        notification.style.display = 'block';
        notification.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
        notification.style.color = '#3b82f6';
        notification.style.border = '1px solid rgba(59, 130, 246, 0.2)';
        notification.innerHTML = '<div style="font-weight:bold; margin-bottom:5px; font-size:16px;">Sending your message...</div><div style="white-space:normal; word-wrap:break-word;">Please wait while we process your submission.</div>';
        
        // Simulate form submission (since we're not using Formspree)
        setTimeout(() => {
            // Success
            contactForm.reset();
            notification.style.backgroundColor = 'rgba(52, 211, 153, 0.1)';
            notification.style.color = '#10b981';
            notification.style.border = '1px solid rgba(52, 211, 153, 0.2)';
            notification.innerHTML = '<div style="font-weight:bold; margin-bottom:5px; font-size:16px;">Thank you for your message!</div><div style="white-space:normal; word-wrap:break-word;">I\'ve received your inquiry and will get back to you as soon as possible, usually within 24-48 hours.</div>';
            
            // Redirect after delay
            setTimeout(() => {
                window.location.href = 'thank-you.html';
            }, 3000);
        }, 1500);
    });
});