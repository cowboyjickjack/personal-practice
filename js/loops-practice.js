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

let test = document.getElementById('test');
let htmlString = '';
for (let i = 1; i <= 5; i++) {
    htmlString += `<div class="test">hello</div>`;
}
test.innerHTML = htmlString;
