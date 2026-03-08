// Manejo del Menú Móvil
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const body = document.body;

// Crear overlay si no existe
let overlay = document.querySelector('.menu-overlay');
if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
}

if (menuIcon) {
    menuIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = navLinks.classList.contains('active');
        
        if (!isActive) {
            // Abrir menú
            navLinks.classList.add('active');
            menuIcon.classList.add('toggle');
            overlay.classList.add('active');
            body.classList.add('menu-open');
        } else {
            // Cerrar menú
            closeMenu();
        }
    });
}

// Función para cerrar menú
function closeMenu() {
    navLinks.classList.remove('active');
    menuIcon.classList.remove('toggle');
    overlay.classList.remove('active');
    body.classList.remove('menu-open');
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Solo cerrar si el menú está visible (móvil)
        if (window.innerWidth <= 850) {
            closeMenu();
        }
    });
});

// Cerrar menú al hacer clic en el overlay
overlay.addEventListener('click', () => {
    if (window.innerWidth <= 850) {
        closeMenu();
    }
});

// Cerrar menú al hacer clic fuera (por si acaso)
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 850) {
        if (!navLinks.contains(e.target) && !menuIcon.contains(e.target) && !overlay.contains(e.target)) {
            closeMenu();
        }
    }
});

// Manejar cambio de tamaño de ventana
window.addEventListener('resize', () => {
    if (window.innerWidth > 850) {
        // Si estamos en desktop, aseguramos que el menú esté cerrado
        closeMenu();
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