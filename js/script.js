const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let basket, fallingObjects, score, lives, gameOver;

document.getElementById('restartButton').addEventListener('click', resetGame);

// Basket class
class Basket {
  constructor() {
    this.width = 80;
    this.height = 20;
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height - this.height - 10;
    this.speed = 7;
    this.movingLeft = false;
    this.movingRight = false;
  }

  draw() {
    ctx.fillStyle = '#ff9800';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    if (this.movingLeft && this.x > 0) {
      this.x -= this.speed;
    }
    if (this.movingRight && this.x + this.width < canvas.width) {
      this.x += this.speed;
    }
  }
}

// Falling Object class
class FallingObject {
  constructor() {
    this.radius = 15;
    this.x = Math.random() * (canvas.width - this.radius * 2) + this.radius;
    this.y = 0 - this.radius;
    this.speed = Math.random() * 3 + 2;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.y += this.speed;
  }
}

function resetGame() {
  basket = new Basket();
  fallingObjects = [];
  score = 0;
  lives = 3;
  gameOver = false;
  document.getElementById('gameOver').style.display = 'none';
  document.getElementById('finalScore').textContent = '';
  loop();
}

// Handle keypresses for moving the basket
document.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowLeft') basket.movingLeft = true;
  if (e.code === 'ArrowRight') basket.movingRight = true;
});

document.addEventListener('keyup', (e) => {
  if (e.code === 'ArrowLeft') basket.movingLeft = false;
  if (e.code === 'ArrowRight') basket.movingRight = false;
});

function detectCollision(object) {
  return object.x + object.radius > basket.x &&
         object.x - object.radius < basket.x + basket.width &&
         object.y + object.radius > basket.y;
}

function endGame() {
  gameOver = true;
  document.getElementById('gameOver').style.display = 'block';
  document.getElementById('finalScore').textContent = score;
}

function loop() {
  if (gameOver) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  basket.update();
  basket.draw();

  if (Math.random() < 0.02) {
    fallingObjects.push(new FallingObject());
  }

  fallingObjects.forEach((object, index) => {
    object.update();
    object.draw();

    if (detectCollision(object)) {
      fallingObjects.splice(index, 1);
      score += 1;
    } else if (object.y > canvas.height) {
      fallingObjects.splice(index, 1);
      lives -= 1;
      if (lives <= 0) {
        endGame();
      }
    }
  });

  // Display score and lives
  ctx.fillStyle = 'white';
  ctx.font = '20px Arial';
  ctx.fillText(`Score: ${score}`, 20, 30);
  ctx.fillText(`Lives: ${lives}`, 20, 60);

  requestAnimationFrame(loop);
}

resetGame();
