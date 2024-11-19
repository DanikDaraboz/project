document.addEventListener("DOMContentLoaded", function() {
    const greetingArea = document.getElementById('greeting');
    greetingArea.textContent = getGreeting();
});
document.querySelector('#fetch-france-fact').addEventListener('click', function () {
    const contentArea = document.querySelector('#france-content');
    const notificationSound = document.getElementById('notification-sound');
    const franceFacts = [
        "France is the most visited country in the world.",
        "The Louvre is the world’s most-visited art museum, located in Paris.",
        "France is known for its wine and cheese varieties.",
        "The Eiffel Tower is one of the most iconic monuments worldwide."
    ];
    
    const randomFact = franceFacts[Math.floor(Math.random() * franceFacts.length)];
    contentArea.textContent = randomFact; 
    notificationSound.currentTime = 0; 
    notificationSound.play();
});