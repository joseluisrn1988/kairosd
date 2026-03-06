// Efecto de cambio de color en el header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('#main-header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.background = '#ffffff';
    } else {
        header.style.padding = '20px 0';
    }
});

// Animación de entrada suave para las tarjetas de servicios
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});