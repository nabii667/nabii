 // theme.js
const toggleThemeButton = document.querySelector('#toggle-theme');

toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

