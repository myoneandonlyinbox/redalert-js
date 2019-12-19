let gameMap = document.getElementById("gameMap");
let ctx = gameMap.getContext("2d");


let x = gameMap.width / 2;
let y = gameMap.height - 30;

let zaidLogic = true;

let dx = 2;
let dy = -2;

// This function will redraw all objects within the game as set - as per the interval.


function drawTank() {
    base_image = new Image();
    base_image.src = 'images/car.png';
    ctx.drawImage(base_image, 10, y, 50, 100);
}

function draw() {
    ctx.clearRect(0, 0, gameMap.width, gameMap.height);
    drawTank();

    if (zaidLogic) {
        x += dx;
        y += dy;
    } else {
        y -= dy
    }

    if (y === 0) {
        zaidLogic = false;
    } else if (y === 480 - 100) {
        zaidLogic = true;
    }
}
setInterval(draw, 8);