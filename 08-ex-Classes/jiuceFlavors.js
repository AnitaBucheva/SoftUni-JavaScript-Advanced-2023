function bottlingJuice(input) {
    let flavors = {};
    let bottledFlavors = [];

    for (const line of input) {
        const [flavor, quantity] = line.split(' => ');

        if (!flavors[flavor]) {
            flavors[flavor] = 0;
        }

        flavors[flavor] += Number(quantity);

        if (flavors[flavor] / 1000 >= 1 && !bottledFlavors.includes(flavor)) {
            bottledFlavors.push(flavor);
        }
    }

    bottledFlavors.forEach(flavor => console.log(`${flavor} => ${Math.trunc(flavors[flavor] / 1000)}`));
}