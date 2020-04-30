
function moveDodgerLeft() {   
    const dodger = document.getElementById("dodger");
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers);

    dodger.style.left = `${left - 1}px`;    
}

function moveDodgerRight() {
    let dodger = document.getElementById("dodger");
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers);

    dodger.style.left = `${right + 1}px`;  
}




