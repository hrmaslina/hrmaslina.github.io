document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos el botón del menú, el menú y el logotipo
    const navbarToggler = document.getElementById('navbar-toggler');
    const menu = document.getElementById('navbarNav');
    const icon = document.getElementById('menu-icon');
    const logo = document.querySelector('.navbar-brand');
    
    // Añadimos el evento de clic al botón del menú
    navbarToggler.addEventListener('click', function() {
        // Alternar la clase 'active' que muestra el menú
        menu.classList.toggle('active');
        // Cambiar el icono del menú a 'X' y viceversa
        if (menu.classList.contains('active')) {
            icon.textContent = 'close';  // Cambiar el icono a 'X'
            logo.classList.add('hidden');  // Ocultar el logotipo
        } else {
            icon.textContent = 'menu';  // Volver al icono de menú
            logo.classList.remove('hidden');  // Mostrar el logotipo
        }


    });
});