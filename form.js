const subscribeButton = document.getElementById('subscribeButton');
const popupForm = document.getElementById('popupForm');
const closePopup = document.getElementById('closePopup');

subscribeButton.addEventListener('click', () => {
  popupForm.style.display = 'block';
});

closePopup.addEventListener('click', () => {
  popupForm.style.display = 'none';
    alert('Подписка выполнена')
});
