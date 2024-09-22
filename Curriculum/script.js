const themeToggle = document.getElementById('theme-toggle');
let darkMode = false; // Variable para controlar el estado del tema

// Función para cambiar el tema
function toggleTheme() {
    darkMode = !darkMode; // Cambiar el estado del tema
    if (darkMode) {
        document.body.style.backgroundColor = 'var(--bg-color-dark)';
        document.body.style.color = 'var(--text-color-dark)';
        themeToggle.style.backgroundColor = '#555';
        themeToggle.style.color = '#fff';
        document.querySelectorAll('ul li').forEach(item => {
            item.style.backgroundColor = '#444'; // Fondo oscuro para las listas
            item.style.color = 'var(--text-color-dark)';
        });
        document.querySelectorAll('a').forEach(link => {
            link.style.color = 'var(--text-color-dark)'; // Color de enlaces en tema oscuro
        });
    } else {
        document.body.style.backgroundColor = 'var(--bg-color-light)';
        document.body.style.color = 'var(--text-color-light)';
        themeToggle.style.backgroundColor = 'var(--button-color)';
        themeToggle.style.color = '#fff';
        document.querySelectorAll('ul li').forEach(item => {
            item.style.backgroundColor = '#f4f4f4'; // Fondo claro para las listas
            item.style.color = 'var(--text-color-light)';
        });
        document.querySelectorAll('a').forEach(link => {
            link.style.color = 'var(--button-color)'; // Color de enlaces en tema claro
        });
    }
}

themeToggle.addEventListener('click', toggleTheme);