let checkPossibleEquality = (string1, string2) => {
    let array1 = string1.split('');
    array1.unshift('');
    let array2 = string2.split('');
    array2.unshift('');
    let isPossible = true;
    if (array1.length == array2.length) {
        for (let i = 0; i < array1.length; i++) {
            if (i % 2 == 0) {
                if (array2.indexOf(array1[i]) % 2 == 0) {
                    continue;
                } else {
                    isPossible = false;
                    break;
                }
            }
            if (i % 2 == 1) {
                if (array2.indexOf(array1[i]) % 2 == 1) {
                    continue;
                } else {
                    isPossible = false;
                    break;
                }
            }
        }
    }
    return isPossible;
}

console.log(checkPossibleEquality('qwe', 'ewqr'));