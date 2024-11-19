document.addEventListener("DOMContentLoaded", function() {
    function displayGreeting() {
        const greetingDiv = document.getElementById("greeting");
        const currentHour = new Date().getHours();
        let greetingText;

        if (currentHour >= 5 && currentHour < 12) {
            greetingText = "Доброе утро!";
        } else if (currentHour >= 12 && currentHour < 17) {
            greetingText = "Добрый день!";
        } else if (currentHour >= 17 && currentHour < 21) {
            greetingText = "Добрый вечер!";
        } else {
            greetingText = "Доброй ночи!";
        }

        greetingDiv.textContent = greetingText;
    }

    displayGreeting();
});