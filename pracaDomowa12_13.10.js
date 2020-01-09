// Exc 1 From years in array check for leap years [1974, 1900, 1985, 2000]
// 2000
let years = [1974, 1900, 1985, 2000];
for(let i=0; i<years.length; i++){
    if((years[i]%100!=0 && years[i]%4===0) || years[i]%400===0){
        console.log(years[i]);
    }
}

// Exc 2 Calculate factorial of 7.
// wynik = 5040
let i = 1;
let result = 1;
while (i<=7){
    result = result * i;
    i++;
}
console.log(result);

// Exc 3 Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]
// suma = 37
let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];
let summary = 0
 for(let i=0; i<numbers.length; i++){
     if (numbers[i]%2!=0) {
    summary = summary + numbers[i]
}
}
console.log(summary);

// 4 Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.
// 1, 98
let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];
let max = 0;
let min = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
    max = numbers[i];
        if (i===0) {
        min=numbers[i];
        }
        if (numbers[i]<min) {
        min=numbers[i];
        }
        }
    }
console.log(max, min);

// Exc 5 Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. 
// Politechnika
let longest = "";
let strings = ["Karol", "Adam", "Rogowski", "Politechnika", "Super", "Weekend"];

  for (i=0; i<strings.length; i++){
      if (strings[i].length > longest.length){
        longest = strings[i];
      }
  }
  console.log(longest);
  
// Exc 6 Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98].
// 5, 9, 11
let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];
let max = 0;
let maxIndex = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
     max = numbers[i];
    }
}
for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === max) {
        maxIndex = i
        console.log(maxIndex);
        }
}

// Exc 7 Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]
// wynik = 45.14
let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];
let even = []
let summary = 0
 for(let i=0; i<numbers.length; i++){
     if (numbers[i]%2===0) {
    even.push(numbers[i]);
    summary = summary + numbers[i]
}
}
console.log(summary / even.length);

// Exc 8 Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]
// wynik = 7.4
let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];
let even = []
let summary = 0
 for(let i=0; i<numbers.length; i++){
     if (i%2===0 && i!=0) {
    even.push(numbers[i]);
    summary = summary + numbers[i]
}
}
console.log(summary / even.length);

// Exc 9 With a given start value of 0, iterate the array and add even items and substract odd ones.
// wynik = 279
let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];
let summary = 0;
 
for(let i=0; i<numbers.length; i++){
    if (numbers[i]%2===0) {
   summary = summary + numbers[i];
}
else {
    summary = summary - numbers[i];
}
}
console.log(summary);
