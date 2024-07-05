// 1. Convert String to a Number  

const stringToNumber = function (str) {
    let num = Number(str);
    return num;
}

// 2. Make negative

function makeNegative(num) {
    if (num > 0) {
        return num * (-1);
    } else {
        return num;
    }
}

// 3. Messi Goals

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    let totalGoalsScore = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
    return totalGoalsScore;
}

// 4. Game Move

function move(position, roll) {
    let newPosition = position + roll * 2;
    return newPosition;
}

// 5. Personalized Message

function greet(name, owner) {
    if (name === owner) {
        return "Hello boss";
    } else {
        return "Hello guest";
    }
}

// 6. Keep Hydrated

function litres(time) {
    return Math.floor(0.5 * time);
}

// 7. Convert a string to an array

function stringToArray(string) {
    return string.split(" ");
}

// 8. DNA to RNA Conversion

function DNAtoRNA(dna) {
    if (dna.includes('T')) {
        return dna.replace(/T/g, 'U');
    } else {
        return dna;
    }
}

// 9. Find Maximum and Minimum Values of a List

var min = function (list) {
    return Math.min(...list);
}

var max = function (list) {
    return Math.max(...list);
}

// ==== solution without using spread operator. Just using loops ====

var min = function(list) {
    if (list.length === 0) return undefined; // Перевірка на пустий список
    let minValue = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < minValue) {
            minValue = list[i];
        }
    }
    return minValue;
}

var max = function(list) {
    if (list.length === 0) return undefined; // Перевірка на пустий список
    let maxValue = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > maxValue) {
            maxValue = list[i];
        }
    }
    return maxValue;
}

// ==== olso solution with using reduce method ====

var min = function(list) {
    return list.reduce((minValue, current) => (current < minValue ? current : minValue), list[0]);
}

var max = function(list) {
    return list.reduce((maxValue, current) => (current > maxValue ? current : maxValue), list[0]);
}


const cars = ["Nissan 350z", "Audi Q8", "MB CLS", "Porshe 911"];
cars[cars.length] ="Toyota Supra";
cars.push("Tesla X");

for (let i = cars.length - 1; i < cars.length; i++){
    if (cars[i][0] === "P") {
        return [i];
    }
    console.log(cars[i]);
}