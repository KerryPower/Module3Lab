function unique(duplicatesArray) {
    return duplicatesArray.filter((item, index) => duplicatesArray.indexOf(item) === index);
}

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const carBrands = ['volvo', 'ford', 'bmw', 'audi', 'tesla', 'chevrolet', 'holden','volvo', 'ford', 'bmw', 'audi', 'tesla', 'chevrolet', 'holden', 'volvo', 'ford', 'bmw', 'audi', 'tesla', 'chevrolet', 'holden']

console.log(unique(carBrands))