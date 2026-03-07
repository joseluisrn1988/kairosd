const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 70; // Cantidad de puntos
const connectionDistance = 150; // Distancia máxima para conectarse

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 2,
            speedX: Math.random() * 0.8 - 0.4,
            speedY: Math.random() * 0.8 - 0.4,
        });
    }
}

function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
                // La opacidad de la línea depende de la distancia (más cerca = más fuerte)
                const opacity = 1 - (distance / connectionDistance);
                ctx.strokeStyle = `rgba(46, 204, 113, ${opacity * 0.3})`; // Color --accent con transparencia
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
        // Movimiento y rebote en bordes
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width || p.x < 0) p.speedX *= -1;
        if (p.y > canvas.height || p.y < 0) p.speedY *= -1;

        // Dibujar el punto
        ctx.fillStyle = '#2ecc71';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });

    drawConnections(); // Dibujar las líneas de la red
    requestAnimationFrame(animate);
}

window.addEventListener('resize', init);
init();
animate();