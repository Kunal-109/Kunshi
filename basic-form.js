// Very basic form handler with minimal code
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    // Create a thank you message div
    const thankYouDiv = document.createElement('div');
    thankYouDiv.id = 'thankYouMessage';
    thankYouDiv.style.display = 'none';
    thankYouDiv.style.backgroundColor = '#f0fff4';
    thankYouDiv.style.border = '1px solid #10b981';
    thankYouDiv.style.borderRadius = '8px';
    thankYouDiv.style.padding = '20px';
    thankYouDiv.style.margin = '20px 0';
    thankYouDiv.style.textAlign = 'center';
    
    // Add the thank you message content
    thankYouDiv.innerHTML = `
        <h3 style="color: #10b981; margin-bottom: 10px; font-size: 20px;">Thank you for your message!</h3>
        <p style="margin-bottom: 15px; line-height: 1.5;">I've received your inquiry and will get back to you as soon as possible, usually within 24-48 hours.</p>
        <a href="thank-you.html" style="display: inline-block; background-color: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">Continue to Thank You Page</a>
    `;
    
    // Insert the thank you div after the form
    form.parentNode.insertBefore(thankYouDiv, form.nextSibling);
    
    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Hide the form
        form.style.display = 'none';
        
        // Show the thank you message
        thankYouDiv.style.display = 'block';
        
        // Reset the form
        form.reset();
    });
});