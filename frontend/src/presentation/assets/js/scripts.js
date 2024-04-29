// Obtener todos los enlaces del menú
const menuLinks = document.querySelectorAll('.respmenu nav ul li a');

// Agregar un event listener a cada enlace
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Cerrar el menú al hacer clic en un enlace
    document.getElementById('mobile-menu').checked = false;
  });
});