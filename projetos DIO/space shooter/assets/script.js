const yourShip = document.querySelector(".player-shooter");
const playArea = document.querySelector("#main-play-area");
const aliensImg = [
  "https://github.com/AmandaLimaLuiz/AulasJS/blob/main/projetos%20DIO/space%20shooter/img/nav11.png?raw=true",
  "https://github.com/AmandaLimaLuiz/AulasJS/blob/main/projetos%20DIO/space%20shooter/img/nav22.png?raw=true",
  "https://github.com/AmandaLimaLuiz/AulasJS/blob/main/projetos%20DIO/space%20shooter/img/nav33.png?raw=true",
];

const instruction = document.querySelector(".instructions");
const startButtom = document.querySelector(".start-bottom");
let alienInterval;

function flyShip(event) {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    moveUp();
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    moveDown();
  } else if (event.key === " ") {
    event.preventDefault();
    fireLaser();
  }
}

function moveUp() {
  let topPosition = getComputedStyle(yourShip).getPropertyValue("top"); //pega a posição do css
  if (topPosition <= "0px") {
    return;
  } else {
    let position = parseInt(topPosition);
    position -= 50;
    yourShip.style.top = `${position}px`;
  }
}
function moveDown() {
  let topPosition = getComputedStyle(yourShip).getPropertyValue("top"); //pega a posição do css
  if (topPosition >= "560px") {
    return;
  } else {
    let position = parseInt(topPosition);
    position += 50;
    yourShip.style.top = `${position}px`;
  }
}

function fireLaser() {
  let laser = createLaserElement();
  playArea.appendChild(laser);
  moveLaser(laser);
}

function createLaserElement() {
  let xPosition = parseInt(
    window.getComputedStyle(yourShip).getPropertyValue("left")
  );
  let yPosition = parseInt(
    window.getComputedStyle(yourShip).getPropertyValue("top")
  );
  let newLaser = document.createElement("img");

  newLaser.src = "https://www.picng.com/upload/light/png_light_6412.png";
  newLaser.classList.add("laser");

  newLaser.style.left = `${xPosition}px`;
  newLaser.style.top = `${yPosition - 38}px`;

  return newLaser;
}

function moveLaser(laser) {
  let laserInterval = setInterval(() => {
    let xPosition = parseInt(laser.style.left);
    let aliens = document.querySelectorAll(".alien");

    aliens.forEach((alien) => {
      //comparando se cada alien foi atingido, se sim, troca o src da imagem
      if (checkLaser(laser, alien)) {
        alien.src ="https://github.com/AmandaLimaLuiz/AulasJS/blob/main/projetos%20DIO/space%20shooter/img/fire.png?raw=true";
        alien.classList.remove("alien");
        alien.classList.add("dead-alien");
      }
    });

    if (xPosition === 340) {
      laser.remove();
    } else {
      laser.style.left = `${xPosition + 8}px`;
    }
  }, 10);
}

function createAliens() {
  let newAlien = document.createElement("img");
  let alienSprite = aliensImg[Math.floor(Math.random() * aliensImg.length)]; //sorteio de inimigos
  newAlien.src = alienSprite;
  newAlien.classList.add("alien");
  newAlien.classList.add("alien-transition");
  newAlien.style.left = "370px";
  newAlien.style.top = `${Math.floor(Math.random() * 330) + 30}px`;
  playArea.appendChild(newAlien);
  moveAlien(newAlien);
}

function moveAlien(alien) {
  let moveAlienInterval = setInterval(() => {
    let xPosition = parseInt(
      window.getComputedStyle(alien).getPropertyValue("left")
    );
    if (xPosition <= 50) {
      if (Array.from(alien.classList).includes("dead-alien")) {
        alien.remove();
      } else {
        gameOver();
      }
    } else {
      alien.style.left = `${xPosition - 4}px`;
    }
  }, 30);
}

function checkLaser(laser, alien) {
  let laserTop = parseInt(laser.style.top);
  let laserLeft = parseInt(laser.style.left);
  let laserBottom = laserTop - 20;
  let alienTop = parseInt(alien.style.top);
  let alienLeft = parseInt(alien.style.left);
  let alienBottom = alienTop - 30;
  if (laserLeft != 340 && laserLeft + 40 >= alienLeft) {
    if (laserTop <= alienTop && laserTop >= alienBottom) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

startButtom.addEventListener("click", (event) => {
  playGame();
});

function playGame() {
  startButtom.style.display = "none";
  instruction.style.display = "none";
  window.addEventListener("keydown", flyShip);

  alienInterval = setInterval(() => {
    createAliens();
  }, 2000);
}

function gameOver() {
  window.removeEventListener("keydown", flyShip);

  clearInterval(alienInterval);

  let aliens = document.querySelectorAll(".alien");
  aliens.forEach((alien) => alien.remove());

  let lasers = document.querySelectorAll(".laser");
  lasers.forEach((laser) => laser.remove());

  setTimeout(() => {
    alert("Game Over");
    yourShip.style.top = "250px";
    startButtom.style.display = "block";
    instruction.style.display = "block";
  });
}
