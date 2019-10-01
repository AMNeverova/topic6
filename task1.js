let getSum = (arr) => {
    let max;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum = sum + arr[j];
            if (max == undefined) {
                max = sum;
            };
            if (sum > max) {
                max = sum;
            }
        }
    }
    return max;
}

console.log(getSum([-1, -1, -2, 4, -3, 5, 6, -10]));