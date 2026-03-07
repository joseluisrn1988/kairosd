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

const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            // Si el elemento está en una rejilla (grid), le damos un retraso basado en su posición
            if (el.parentElement.classList.contains('values-grid')) {
                setTimeout(() => {
                    el.classList.add("active");
                }, index % 3 * 200); // 200ms de diferencia entre cada tarjeta
            } else {
                el.classList.add("active");
            }
        }
    });
};

window.addEventListener("scroll", reveal);

// Lanzar una vez al cargar
document.addEventListener("DOMContentLoaded", reveal);
