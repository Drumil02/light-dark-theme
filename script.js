const button = document.getElementById('theme-toggle');
const body = document.body;

button.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    button.textContent = body.classList.contains('dark-theme') ? 'Switch to Light Theme' : 'Switch to Dark Theme';
});

// Set default theme
body.classList.add('light-theme');