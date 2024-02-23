function sumOfNumbers(n, m) {
    let numN = Number(n);
    let numM = Number(m);

    let result = 0;
    for (let index = numN; index <= numM; index++) {
        result += index;
    }
    console.log(result);
}
sumOfNumbers('1', '5');