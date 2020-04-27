// Your code here

let dodger = document.getElementById('dodger');

dodger.style.backgroundColor = "#FF69B4";


document.addEventListener('keydown', logEvent);

function logEvent(e) {
    switch (e.key) {
        case "ArrowLeft": moveDodgerLeft()
            break;
        case "ArrowRight": moveDodgerRight()
            break;
        case "ArrowUp": moveDodgerUp()
            break;
        case "ArrowDown": moveDodgerDown()
            break;
    }
}

function moveDodgerLeft() {
    const currLeft = parseInt(dodger.style.left);
    if (currLeft >= 10) {
        dodger.style.left = `${currLeft - 10}px`;
    }
    else {
        dodger.style.left = "0px";
    }
}

function moveDodgerRight() {
    const currLeft = parseInt(dodger.style.left);
    if (currLeft < 360) {
        dodger.style.left = `${currLeft + 10}px`;
    }
    else {
        dodger.style.left = "360px";
    }
}

function moveDodgerUp() {
    const currBottom = parseInt(dodger.style.bottom);
    if (currBottom <= 370) {
        dodger.style.bottom = `${currBottom + 10}px`;
    }
    else {
        dodger.style.Bottom = "370px";
    }
}

function moveDodgerDown() {
    const currBottom = parseInt(dodger.style.bottom);
    if (currBottom >= 10) {
        dodger.style.bottom = `${currBottom - 10}px`;
    }
    else {
        dodger.style.Bottom = "0px";
    }
}