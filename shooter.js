// --- BASE64 IMAGES ---
// (Enkel de 3 skins, links/rechts, klein 32x32 px, pixel art stijl)

const images = {};

// Skin 1
images.player1Right = new Image();
images.player1Right.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABH0lEQVR4Ae3TwUoDQRAG4P+XD0ZVCSqQSEVSVKgnNn4BYkgTSbEmji2mLfFgk+z/pvYVvr82lpS7v3AY7+q2EfA6TiCIUYqg3A9XqAIQogBLhEAK2JfDuTHP0jQkwQKgRFIIfXEDAzXDYAF6lQArZQLAIGVXwFgq9wBCJqDjyTJkDPg2GCBXFVQDGXAs68MlAKFAaDkK4LcmIBr6Iq6GCx4ElnQjEygOA+smDYxM5/B0CE0QCEzqQCJw2BpoET1AR3sRcIhBRhcqWwAFpk+swQoFKGMzzX8Fu04mfJqBg9xK5ph9B8CuKAgOexY2AaLkQjWkQCqy3N+UlZ0H2Fte/Tg5W8bY7qU3GYCG9i6bQ1xR82AOu7M9AqAxa2hqoAAAAASUVORK5CYII=";
images.player1Left = new Image();
images.player1Left.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABGElEQVR4Ae3SwUoDQRAG4O+cLsYnLCUR1ETVShJ0W4BYkgXSbImji2mLeFgk+z/qvYXvr82ppS7v3C43+q3EdA6TiCIUYqg3A9XqAIQogBLhEAK2JfDuTHP0jQkwQKgRFIIfXEDAzXDYAF6lQArZQLAIGVXwFgq9wBCJqDjyTJkDPg2GCBXFVQDGXAs68MlAKFAaDkK4LcmIBr6Iq6GCx4ElnQjEygOA+smDYxM5/B0CE0QCEzqQCJw2BpoET1AR3sRcIhBRhcqWwAFpk+swQoFKGMzzX8Fu04mfJqBg9xK5ph9B8CuKAgOexY2AaLkQjWkQCqy3N+UlZ0H2Fte/Tg5W8bY7qU3GYCG9i6bQ1xR82AOu7M9AqAxa2hqoAAAAASUVORK5CYII=";

// Skin 2
images.player2Right = new Image();
images.player2Right.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABHklEQVR4Ae3TQQqDQRBF0W8U8YUEP6AvS9DLwiTQpTkNQIQU6YX6EpYx3FOO1/JrP5Tz93ezO4ozM7s3VZ6vPJuHePRXGEk2DhLNgqwJVyK8YdSCBDkBWzQXsWIsAazV5K1OAIygVpMC5BFSZ0OgU+DKxQFSAL6IXWgu+uJmUwXqAJVzMQS1uw06xhIQC6g2Gwjv9FBGZqLF5DjE5BgC5A1NOKDzkqw7FRwbiBvPEHgm5b5Y0eYA95SWA8BiArqQjOg7GqkRQHjOGx0DwZqAknyLjEmWAlcgf6ZvTcvAEkXCyZ+HCHd4HZ0cd4BB8QAAAAASUVORK5CYII=";
images.player2Left = new Image();
images.player2Left.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABGklEQVR4Ae3SwUoDQRBF0W8U8YUEP6AvS9DLwiTQpTkNQIQU6YX6EpYx3FOO1/JrP5Tz93ezO4ozM7s3VZ6vPJuHePRXGEk2DhLNgqwJVyK8YdSCBDkBWzQXsWIsAazV5K1OAIygVpMC5BFSZ0OgU+DKxQFSAL6IXWgu+uJmUwXqAJVzMQS1uw06xhIQC6g2Gwjv9FBGZqLF5DjE5BgC5A1NOKDzkqw7FRwbiBvPEHgm5b5Y0eYA95SWA8BiArqQjOg7GqkRQHjOGx0DwZqAknyLjEmWAlcgf6ZvTcvAEkXCyZ+HCHd4HZ0cd4BB8QAAAAASUVORK5CYII=";

// Skin 3
images.player3Right = new Image();
images.player3Right.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABHklEQVR4Ae3TQQqDQRBF0W8U8YUEP6AvS9DLwiTQpTkNQIQU6YX6EpYx3FOO1/JrP5Tz93ezO4ozM7s3VZ6vPJuHePRXGEk2DhLNgqwJVyK8YdSCBDkBWzQXsWIsAazV5K1OAIygVpMC5BFSZ0OgU+DKxQFSAL6IXWgu+uJmUwXqAJVzMQS1uw06xhIQC6g2Gwjv9FBGZqLF5DjE5BgC5A1NOKDzkqw7FRwbiBvPEHgm5b5Y0eYA95SWA8BiArqQjOg7GqkRQHjOGx0DwZqAknyLjEmWAlcgf6ZvTcvAEkXCyZ+HCHd4HZ0cd4BB8QAAAAASUVORK5CYII=";
images.player3Left = new Image();
images.player3Left.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABGklEQVR4Ae3SwUoDQRBF0W8U8YUEP6AvS9DLwiTQpTkNQIQU6YX6EpYx3FOO1/JrP5Tz93ezO4ozM7s3VZ6vPJuHePRXGEk2DhLNgqwJVyK8YdSCBDkBWzQXsWIsAazV5K1OAIygVpMC5BFSZ0OgU+DKxQFSAL6IXWgu+uJmUwXqAJVzMQS1uw06xhIQC6g2Gwjv9FBGZqLF5DjE5BgC5A1NOKDzkqw7FRwbiBvPEHgm5b5Y0eYA95SWA8BiArqQjOg7GqkRQHjOGx0DwZqAknyLjEmWAlcgf6ZvTcvAEkXCyZ+HCHd4HZ0cd4BB8QAAAAASUVORK5CYII=";


