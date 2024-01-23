// // script.js
document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    // Check the stored theme preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    // Toggle the theme on theme switch click
    themeSwitch.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        
        // Update the stored theme preference
        const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
    });
});
