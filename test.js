

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

class lopta {
  constructor(speed, x, y, r, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.speed = speed;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
  padaj(){
    this.y += this.speed;
  }
  stop() {
    if (this.y == (300 - this.r)) {
      this.speed = 0;
    }
  }
}

var mojaLopta = new lopta(2, 150, 80, 10, 'red');
var tvojaLopta = new lopta(1, 100, 80, 20, 'blue');
class main {
  static start() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    mojaLopta.draw();
    mojaLopta.padaj();
    mojaLopta.stop();
    tvojaLopta.draw();
    tvojaLopta.padaj();
    tvojaLopta.stop();

  }
}
setInterval(main.start, 10);
console.log(mojaLopta);
