// console.log('This is separate js file');


// Option : 1 Directly set on the HTML element
// <button onclick="console.log(65)">Another Button</button>

// option:2 add on click
// <button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option : 3
// <button id="make-blue">Make Blue</button>
const makeBlueButton = document.getElementById('make-blue');
// console.log(makeBlueButton);
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}



// option : 3 Another way
// <button id="make-purple">Make Purple</button>
const purpleButton = document.getElementById('make-purple');
//console.log(purpleButton);
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}



// Option : 4
// <button id="make-pink">Make pink</button>
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = "pink"
}



// Option : 4 Another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor='green';
});