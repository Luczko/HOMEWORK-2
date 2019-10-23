// 2 Create a function that returns sum of first and last elements of given array.
// let numbers = [1,6,23,8,4,8,3,7];
// function firstLast(arr) {
//     return arr[0] + arr[arr.length - 1];
//     }
// console.log(firstLast(numbers));

// // 3 Create a function that takes a number and return factorial of that number.
// let number = 5
// function factorial(x) {
//     let result = 1
//     let i=1;
//     while(i<=x){
//         result = result * i;
//         i++;
//     }
//     return result
// }
// console.log(factorial(number));

// // 4 Create a function that returns given array in reverse order. // no build in functions
// let numbers = [1,6,23,8,4,8,3,7];
// function reverseArray(arr) {
//     let reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }
// console.log(reverseArray(numbers));

// // 5 Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array
// let numbers = [1,3,4,1,0,3];
// function createNewTable(arr) {
//     let newNumbers = [];
//     for (let i=0; i<arr.length; i+=2) {
//         newNumbers.push(arr[i]+arr[i+1]);
//     }
//     return newNumbers;
// }
// console.log(createNewTable(numbers));

// // 6 For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
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

// // 7 Create a function the return one random element from given array. // use random function 
// let numbers = [1,6,23,8,4,8,3,7];
// function random(arr) {
//     return arr[Math.floor(Math.random() * numbers.length)];
// }
// console.log(random(numbers));


// // 11 Create a function that will return the current day name in Polish. 
// let day = new Date()
// function currentDay() {
//     let polishDays = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota",];
//     return polishDays[day.getDay()];
// }
// console.log(currentDay());

// // 12 Create a function that tells us how many days till Friday ☺
// let day = new Date()
// function currentDay() {
//     let count = [5-day.getDay()];
//     return count[0];
// }
// console.log(currentDay());