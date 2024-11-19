document.querySelector('#fetch-japan-fact').addEventListener('click', function () {
    const contentArea = document.querySelector('#japan-content');
    const notificationSound = document.getElementById('notification-sound');
    const japanFacts = [
        "Japan has more than 6,800 islands.",
        "Mount Fuji is the highest mountain in Japan.",
        "Tokyo is the world’s most populous metropolitan area.",
        "Japanese trains are among the most punctual in the world."
    ];
    
    const randomFact = japanFacts[Math.floor(Math.random() * japanFacts.length)];
    contentArea.textContent = randomFact;
    notificationSound.currentTime = 0; 
    notificationSound.play();
});
