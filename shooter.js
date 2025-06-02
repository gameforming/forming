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
// -- BULLET CLASS (voor speler kogels) --
class Bullet {
  constructor(x, y, dir) {
    this.x = x;
    this.y = y;
    this.speed = 7;
    this.dir = dir; // "left" of "right"
    this.width = 8;
    this.height = 4;
    this.alive = true;
  }

  update() {
    if (this.dir === "right") {
      this.x += this.speed;
    } else {
      this.x -= this.speed;
    }
    // Verwijder kogel als ie buiten canvas gaat
    if (this.x < -this.width || this.x > canvas.width + this.width) {
      this.alive = false;
    }
  }

  draw() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

// -- ENEMY BULLET CLASS (voor vijandige kogels) --
class EnemyBullet {
  constructor(x, y, targetX, targetY) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.width = 8;
    this.height = 4;
    this.alive = true;

    // Richting vector normaliseren
    let dx = targetX - x;
    let dy = targetY - y;
    let dist = Math.sqrt(dx * dx + dy * dy);
    this.vx = (dx / dist) * this.speed;
    this.vy = (dy / dist) * this.speed;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Verwijder kogel buiten canvas
    if (
      this.x < -this.width || this.x > canvas.width + this.width ||
      this.y < -this.height || this.y > canvas.height + this.height
    ) {
      this.alive = false;
    }
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

// -- AANPASSING ENEMY CLASS --
// Voeg een 'type' toe (zombie of shooter), health, en schiet cooldown
class Enemy {
  constructor(x, y, type = "zombie") {
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 48;
    this.speed = type === "shooter" ? 1.5 : 2;
    this.health = type === "shooter" ? 5 : 3;
    this.type = type;
    this.alive = true;
    this.shootCooldown = 0; // frames tot volgende schot
  }

  moveTowards(player) {
    if (!this.alive) return;

    // Shooters bewegen iets langzamer en stoppen op afstand om te schieten
    if (this.type === "shooter") {
      let distX = player.x - this.x;
      if (Math.abs(distX) > 200) {
        // bewegen naar speler als verder dan 200px
        this.x += this.speed * Math.sign(distX);
      } else {
        // dichtbij genoeg, cooldown aftellen
        if (this.shootCooldown > 0) this.shootCooldown--;
        else {
          this.shoot(player);
          this.shootCooldown = 90; // 1.5 seconde cooldown bij 60fps
        }
      }
    } else {
      // Zombies bewegen direct naar speler
      let distX = player.x - this.x;
      let distY = player.y - this.y;
      let dist = Math.sqrt(distX * distX + distY * distY);
      if (dist > 1) {
        this.x += (distX / dist) * this.speed;
        this.y += (distY / dist) * this.speed;
      }
    }
  }

  shoot(player) {
    // Maak een vijandige kogel richting speler
    enemyBullets.push(new EnemyBullet(this.x + this.width / 2, this.y + this.height / 2, player.x + player.width / 2, player.y + player.height / 2));
  }

