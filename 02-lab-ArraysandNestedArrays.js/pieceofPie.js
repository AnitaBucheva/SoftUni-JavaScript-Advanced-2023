function pieceOfPie(array, firstEl, secondEl) {

    let firstCurrentEl = array.indexOf(firstEl);
    let secondCurrentEl = array.indexOf(secondEl);

    let result = array.slice(firstCurrentEl, secondCurrentEl + 1);

    return result;

}
console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));