const stars = document.querySelectorAll('.star');
const ratingValueDisplay = document.getElementById('rating-value');

function clearSelections() {
    stars.forEach(star => {
        star.classList.remove('selected');
    });
}

function updateRatingDisplay(ratingValue) {
    clearSelections();
    for (let i = 0; i < ratingValue; i++) {
        stars[i].classList.add('selected');
    }
    ratingValueDisplay.textContent = ratingValue;
    localStorage.setItem('userRating', ratingValue);
}

window.onload = function() {
    const savedRating = localStorage.getItem('userRating');
    if (savedRating) {
        updateRatingDisplay(savedRating);
    }
};

stars.forEach(star => {
    star.addEventListener('click', function() {
        const ratingValue = this.getAttribute('data-value');
        updateRatingDisplay(ratingValue);
    });
});