  draw() {
    if (!this.alive) return;

    // Kies kleur op basis van type en health (voor nu simpel)
    if (this.type === "shooter") ctx.fillStyle = "purple";
    else ctx.fillStyle = "green";

    ctx.fillRect(this.x, this.y, this.width, this.height);

    // Health balk boven enemy
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y - 8, this.width, 5);
    ctx.fillStyle = "lime";
    ctx.fillRect(this.x, this.y - 8, (this.width * this.health) / (this.type === "shooter" ? 5 : 3), 5);
  }
}

// -- ARRAY VOOR VIJANDEN EN KOGELS --
let enemies = [];
let bullets = [];
let enemyBullets = [];

// -- SCORE --
let score = 0;

// -- UPDATE FUNCTION UITBREIDING --
function update() {
  if (!gameRunning) return;

  player.move();

  bullets.forEach((b) => b.update());
  bullets = bullets.filter((b) => b.alive);

  enemyBullets.forEach((b) => b.update());
  enemyBullets = enemyBullets.filter((b) => b.alive);

  enemies.forEach((enemy) => {
    enemy.moveTowards(player);

    // Check collision speler-enemy
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

    // Check of kogel enemy raakt
    bullets.forEach((b) => {
      if (
        b.alive &&
        enemy.alive &&
        b.x < enemy.x + enemy.width &&
        b.x + b.width > enemy.x &&
        b.y < enemy.y + enemy.height &&
        b.y + b.height > enemy.y
      ) {
        enemy.health--;
        b.alive = false;
        if (enemy.health <= 0) {
          enemy.alive = false;
          score += 10;
        }
      }
    });
  });

  // Check of vijandelijke kogel speler raakt
  enemyBullets.forEach((b) => {
    if (
      b.alive &&
      player.alive &&
      b.x < player.x + player.width &&
      b.x + b.width > player.x &&
      b.y < player.y + player.height &&
      b.y + b.height > player.y
    ) {
      player.health--;
      b.alive = false;
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

// -- DRAW FUNCTION UITBREIDING --
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

  bullets.forEach((b) => b.draw());

  enemyBullets.forEach((b) => b.draw());

  // Health bar boven speler
  ctx.fillStyle = "red";
  ctx.fillRect(player.x, player.y - 10, 32, 5);
  ctx.fillStyle = "lime";
  ctx.fillRect(player.x, player.y - 10, (32 * player.health) / 10, 5);

  // Score tonen
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 25);
}

// -- EVENT LISTENER VOOR SCHIETEN --
window.addEventListener("mousedown", (e) => {
  if (!gameRunning || !player.alive) return;
  if (e.button === 0) { // linker muisknop
    let bulletX = player.direction === "right" ? player.x + player.width : player.x - 8;
    let bulletY = player.y + player.height / 2;
    bullets.push(new Bullet(bulletX, bulletY, player.direction));
  }
});

// -- FUNCTION OM VIJANDEN TE SPAWNEN --
function spawnEnemies() {
  if (!gameRunning) return;

  // Spawn soms een shooter, meestal zombies
  let type = Math.random() < 0.2 ? "shooter" : "zombie";
  // Spawn buiten het scherm, links of rechts
  let side = Math.random() < 0.5 ? -40 : canvas.width + 40;
  let y = Math.random() * (canvas.height - 48);
  enemies.push(new Enemy(side, y, type));
}

// -- START SPAWN INTERVAL --
let spawnInterval;

function startSpawning() {
  spawnInterval = setInterval(spawnEnemies, 2000); // elke 2 seconden een vijand
}

function stopSpawning() {
  clearInterval(spawnInterval);
}

// -- PAS JE GAME START EN STOP AAN --

function startGame() {
  // reset alles
  player.health = 10;
  player.alive = true;
  score = 0;
  enemies = [];
  bullets = [];
  enemyBullets = [];
  gameRunning = true;
  startSpawning();
  gameLoop();
}

function stopGame() {
  gameRunning = false;
  stopSpawning();
}
document.getElementById("btnHome").addEventListener("click", () => {
  window.location.href = "gameforming.html";
});
// Extra variabelen voor HUD
let playerHealth = 100;
let ammo = 10;
let score = 0;
const maxAmmo = 10;
let reloading = false;

// Reloadfunctie
function reload() {
  if (!reloading && ammo < maxAmmo) {
    reloading = true;
    setTimeout(() => {
      ammo = maxAmmo;
      reloading = false;
    }, 1000); // 1 seconde reloadtijd
  }
}

// Aangepaste shoot-functie
function shoot() {
  if (ammo > 0 && !reloading) {
    // Maak hier een kogel aan
    bullets.push({
      x: player.x + (player.facingRight ? 30 : -10),
      y: player.y + 15,
      vx: player.facingRight ? 10 : -10
    });
    ammo--;
  } else if (ammo === 0) {
    reload();
  }
}

// HUD updaten
function updateHUD() {
  document.getElementById("health").textContent = "Health: " + playerHealth;
  document.getElementById("ammo").textContent = "Ammo: " + ammo + (reloading ? " (reloading...)" : "");
  document.getElementById("score").textContent = "Score: " + score;
}

// Vijand raakt speler
function checkPlayerDamage() {
  enemies.forEach((enemy) => {
    if (collision(player, enemy)) {
      playerHealth -= 1;
      if (playerHealth <= 0) {
        alert("Game Over!");
        location.reload();
      }
    }
  });
}

// Kogels raken vijanden
function checkEnemyHits() {
  bullets.forEach((bullet, bIndex) => {
    enemies.forEach((enemy, eIndex) => {
      if (collision(bullet, enemy)) {
        score += 10;
        enemies.splice(eIndex, 1);
        bullets.splice(bIndex, 1);
      }
    });
  });
}

// Voeg dit toe in je game loop:
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Speler tekenen
  const playerImg = player.direction === "left" ? player.imgLeft : player.img;
  ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);

  // Vijanden tekenen
  for (let e of enemies) {
    ctx.drawImage(e.img, e.x, e.y, e.width, e.height);
  }

  // Kogels tekenen
  for (let b of bullets) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(b.x, b.y, 5, 5);
  }

