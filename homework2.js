// 1 Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number
let numbers = [1,6,23,8,4,8,3,7];
function summary(arr) {
    let result = 0
    for (let i=0; i<arr.length; i++) {
        result = result + arr[i];
    }
    return result;
}
console.log(summary(numbers));

// 2 Create a function that returns sum of first and last elements of given array.
let numbers = [1,6,23,8,4,8,3,7];
function firstLast(arr) {
    return arr[0] + arr[arr.length - 1];
    }
console.log(firstLast(numbers));

// 3 Create a function that takes a number and return factorial of that number.
let number = 5
function factorial(x) {
    let result = 1
    let i=1;
    while(i<=x){
        result = result * i;
        i++;
    }
    return result
}
console.log(factorial(number));

// 4 Create a function that returns given array in reverse order. // no build in functions
let numbers = [1,6,23,8,4,8,3,7];
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray(numbers));

// 5 Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array
let numbers = [1,3,4,1,0,3];
function createNewTable(arr) {
    let newNumbers = [];
    for (let i=0; i<arr.length; i+=2) {
        newNumbers.push(arr[i]+arr[i+1]);
    }
    return newNumbers;
}
console.log(createNewTable(numbers));

// 6 For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
// let numbers = [1,3,4,1,0];
// function createNewTable(arr) {
//     let newNumbers = [];
//     for (let i=1; i<arr.length; i+=2) {
//         newNumbers.push(arr[i]+arr[i-1]);
//     }
//     newNumbers.push(arr[arr.length-1]+arr[arr.length-1]);
//     return newNumbers;
// }
// console.log(createNewTable(numbers));
let numbers = [1,3,4,1,0];
function createNewTable(arr) {
    let newNumbers = [];
    for (let i=0; i<arr.length; i+=2) {
        if (arr[i+1]===undefined) {
            newNumbers.push(arr[i]+arr[i]);
        }
        else {
            newNumbers.push(arr[i]+arr[i+1])
        }
    }
    return newNumbers;
}
console.log(createNewTable(numbers));

// 7 Create a function the return one random element from given array. // use random function 
let numbers = [1,6,23,8,4,8,3,7];
function random(arr) {
    return arr[Math.floor(Math.random() * numbers.length)];
}
console.log(random(numbers));

// 8 Create a function that takes two parameters: array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.
let numbers = [1,6,23,8,4,8,3,7];
let attempts = 5;
function randomLowest(arr, att) {
    let randomArr = [];
    for (let i=0; i<att; i++){
        let idx = Math.floor(Math.random()*arr.length);
        randomArr.push(arr[idx]);
    }
    return Math.min(...randomArr);
}
console.log(randomLowest(numbers, attempts));

// 9 Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array. 
let numbers = [1,6,23,8,4,8,3,7];
function remove(arr) {
    let newArray = [];
    for (let i=0; i<=arr.length; i++) {
        let idx = Math.floor(Math.random()*arr.length);
        newArray.push(arr[idx]);
        arr.splice(idx,1);
        i=0;
    }
    return newArray;
}
console.log(remove(numbers));

// 10 Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)
let numbers = [1,6,23,8,4,8,3,7];
function randomOps(arr) {
    let result = arr[0];
    for (let i=0; i<arr.length; i++) {
        let factor = Math.random();
        if (factor <= 0.5) {
            result = result + arr[i];
        }
        else {
            result = result - arr[i];
        }
    }
    return result;
}
console.log(randomOps(numbers));

// 11 Create a function that will return the current day name in Polish. 
let day = new Date()
function currentDay() {
    let polishDays = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota",];
    return polishDays[day.getDay()];
}
console.log(currentDay());

// 12 Create a function that tells us how many days till Friday ☺
let day = new Date()
function currentDay() {
    let count = [5-day.getDay()];
    return count[0];
}
console.log(currentDay());

// 13 Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations. 
let a = 1, b = 2;
function retObject(x,y) {
    let obj = {
        add: x + y,
        sub: x - y,
        mult: x * y,
        div: x / y,
    }
    return obj
}
console.log(retObject(a,b));
