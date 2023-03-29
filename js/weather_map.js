(function () {

/** HTML LOOP FIVE TIMES **/
const loopFiveTimes = input => {
    let test = document.querySelector('#weather');
    let htmlString = '';
    for (let i = 1; i <= 5; i++) {
        htmlString += `<div>Day ${i}</div>`
    }
    test.innerHTML = htmlString;
};


})();