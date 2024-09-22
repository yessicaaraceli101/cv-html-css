let darkMode = false; // Variable para controlar el estado del tema
const themeToggle = document.getElementById('theme-toggle'); // Referencia al botón

// Función para cambiar el tema
function toggleTheme() {
    darkMode = !darkMode; // Cambiar el estado del tema
    if (darkMode) {
        document.body.classList.add('dark-theme'); // Añade clase para tema oscuro
    } else {
        document.body.classList.remove('dark-theme'); // Remueve clase para tema oscuro
    }
}

// Evento para el botón de cambio de tema
themeToggle.addEventListener('click', toggleTheme);