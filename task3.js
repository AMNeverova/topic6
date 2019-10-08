const checkPossibleEquality = (string1, string2) => {
    let array1 = string1.toLowerCase().split('');
    let array2 = string2.toLowerCase().split('');
    let isPossible = true;
    if (array1.length !== array2.length) {
        return false;
    }
    array1Even = array1.filter((letter, index, array) => index % 2 == 0).sort();
    array1Odd = array1.filter((letter, index, array) => index % 2 == 1).sort();
    array1Full = array1Even.concat(array1Odd)
    array2Even = array2.filter((letter, index, array) => index % 2 == 0).sort();
    array2Odd = array2.filter((letter, index, array) => index % 2 == 1).sort();
    array2Full = array2Even.concat(array2Odd);

    for (let i = 0; i < array1Full.length; i++) {
        if (array1Full[i] == array2Full[i]) {
            continue
        } else {
            return false
        }
    }
    return isPossible;
}

console.log(checkPossibleEquality('qWerty', 'ytqwer'));