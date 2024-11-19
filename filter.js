const sortAscButton = document.getElementById('sort-asc');
        const sortDescButton = document.getElementById('sort-desc');
        const hotelList = document.getElementById('hotel-list');
        const hotelCards = Array.from(hotelList.getElementsByClassName('card'));

        // Функции для сортировки
        const sortByRatingAsc = () => {
            hotelCards.sort((a, b) => {
                return parseFloat(a.dataset.rating) - parseFloat(b.dataset.rating);
            });
            hotelCards.forEach(card => hotelList.appendChild(card));
            localStorage.setItem('sortOrder', 'asc'); // Сохраняем в localStorage
        };

        const sortByRatingDesc = () => {
            hotelCards.sort((a, b) => {
                return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
            });
            hotelCards.forEach(card => hotelList.appendChild(card));
            localStorage.setItem('sortOrder', 'desc'); // Сохраняем в localStorage
        };

        // Восстанавливаем сортировку при загрузке страницы
        const savedSortOrder = localStorage.getItem('sortOrder');
        if (savedSortOrder === 'asc') {
            sortByRatingAsc();
        } else if (savedSortOrder === 'desc') {
            sortByRatingDesc();
        }

        // Добавляем обработчики событий для кнопок
        sortAscButton.addEventListener('click', sortByRatingAsc);
        sortDescButton.addEventListener('click', sortByRatingDesc);