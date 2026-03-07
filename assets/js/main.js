// Manejo del Menú Móvil
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

if (menuIcon) {
    menuIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        menuIcon.classList.toggle('toggle');
    });
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Solo cerrar si el menú está visible (móvil)
        if (window.innerWidth <= 850) {
            navLinks.classList.remove('active');
            menuIcon.classList.remove('toggle');
        }
    });
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 850) {
        if (!navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
            navLinks.classList.remove('active');
            menuIcon.classList.remove('toggle');
        }
    }
});

// Animación de scroll reveal
const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            if (el.parentElement?.classList.contains('values-grid')) {
                setTimeout(() => {
                    el.classList.add("active");
                }, index % 3 * 200);
            } else {
                el.classList.add("active");
            }
        }
    });
};

window.addEventListener("scroll", reveal);
window.addEventListener("resize", reveal);
document.addEventListener("DOMContentLoaded", reveal);