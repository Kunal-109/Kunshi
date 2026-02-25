// Optimized Typing Animation that starts when scrolled to section
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typing-text');
    
    if (textElement) {
        // Reduced list to most common greetings to improve performance
        const greetings = [
            "Hello",
            "Hola",
            "Bonjour",
            "Ciao",
            "你好",
            "こんにちは",
            "안녕하세요",
            "नमस्ते"
        ];
        
        let currentIndex = 0;
        let intervalId;
        let animationStarted = false;
        
        // Function to change the greeting
        function changeGreeting() {
            // Fade out
            textElement.style.opacity = 0;
            
            // After fade out, change text and fade in
            setTimeout(() => {
                // Update to next greeting
                currentIndex = (currentIndex + 1);
                
                // Check if we've reached the last greeting
                if (currentIndex >= greetings.length - 1) {
                    // Set to the last greeting
                    currentIndex = greetings.length - 1;
                    textElement.textContent = greetings[currentIndex];
                    textElement.style.opacity = 1;
                    clearInterval(intervalId);
                } else {
                    // Not the last greeting yet, continue as normal
                    textElement.textContent = greetings[currentIndex];
                    textElement.style.opacity = 1;
                }
            }, 500); // Reduced time for better performance
        }
        
        // Initialize the text element
        textElement.textContent = "";
        textElement.style.opacity = 0;
        textElement.style.transition = "opacity 0.1s ease";
        
        // Function to start the animation
        function startAnimation() {
            if (animationStarted) return;
            textElement.textContent = greetings[0];
            textElement.style.opacity = 1;
            intervalId = setInterval(changeGreeting, 200); // Slightly slower for better readability
            animationStarted = true;
        }
        
        // Optimized function to check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                rect.bottom >= 0
            );
        }
        
        // Throttled scroll handler for better performance
        let scrollTimeout;
        function throttledCheckScroll() {
            if (scrollTimeout) return;
            
            scrollTimeout = setTimeout(() => {
                if (isInViewport(textElement)) {
                    startAnimation();
                    window.removeEventListener('scroll', throttledCheckScroll);
                }
                scrollTimeout = null;
            }, 100);
        }
        
        // Add scroll event listener with throttling
        window.addEventListener('scroll', throttledCheckScroll);
        
        // Check immediately in case the element is already in viewport
        if (isInViewport(textElement)) {
            startAnimation();
        }
    }
});