// --- GAME VARIABLES ---
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

let currentSkin = 1;
let player = null;
let enemies = [];
let keysPressed = {};
let gameRunning = false;

const PLAYER_SPEED = 3;
const ENEMY_SPEED = 1.2;

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.direction = "right"; // "left" or "right"
    this.speed = PLAYER_SPEED;
    this.health = 10;
    this.alive = true;
  }

  getImage() {
    if (this.direction === "right") {
      return images[`player${currentSkin}Right`];
    } else {
      return images[`player${currentSkin}Left`];
    }
  }

  move() {
    if (!this.alive) return;

    if (keysPressed["KeyA"]) {
      this.x -= this.speed;
      this.direction = "left";
    }
    if (keysPressed["KeyD"]) {
      this.x += this.speed;
      this.direction = "right";
    }
    if (keysPressed["KeyW"]) {
      this.y -= this.speed;
    }
    if (keysPressed["KeyS"]) {
      this.y += this.speed;
    }

    // Grenzen canvas
    this.x = Math.max(0, Math.min(canvas.width - this.width, this.x));
    this.y = Math.max(0, Math.min(canvas.height - this.height, this.y));
  }

  draw() {
    ctx.drawImage(this.getImage(), this.x, this.y, this.width, this.height);
  }
}

class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.speed = ENEMY_SPEED;
    this.health = 5;
    this.alive = true;
    this.color = "red";
  }

  moveTowards(player) {
    if (!this.alive) return;

    let dx = player.x - this.x;
    let dy = player.y - this.y;
    let dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 0) {
      this.x += (dx / dist) * this.speed;
      this.y += (dy / dist) * this.speed;
    }
  }

  draw() {
    if (!this.alive) return;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

function spawnEnemy() {
  // Spawn enemy random links of canvas, met y random
  let x = Math.random() < 0.5 ? -40 : canvas.width + 40;
  let y = Math.random() * (canvas.height - 32);
  enemies.push(new Enemy(x, y));
}

function update() {
  if (!gameRunning) return;

  player.move();

  enemies.forEach((enemy) => {
    enemy.moveTowards(player);
    // Check collision speler-enemy (heel simpel)
    if (
      enemy.alive &&
      player.alive &&
      enemy.x < player.x + player.width &&
      enemy.x + enemy.width > player.x &&
      enemy.y < player.y + player.height &&
      enemy.y + enemy.height > player.y
    ) {
      player.health--;
      if (player.health <= 0) {
        player.alive = false;
        alert("Game Over!");
        stopGame();
        showMenu();
      }
    }
  });

  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Achtergrond grid
  ctx.fillStyle = "#222";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#444";
  for (let i = 0; i < canvas.width; i += 32) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();
  }
  for (let i = 0; i < canvas.height; i += 32) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
  }

  player.draw();

  enemies.forEach((enemy) => enemy.draw());

  // Health bar boven speler
  ctx.fillStyle = "red";
  ctx.fillRect(player.x, player.y - 10, 32, 5);
  ctx.fillStyle = "lime";
  ctx.fillRect(player.x, player.y - 10, (32 * player.health) / 10, 5);
}

function gameLoop() {
  update();
  if (gameRunning) requestAnimationFrame(gameLoop);
}

function startGame() {
  player = new Player(canvas.width / 2 - 16, canvas.height / 2 - 16);
  enemies = [];
  player.health = 10;
  player.alive = true;
  gameRunning = true;
  spawnEnemy();
  setInterval(() => {
    if (gameRunning) spawnEnemy();
  }, 3000);
  gameLoop();
}

function stopGame() {
  gameRunning = false;
}

function showMenu() {
  document.getElementById("main-menu").classList.remove("hidden");
  document.getElementById("game-screen").classList.add("hidden");
}

function showGame() {
  document.getElementById("main-menu").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
}

document.getElementById("btn-battle").addEventListener("click", () => {
  showGame();
  startGame();
});

document.getElementById("btn-back").addEventListener("click", () => {
  stopGame();
  showMenu();
});

document.getElementById("skin-selection").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    currentSkin = parseInt(e.target.dataset.skin);
  }
});

// Toetsenbord events
window.addEventListener("keydown", (e) => {
  keysPressed[e.code] = true;
});

window.addEventListener("keyup", (e) => {
  keysPressed[e.code] = false;
});
