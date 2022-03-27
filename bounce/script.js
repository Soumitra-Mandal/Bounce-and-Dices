var canvas = document.getElementById("drawer");
var ctx = canvas.getContext("2d");
class Particle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    drawParticle(centerX, centerY, ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(centerX, centerY, this.radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }
}

var p1 = new Particle(20, "#000");
var x = 700;
var y = 30;
var speed = 3;
var speeds = [];
var times = [];
var start = new Date();
const bounce = () => {
    var now = new Date();
    timePassed = now.getTime() - start.getTime();
    t = timePassed / 1000;
    y = y + speed;

    if (y > 280 || y < 30) {
        speed *= -1;
    }
    if (speeds.length < 10) {
        speeds.push(y);
    }
    if (times.length < 10) {
        times.push(t);
    }
    ctx.clearRect(0, 0, 1400, 700);
    ctx.moveTo(0, 300);
    ctx.lineTo(1400, 300);
    ctx.stroke();
    p1.drawParticle(x, y, ctx);

};
console.log(speeds);
console.log(times);

setInterval(bounce, 1);