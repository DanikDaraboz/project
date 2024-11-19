document.addEventListener('DOMContentLoaded', function () {
  const formElement = document.getElementById('myForm');
  const logoutButton = document.getElementById('logout'); // Кнопка выхода

  if (formElement) {
      formElement.addEventListener('submit', function (e) {
          e.preventDefault();

          let email = document.getElementById('email').value;
          let password = document.getElementById('password').value;
          let confirmPassword = document.getElementById('confirmPassword').value;

          let emailError = document.getElementById('emailError');
          let passwordError = document.getElementById('passwordError');
          let confirmPasswordError = document.getElementById('confirmPasswordError');

          emailError.textContent = passwordError.textContent = confirmPasswordError.textContent = '';

          let valid = true;

          if (!validateEmail(email)) {
              emailError.textContent = 'Пожалуйста, введите корректный email.';
              valid = false;
          }
          if (password.length < 6) {
              passwordError.textContent = 'Пароль должен содержать не менее 6 символов.';
              valid = false;
          }
          if (password !== confirmPassword) {
              confirmPasswordError.textContent = 'Пароли не совпадают.';
              valid = false;
          }

          if (valid) {
              alert('Выполнен вход!');

              localStorage.setItem('email', email); // Сохраняем email в localStorage
              displayUserInitial(email);
              hideLoginForm();
              hideLoginLink();
              showLogoutButton(); // Показываем кнопку выхода

              formElement.reset();
          }
      });
  }

  // При загрузке страницы проверяем, есть ли email в localStorage
  const savedEmail = localStorage.getItem('email');
  if (savedEmail) {
      displayUserInitial(savedEmail); // Если email есть, отображаем иконку
      hideLoginForm();
      hideLoginLink(); // Скрываем текст "Вход", если пользователь уже авторизован
      showLogoutButton(); // Показываем кнопку выхода
  }else{
    resetUI()
  }

  if (logoutButton) {
    logoutButton.addEventListener('click', function () {
        localStorage.removeItem('email'); // Удаляем email из localStorage
        resetUI(); // Сбрасываем интерфейс
        window.location.href = '2.html'; // Переход на страницу 2.html
    });
}
  
});

function displayUserInitial(email) {
  const userInitial = email.charAt(0).toUpperCase();
  const userInitialElement = document.getElementById('userInitial');

  if (userInitialElement) {
    userInitialElement.textContent = userInitial;
  }
  
}

function hideLoginForm() {
  const formElement = document.getElementById('myForm');
  if (formElement) {
      formElement.style.display = 'none';
  }
}

function hideLoginLink() {
  const loginLink = document.getElementById('vhod');
  if (loginLink) {
      loginLink.style.display = 'none';
  }
}

function showLogoutButton() {
  const logoutButton = document.getElementById('logout');
  if (logoutButton) {
      logoutButton.style.display = 'inline'; // Показываем кнопку выхода
  }
}

function resetUI() {
  const formElement = document.getElementById('myForm');
  const loginLink = document.getElementById('vhod');
  const userInitialElement = document.getElementById('userInitial');
  const logoutButton = document.getElementById('logout');

  if (formElement) formElement.style.display = 'block';
  if (loginLink) loginLink.style.display = 'inline';
  if (userInitialElement) {
      userInitialElement.textContent = ''; // Очищаем текст
      userInitialElement.style.display = 'none'; // Скрываем иконку
  }
  if (logoutButton) logoutButton.style.display = 'none'; // Скрываем кнопку выхода
}

function validateEmail(email) {
  let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
// document.addEventListener('DOMContentLoaded', function() {
//   const formElement = document.getElementById('myForm');
//   if (formElement) {
//       formElement.addEventListener('submit', function(e) {
//           e.preventDefault();

//           let email = document.getElementById('email').value;
//           let password = document.getElementById('password').value;
//           let confirmPassword = document.getElementById('confirmPassword').value;

//           let emailError = document.getElementById('emailError');
//           let passwordError = document.getElementById('passwordError');
//           let confirmPasswordError = document.getElementById('confirmPasswordError');

//           emailError.textContent = passwordError.textContent = confirmPasswordError.textContent = '';

//           let valid = true;

//           if (!validateEmail(email)) {
//               emailError.textContent = 'Пожалуйста, введите корректный email.';
//               valid = false;
//           }
//           if (password.length < 6) {
//               passwordError.textContent = 'Пароль должен содержать не менее 6 символов.';
//               valid = false;
//           }
//           if (password !== confirmPassword) {
//               confirmPasswordError.textContent = 'Пароли не совпадают.';
//               valid = false;
//           }

//           if (valid) {
//               alert('Выполнен вход!');

//               localStorage.setItem('email', email);  // Сохраняем email в localStorage
//               displayUserInitial(email);
//               hideLoginForm();
//               hideLoginLink();

//               formElement.reset();
//           }
//       });
//   }

//   // При загрузке страницы проверяем, есть ли email в localStorage
//   const savedEmail = localStorage.getItem('email');
//   if (savedEmail) {
//       displayUserInitial(savedEmail);  // Если email есть, отображаем иконку
//       hideLoginForm();
//       hideLoginLink(); // Скрываем текст "Вход", если пользователь уже авторизован
//   }
// });

// function displayUserInitial(email) {
//   const userInitial = email.charAt(0).toUpperCase();
//   const userInitialElement = document.getElementById('userInitial');
  
//   if (userInitialElement) {
//       userInitialElement.textContent = userInitial;
//   }
// }

// function hideLoginForm() {
//   const formElement = document.getElementById('myForm');
//   if (formElement) {
//       formElement.style.display = 'none';
//   }
// }

// function hideLoginLink() {
//   const loginLink = document.getElementById('vhod');
//   if (loginLink) {
//       loginLink.style.display = 'none';
//   }
// }

// function validateEmail(email) {
//   let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
// }