  // Health bar en score tekenen
  drawHealthBar(ctx);
  drawScore(ctx);

  // Alles updaten
  update();

  // Volgende frame
  requestAnimationFrame(gameLoop);
}


// Functie om een zombie shooter toe te voegen
function spawnZombieShooter(x, y) {
  enemies.push({
    x,
    y,
    width: 30,
    height: 40,
    type: "shooter",
    shootCooldown: Math.random() * 200 + 100
  });
}

// Functie voor zombie shooters om te schieten
function enemyShootLogic() {
  enemies.forEach(enemy => {
    if (enemy.type === "shooter") {
      enemy.shootCooldown--;
      if (enemy.shootCooldown <= 0) {
        enemyBullets.push({
          x: enemy.x + enemy.width / 2,
          y: enemy.y + enemy.height / 2,
          vx: player.x > enemy.x ? 5 : -5,
        });
        enemy.shootCooldown = Math.random() * 200 + 100;
      }
    }
  });
}

// Beweeg vijand-kogels en check botsing met speler
function updateEnemyBullets() {
  for (let i = enemyBullets.length - 1; i >= 0; i--) {
    const bullet = enemyBullets[i];
    bullet.x += bullet.vx;

    // Check hit player
    if (
      bullet.x < player.x + player.width &&
      bullet.x + 5 > player.x &&
      bullet.y < player.y + player.height &&
      bullet.y + 5 > player.y
    ) {
      playerHealth -= 5;
      enemyBullets.splice(i, 1);
      if (playerHealth <= 0) {
        alert("Game Over!");
        location.reload();
      }
    }

    // Verwijder als uit beeld
    if (bullet.x < 0 || bullet.x > canvas.width) {
      enemyBullets.splice(i, 1);
    }
  }
}

// Teken vijand-kogels
function drawEnemyBullets(ctx) {
  ctx.fillStyle = "red";
  enemyBullets.forEach(b => {
    ctx.fillRect(b.x, b.y, 5, 5);
  });
}

// Zorg dat deze functies worden aangeroepen in je bestaande functies:
// In je update():
enemyShootLogic();
updateEnemyBullets();

// In je draw():
drawEnemyBullets(ctx);

// Voorbeeld spawn van een zombie shooter bij start:
spawnZombieShooter(600, 250);
// --- SKINS ---
let currentSkin = 0;
const playerSkins = [player1Right, player2Right, player3Right];
const playerSkinsLeft = [player1Left, player2Left, player3Left];

// Wissel skin met toetsen 1, 2, 3
document.addEventListener("keydown", (e) => {
  if (["1", "2", "3"].includes(e.key)) {
    currentSkin = parseInt(e.key) - 1;
    player.img = playerSkins[currentSkin];
    player.imgLeft = playerSkinsLeft[currentSkin];
  }
});

// --- HEALTH BAR ---
function drawHealthBar(ctx) {
  ctx.fillStyle = "black";
  ctx.fillRect(20, 20, 104, 14);
  ctx.fillStyle = "limegreen";
  ctx.fillRect(22, 22, playerHealth, 10);
  ctx.strokeStyle = "white";
  ctx.strokeRect(20, 20, 104, 14);
}

// --- SCORE ---
let killCount = 0;

// Tel kills bij enemy collision
function updateBullets() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    const b = bullets[i];
    b.x += b.vx;
    for (let j = enemies.length - 1; j >= 0; j--) {
      const e = enemies[j];
      if (
        b.x < e.x + e.width &&
        b.x + 5 > e.x &&
        b.y < e.y + e.height &&
        b.y + 5 > e.y
      ) {
        enemies.splice(j, 1);
        bullets.splice(i, 1);
        killCount++;
        break;
      }
    }
  }
}

