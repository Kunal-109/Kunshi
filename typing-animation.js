// Simple Word Display Animation
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typing-text');
    
    if (textElement) {
        const greetings = [
            "Hello",
            "Hola",
            "Bonjour",
            "Hallo",
            "Ciao",
            "你好",
            "こんにちは",
            "안녕하세요",
            "مرحبا",
            "Olá",
            "Здравствуйте",
            "হ্যালো",
            "سلام",
            "Merhaba",
            "Jambo",
            "สวัสดี",
            "Γειά σου",
            "שלום",
            "Xin chào",
            "नमस्ते"
        ];
        
        let currentIndex = 0;
        
        // Variable to store the interval ID so we can clear it later
        let intervalId;
        
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
                    // Set to the last greeting ("नमस्ते")
                    currentIndex = greetings.length - 1;
                    textElement.textContent = greetings[currentIndex];
                    
                    // Fade in the last greeting
                    textElement.style.opacity = 1;
                    
                    // Stop the interval
                    clearInterval(intervalId);
                } else {
                    // Not the last greeting yet, continue as normal
                    textElement.textContent = greetings[currentIndex];
                    
                    // Fade in
                    textElement.style.opacity = 1;
                }
            }, 1000); // Time for fade out
        }
        
        // Set initial greeting
        textElement.textContent = greetings[0];
        textElement.style.opacity = 1;
        
        // Add transition for smooth fade effect
        textElement.style.transition = "opacity 0.1s ease";
        
        // Change greeting every 2 seconds (2000ms)
        // Note: Adjusted from 250ms to 2000ms to match the comment and provide smoother transitions
        intervalId = setInterval(changeGreeting, 180);
    }
});