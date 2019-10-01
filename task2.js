let checkAlfinMove = (startPoint, endPoint) => {
    let isPossible = false;
    let lettersArray = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let startPointNumber = parseInt(lettersArray.indexOf(startPoint[0]) + startPoint[1]);
    let endPointNumber = parseInt(lettersArray.indexOf(endPoint[0]) + endPoint[1]);
    let diff = Math.abs(endPointNumber - startPointNumber);
    if (diff % 9 == 0 || diff % 11 == 0 ) {
        isPossible = true;
    } 
    return isPossible;
}

console.log(checkAlfinMove('d6', 'e5'));