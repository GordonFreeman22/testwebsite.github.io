// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

// Personalized welcome message code

const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");
let myName = localStorage.getItem("name");

function setUserName() {
    myName = prompt("Please enter your name.");
    if (myName) {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

myButton.addEventListener("click", setUserName);

if (myName) {
    myHeading.textContent = `Mozilla is cool, ${myName}`;
} else {
    setUserName();
}
