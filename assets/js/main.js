// Manejo del Menú Móvil
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animación simple del icono
    menuIcon.classList.toggle('toggle');
});

// Cerrar menú al hacer clic en un enlace (Móvil)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Efecto Scroll Reveal (Apple Style)
const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", reveal);

// Lanzar una vez al cargar
document.addEventListener("DOMContentLoaded", reveal);
