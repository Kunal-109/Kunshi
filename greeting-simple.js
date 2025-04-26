// Simple Greeting Animation
document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    
    if (greetingElement) {
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
        
        // Simple text change without animation
        function changeGreeting() {
            currentIndex = (currentIndex + 1) % greetings.length;
            greetingElement.textContent = greetings[currentIndex];
        }
        
        // Change greeting every 2.5 seconds
        setInterval(changeGreeting, 2500);
    }
});