// Score tekenen
function drawScore(ctx) {
  ctx.fillStyle = "white";
  ctx.font = "16px Arial";
  ctx.fillText("Kills: " + killCount, canvas.width - 100, 30);
}

// Voeg toe in je draw():
// drawHealthBar(ctx);
// drawScore(ctx);
// --- Wave systeem ---
let waveNumber = 1;
let enemiesPerWave = 5;

function spawnWave() {
  enemies = [];
  for (let i = 0; i < enemiesPerWave; i++) {
    let enemy = {
      x: Math.random() * (canvas.width - 40),
      y: Math.random() * (canvas.height / 2),
      width: 40,
      height: 40,
      health: 3 + waveNumber,
      img: zombieImg,
      speed: 1 + waveNumber * 0.1
    };
    enemies.push(enemy);
  }
}

// Roep bij start aan om eerste wave te starten:
if (enemies.length === 0) spawnWave();

// In je update functie, check of wave klaar is:
function checkWave() {
  if (enemies.length === 0) {
    waveNumber++;
    enemiesPerWave += 2;
    spawnWave();
  }
}

// --- Ammo & Reload ---
let ammo = 10;
const maxAmmo = 10;
let reloading = false;
const reloadTime = 2000; // ms

function shoot() {
  if (ammo > 0 && !reloading) {
    // je bestaande shoot code hier
    ammo--;
    shootSound.play?.();
  } else if (ammo === 0 && !reloading) {
    startReload();
  }
}

function startReload() {
  if (!reloading) {
    reloading = true;
    setTimeout(() => {
      ammo = maxAmmo;
      reloading = false;
    }, reloadTime);
  }
}

// --- Power-ups ---
let powerUps = [];
const powerUpTypes = ['health', 'damage', 'speed'];
const powerUpImgs = {
  health: healthPowerUpImg,
  damage: damagePowerUpImg,
  speed: speedPowerUpImg
};

function spawnPowerUp() {
  let type = powerUpTypes[Math.floor(Math.random() * powerUpTypes.length)];
  let powerUp = {
    x: Math.random() * (canvas.width - 30),
    y: Math.random() * (canvas.height - 30),
    width: 30,
    height: 30,
    type: type,
    img: powerUpImgs[type]
  };
  powerUps.push(powerUp);
}

function applyPowerUp(type) {
  if (type === 'health') {
    player.health = Math.min(player.health + 3, 10);
  } else if (type === 'damage') {
    player.damageBoost = 5;
    setTimeout(() => player.damageBoost = 0, 10000);
  } else if (type === 'speed') {
    player.speedBoost = 2;
    setTimeout(() => player.speedBoost = 0, 10000);
  }
}

function checkPowerUps() {
  for (let i = powerUps.length - 1; i >= 0; i--) {
    let p = powerUps[i];
    if (collision(player, p)) {
      applyPowerUp(p.type);
      powerUps.splice(i, 1);
    }
  }
}

// --- Skins unlocken ---
let kills = 0;
let unlockedSkins = ['default'];

function checkUnlockSkins() {
  if (kills >= 10 && !unlockedSkins.includes('coolSkin')) {
    unlockedSkins.push('coolSkin');
    alert('Je hebt een nieuwe skin vrijgespeeld!');
  }
}

// --- Game over ---
function gameOver() {
  gameOverSound.play?.();
  alert('Game over! Je score: ' + kills);
  player.health = 10;
  kills = 0;
  waveNumber = 1;
  enemiesPerWave = 5;
  spawnWave();
}

// --- Geluidseffecten ---
const shootSound = new Audio('shoot.mp3');
const hitSound = new Audio('hit.mp3');
const gameOverSound = new Audio('gameover.mp3');

// Vergeet niet om in je update-loop en game-loop onderstaande functies te integreren:
// checkWave();
// checkPowerUps();
// checkUnlockSkins();
// check health voor gameOver();

// En in je schietfunctie gebruik maken van deze nieuwe shoot functie.
// En spawnPowerUp() kun je oproepen bijvoorbeeld na elke wave of random tijd.
function startGame() {
  // Herstart alles als nodig
  player.health = 100;
  player.score = 0;
  player.x = 100;
  player.y = 300;
  enemies.length = 0;
  bullets.length = 0;
  lastEnemySpawn = 0;
  gameOver = false;
  requestAnimationFrame(gameLoop);
}

