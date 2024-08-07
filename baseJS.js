/*=== Day 1 ===*/

//#1: create your first JS function helloWorld

function helloWorld() {
    var str = "Hello World!";
    console.log(str);
}

//#2: Basic data types--Number

let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1() {
    let a = v1,
        b = v1;
    return a + b;
}

//Please refer to the example above to complete the following functions
function equal2() {
    let a = v3, //set number value to a
        b = v1; //set number value to b
    return a - b;
}

function equal3() {
    let a = v1, //set number value to a
        b = v5; //set number value to b
    return a * b;
}

function equal4() {
    let a = v4, //set number value to a
        b = v5; //set number value to b
    return a / b;
}

function equal5() {
    let a = v2, //set number value to a
        b = v4; //set number value to b
    return a % b;
}

//#3: Basic data types--String

var a1 = "A", a2 = "a", b1 = "B", b2 = "b", c1 = "C", c2 = "c", d1 = "D", d2 = "d", e1 = "E", e2 = "e", n1 = "N", n2 = "n"
function Dad() {
    //select some variable to combine "Dad"
    return d1 + a2 + d2;
}
function Bee() {
    //select some variable to combine "Bee"
    return b1 + e2 + e2;
}
function banana() {
    //select some variable to combine "banana"
    return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1() {
    //the answer should be "yes" or "no"
    return "no";
}
function answer2() {
    //the answer should be "yes" or "no"
    return "no";
}
function answer3() {
    //the answer should be "yes" or "no"
    return "yes";
}

//#4: Basic data types--Array

function getLength(arr) {
    //return length of arr
    return arr.length;
}
function getFirst(arr) {
    //return the first element of arr
    return arr[0];
}
function getLast(arr) {
    //return the last element of arr
    return arr[arr.length - 1];
}
function pushElement(arr) {
    var el = 1;
    arr.push(el);

    return arr
}
function popElement(arr) {
    var dropElement = arr.pop();

    return arr;
}

//#5: Basic data types--Object

let obj = {
    name: "dog",
    legs: 4,
    color: "white"
};

function animal(obj) {
    return "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs.";
}

//#6: Basic data types--Boolean and conditional statements if..else

function trueOrFalse(val) {
    if (!val) {
        return "false";
    } else {
        return "true";
    }
}

//#7: if..else and ternary operator