"use strict"

// TODO: Write a JavaScript program that accept two integers and display the larger integer.
const biggerNumber = (x, y) => {
    if (parseInt(x) > parseInt(y)) {
        return x;
    } else {
        return y;
    }
};

// TODO: Write a JavaScript conditional statement to find the sign of
//  product of three numbers. Display an alert box with the specified sign.
const  findTheSign = (x, y, z) => {
    return (x * y * z);
}

// TODO: Figuring out how to loop with jQuery inputs

// let test = document.getElementById('test');
// let htmlString = '';
// for (let i = 1; i <= 5; i++) {
//     htmlString += `<div class="test">hello</div>`;
// }
// test.innerHTML = htmlString;

// TODO: Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
// Sample numbers : 0, -1, 4
function sortThreeNumbers (x, y, z) {
    if (x>y && x>z) {
        if (y>z) {
            console.log(x + ", " + y + ", " +z);
        } else {
            console.log(x + ", " + z + ", " +y);
        }
    } else if (y>x && y >z) {
        if (x>z) {
            console.log(y + ", " + x + ", " +z);
        } else {
            console.log(y + ", " + z + ", " +x);
        }
    } else if (z>x && z>y) {
        if (x>y) {
            console.log(z + ", " + x + ", " +y);
        } else {
            console.log(z + ", " + y + ", " +x);
        }
    }
}

// TODO: Create a loop that decrements by five, starting at 100 and ends at 5.
 for (let i = 100; i >= 10; i-=5) {
        // console.log(i - 5);
    }

 // TODO: Write a JavaScript for loop that will iterate from 0 to 15.
//   For each iteration, it will check if the current number is odd or even,
//   and display a message to the screen.
const evenOrOdd = () => {
    for (let i = 0; i <= 15; i++){
        if (i % 2 === 0){
            console.log(`${i} is even`);
        } else {
            console.log(`${i} is odd`);
        }
    }
}
// TODO: Write a JavaScript program which computes the average marks of the following students.
//   Then, this average is used to determine the corresponding grade.
const getGrade = (grade) => {
     if (grade === 100 || grade >= 90 && grade <= 100){
         return "A"
     } else if (grade <= 89 && grade >= 80){
        return "B"
     } else if (grade <= 79 && grade >= 70){
         return "C";
     } else if (grade <= 69 && grade >= 60){
         return "D";
     } else if (grade <= 59){
         return "F";
     } else {
         return "INVALID SCORE";
     }
}

// TODO: Write a JavaScript program which iterates the integers from 1 to 100.
//  But for multiples of three print "Fizz" instead of the number and
//  for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

const fizzBuzz = () => {
     for (let i = 1; i <= 100; i++){
         if (i % 15 === 0) console.log("FizzBuzz");
         else if (i % 3 === 0) console.log("Fizz");
         else if (i % 5 === 0) console.log("Buzz");
         else console.log(i);
     }
}

// TODO: Write a JavaScript program to construct the following pattern:
//  *
//  * *
//  * * *
//  * * * *
//  * * * * *

function starFun(){

}

