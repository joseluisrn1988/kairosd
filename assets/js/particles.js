const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 60; // Ajusta la cantidad de partículas aquí

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 1 - 0.5,
            opacity: Math.random() * 0.5 + 0.2
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
        p.x += p.x > canvas.width || p.x < 0 ? (p.speedX *= -1) : p.speedX;
        p.y += p.y > canvas.height || p.y < 0 ? (p.speedY *= -1) : p.speedY;

        ctx.fillStyle = `rgba(46, 204, 113, ${p.opacity})`; // Usa tu color --accent (#2ecc71)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', init);
init();
animate();