function setPlayerSkin(index) {
  player.skin = index;
  // Laad andere sprites op basis van gekozen skin
  if (index === 0) {
    player.leftImage = player1Left;
    player.rightImage = player1Right;
  } else if (index === 1) {
    player.leftImage = player2Left;
    player.rightImage = player2Right;
  } else if (index === 2) {
    player.leftImage = player3Left;
    player.rightImage = player3Right;
  }
}
window.addEventListener('DOMContentLoaded', () => {
  const mainMenu = document.getElementById('mainMenu');
  const skinMenu = document.getElementById('skinMenu');
  const levelMenu = document.getElementById('levelMenu');
  const gameCanvas = document.getElementById('gameCanvas');

  const startBattleBtn = document.getElementById('startBattleBtn');
  const selectSkinBtn = document.getElementById('selectSkinBtn');
  const levelBtn = document.getElementById('levelBtn');
  const backHomeBtn = document.getElementById('backHomeBtn');
  const closeSkinBtn = document.getElementById('closeSkinBtn');
  const closeLevelBtn = document.getElementById('closeLevelBtn');
  const skinButtons = document.querySelectorAll('.skinBtn');

  startBattleBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    gameCanvas.style.display = 'block';
    skinMenu.style.display = 'none';
    levelMenu.style.display = 'none';
    startGame(); // Zorg dat deze functie bestaat
  });

  selectSkinBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    skinMenu.style.display = 'block';
  });

  levelBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    levelMenu.style.display = 'block';
  });

  backHomeBtn.addEventListener('click', () => {
    window.location.href = 'gameforming.html';
  });

  closeSkinBtn.addEventListener('click', () => {
    skinMenu.style.display = 'none';
    mainMenu.style.display = 'block';
  });

  closeLevelBtn.addEventListener('click', () => {
    levelMenu.style.display = 'none';
    mainMenu.style.display = 'block';
  });

  skinButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      setPlayerSkin(index); // Zorg dat deze functie bestaat
      skinMenu.style.display = 'none';
      mainMenu.style.display = 'block';
    });
  });
});
// === KNOP-ACTIES ===
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("main-menu");
  const canvas = document.getElementById("game-canvas");
  const skinMenu = document.getElementById("skin-menu");

  // Battle-knop
  document.getElementById("battle-button").addEventListener("click", () => {
    menu.style.display = "none";
    canvas.style.display = "block";
    gameRunning = true;
    requestAnimationFrame(gameLoop);
  });

  // Skin selecteren
  document.getElementById("select-skin-button").addEventListener("click", () => {
    menu.style.display = "none";
    skinMenu.style.display = "block";
  });

  // Terug naar menu vanuit skin-menu
  document.getElementById("back-to-menu-button").addEventListener("click", () => {
    skinMenu.style.display = "none";
    menu.style.display = "block";
  });

  // Skin kiezen
  document.querySelectorAll(".skin-option").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      currentSkin = index;
      skinMenu.style.display = "none";
      menu.style.display = "block";
    });
  });

  // Terug naar homepage
  document.getElementById("home-button").addEventListener("click", () => {
    window.location.href = "gameforming.html";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const mainMenu = document.getElementById("main-menu");
  const skinMenu = document.getElementById("skin-menu");
  const gameCanvas = document.getElementById("game-canvas");

  document.getElementById("battle-button").addEventListener("click", () => {
    mainMenu.style.display = "none";
    gameCanvas.style.display = "block";
    startGame(); // Zorg ervoor dat deze functie bestaat
  });

  document.getElementById("select-skin-button").addEventListener("click", () => {
    mainMenu.style.display = "none";
    skinMenu.style.display = "block";
  });

  document.getElementById("back-to-menu-button").addEventListener("click", () => {
    skinMenu.style.display = "none";
    mainMenu.style.display = "block";
  });

  document.querySelectorAll(".skin-option").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      setPlayerSkin(index); // Zorg ervoor dat deze functie bestaat
      skinMenu.style.display = "none";
      mainMenu.style.display = "block";
    });
  });

  document.getElementById("home-button").addEventListener("click", () => {
    window.location.href = "gameforming.html";
  });
});









