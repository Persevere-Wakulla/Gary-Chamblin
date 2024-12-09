// Setup

const arr = ['#EE34D2, #50BFE6, #FF3855, #FFF700']
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(ctx);

const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
gradient.addColorStop(0, 'white');
gradient.addColorStop(1, 'gold');
ctx.fillStyle = gradient;
ctx.strokeStyle = gradient;
// ctx.lineWidth = 0.4;

class Particle {
    constructor(effect, index) {
        this.effect = effect;
        this.index = index;
        this.radius = Math.floor(Math.random() * 10 + 5);
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
        this.vx = Math.random() * 1 - 0.5;
        this.vy = Math.random() * 1 - 0.5;
        this.pushX = 0;
        this.pushY = 0;
        this.friction = 0.8;

    }
    draw(context) {
        if(this.index % 4 === 0){
            context.save();
            context.globalAlpha = 0.4;
            context.beginPath();
            context.moveTo(this.x, this.y);
            context.lineTo(this.effect.mouse.x, this.effect.mouse.y);
            context.stroke();
            context.restore();
        }
        ctx.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }
    update() {
        if(this.effect.mouse.pressed){
            const dx = this.x - this.effect.mouse.x;
            const dy = this.y - this.effect.mouse.y;
            const distance = Math.hypot(dx, dy);
            const force = this.effect.mouse.radius / distance;
            if(distance < this.effect.mouse.radius){
                const angle = Math.atan2(dy, dx)
                this.pushX += Math.cos(angle) * force;
                this.pushY += Math.sin(angle) * force;
            }
        }

        this.x += (this.pushX *= this.friction) + this.vx;
        this.y += (this.pushY *= this.friction) + this.vy;

        if(this.x < this.radius){
            this.x = this.radius;
            this.vx *= -1
        } else if(this.x > this.effect.width - this.radius){
            this.x = this.effect.width - this.radius;
            this.vx *= -1;
        }

        if(this.y < this.radius){
            this.y = this.radius;
            this.vy *= -1
        } else if(this.y > this.effect.height - this.radius){
            this.y = this.effect.height - this.radius;
            this.vy *= -1;
        }
    }
    reset(){
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
    }
}

class Effect {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.particles = [];
        this.numberOfParticles = 300;
        this.createParticles();

        this.mouse = {
            x: this.width * 0.5,
            y: this.height * 0.5,
            pressed: false,
            radius: 120,
        }

        window.addEventListener('resize', e => {
            this.resize(e.target.window.innerWidth, e.target.window.innerHeight);
        });

        window.addEventListener('mousemove', e => {
           if (this.mouse.pressed){
            this.mouse.x = e.x;
            this.mouse.y = e.y;
           }
        });

        window.addEventListener('mousedown', e => {
            this.mouse.pressed = true;
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });

        window.addEventListener('mouseup', e => {
            this.mouse.pressed = false;
        });
    }
    createParticles() {
        for (let i = 0; i < this.numberOfParticles; i++) {
            this.particles.push(new Particle(this, i));
        }
    }
    handleParticles(context) {
        this.connectParticles(context);
        this.particles.forEach(particle => {
            particle.draw(context)
            particle.update()
        })
    }
    connectParticles(context) {
        const maxDistance = 80;
        for (let a = 0; a < this.particles.length; a++) {
            for (let b = a; b < this.particles.length; b++) {
                const dx = this.particles[a].x - this.particles[b].x;
                const dy = this.particles[a].y - this.particles[b].y;
                const distance = Math.hypot(dx, dy);
                if (distance < maxDistance) {
                    context.save();
                    const opacity = 1 - (distance / maxDistance);
                    context.globalAlpha = opacity;
                    context.beginPath();
                    context.moveTo(this.particles[a].x, this.particles[a].y);
                    context.lineTo(this.particles[b].x, this.particles[b].y);
                    context.stroke();
                    context.restore();
                }

            }
        }
    }
    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
        const gradient = this.context.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, '#EE34D2');
        gradient.addColorStop(0.25, '#50BFE6');
        gradient.addColorStop(0.5, '#FF3855');
        gradient.addColorStop(1, '#FFF700');
        this.context.fillStyle = gradient;
        this.context.strokeStyle = 'white';
        // ctx.lineWidth = 0.4;
        this.particles.forEach(particle => {
            particle.reset();
        });

    }
}

const effect = new Effect(canvas, ctx);
// console.log(effect);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    effect.handleParticles(ctx);
    requestAnimationFrame(animate);
}
animate();