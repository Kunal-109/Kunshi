// Greeting Animation Script
document.addEventListener('DOMContentLoaded', function() {
    console.log("Greeting animation script loaded");
    
    // Greeting animation
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        console.log("Greeting element found:", greetingElement);
        
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
            "হ্যালো / নমস্কার",
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
        
        // Function to animate greeting change
        function changeGreeting() {
            console.log("Changing greeting to:", greetings[(currentIndex + 1) % greetings.length]);
            
            // Fade out current greeting
            greetingElement.style.animation = 'fadeOut 0.5s forwards';
            
            // After fade out, change text and fade in
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % greetings.length;
                greetingElement.textContent = greetings[currentIndex];
                greetingElement.style.animation = 'fadeIn 0.5s forwards';
            }, 500);
        }
        
        // Start animation cycle
        console.log("Starting greeting animation cycle");
        setInterval(changeGreeting, 2500); // Change every 2.5 seconds
    } else {
        console.error("Greeting element not found!");
    }
});