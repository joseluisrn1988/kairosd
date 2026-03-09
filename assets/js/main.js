// --- MANEJO DEL MENÚ MÓVIL ---
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
            navLinks.classList.add('active');
            menuIcon.classList.add('toggle');
            overlay.classList.add('active');
            body.classList.add('menu-open');
        } else {
            closeMenu();
        }
    });
}

function closeMenu() {
    if (navLinks) navLinks.classList.remove('active');
    if (menuIcon) menuIcon.classList.remove('toggle');
    if (overlay) overlay.classList.remove('active');
    body.classList.remove('menu-open');
}

// Eventos de cierre de menú
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 850) closeMenu();
    });
});

overlay.addEventListener('click', () => {
    if (window.innerWidth <= 850) closeMenu();
});

document.addEventListener('click', (e) => {
    if (window.innerWidth <= 850 && navLinks && menuIcon) {
        if (!navLinks.contains(e.target) && !menuIcon.contains(e.target) && !overlay.contains(e.target)) {
            closeMenu();
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 850) closeMenu();
});


// --- ANIMACIÓN DE CONTADOR (STATS) ---
const animateStats = (el) => {
    const target = +el.getAttribute('data-target');
    const count = +el.innerText;
    
    // Ajuste de velocidad: incremento dinámico para suavidad
    const increment = Math.max(1, Math.ceil(target / 40)); 

    if (count < target) {
        el.innerText = Math.min(target, count + increment);
        setTimeout(() => animateStats(el), 50); // 50ms para un movimiento elegante
    } else {
        el.innerText = target;
        el.classList.add('counting-finished');
    }
};


// --- ANIMACIÓN DE SCROLL REVEAL ---
const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    
    reveals.forEach((el, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 120; // Margen para que se vea que entra

        if (elementTop < windowHeight - elementVisible) {
            // Lógica para los contadores numéricos
            if (el.classList.contains('stat') && !el.classList.contains('counted')) {
                el.classList.add('counted');
                el.innerText = "0"; // Asegurar que inicie en cero
                animateStats(el);
            }

            // Lógica de aparición visual (Fade In / Slide Up)
            if (el.parentElement?.classList.contains('values-grid')) {
                setTimeout(() => {
                    el.classList.add("active");
                }, (index % 3) * 200); // Efecto escalonado en rejillas
            } else {
                el.classList.add("active");
            }
        }
    });
};

// --- LISTENERS INICIALES ---
window.addEventListener("scroll", reveal);
window.addEventListener("resize", reveal);
document.addEventListener("DOMContentLoaded", reveal);