document.addEventListener('DOMContentLoaded', () => {
    // Menú móvil responsivo (Hamburguesa)
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Cambiar icono de hamburguesa a cruz
        const icon = mobileMenu.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Cerrar menú móvil al seleccionar un enlace
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileMenu.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Efecto de Header fijo al hacer scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Prevenir el comportamiento por defecto del formulario de contacto para demostración
    const quoteForm = document.getElementById('quoteForm');
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Gracias por cotizar tu Campaña de Exploración! Nos pondremos en contacto contigo pronto.');
        quoteForm.reset();
    });
});