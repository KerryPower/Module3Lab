const animals = ['Tiger', 'Giraffe']
//3a
animals.push('Elephant', 'Zebra')
//3b
animals.unshift('Gazelle', 'WilderBeast')
//3c
animals.sort()
//3d
function replaceMiddleAnimal(newValue) {
    if (animals.length % 2 === 0) {
        return animals;
    }
    animals[animals.length / 2 - 0.5] = newValue;
    return animals;
}
//3e
function findMatchingAnimals(beginsWith) {
    return animals.filter(item => item.startsWith(beginsWith.toUpperCase()) || item.startsWith(beginsWith.toLowerCase()));
}

const matchedAnimals = findMatchingAnimals('g');