const checkPossibleEquality = (string1, string2) => {
    let array1 = string1.toLowerCase().split('');
    let array2 = string2.toLowerCase().split('');
    if (array1.length !== array2.length) {
        return false;
    }
    const array1Even = array1.filter((letter, index, array) => index % 2 == 0).sort();
    const array1Odd = array1.filter((letter, index, array) => index % 2 == 1).sort();
    const array1Full = array1Even.concat(array1Odd)
    const array2Even = array2.filter((letter, index, array) => index % 2 == 0).sort();
    const array2Odd = array2.filter((letter, index, array) => index % 2 == 1).sort();
    const array2Full = array2Even.concat(array2Odd);

    return array1Full.join('') === array2Full.join('');
}

console.log(checkPossibleEquality('abcabcabc', 'bcababcac'));