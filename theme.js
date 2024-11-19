const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Проверяем, есть ли сохраненная тема в Local Storage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme'); // Применяем темную тему
    themeToggleButton.textContent = 'Светлая тема'; // Меняем текст кнопки
} else {
    themeToggleButton.textContent = 'Темная тема'; // Начальное состояние кнопки
}

// Обработчик нажатия на кнопку смены темы
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme'); // Переключаем тему

    // Сохраняем состояние темы в Local Storage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark'); // Сохраняем темную тему
        themeToggleButton.textContent = 'Светлая тема'; // Меняем текст кнопки
    } else {
        localStorage.setItem('theme', 'light'); // Сохраняем светлую тему
        themeToggleButton.textContent = 'Темная тема'; // Меняем текст кнопки
    }
});
