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
};

// TODO: Create a loop that decrements by five, starting at 100 and ends at 5.
 for (let i = 105; i >= 1; i-=5) {
        // console.log(i - 5);
    };

 // TODO: