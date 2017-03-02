var myImage = document.querySelector('img');
var myLicense = document.getElementById('license');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/breaching_whale.jpg') {
	myImage.setAttribute('src','images/ground_pangolin.jpg');
	myLicense.setAttribute('href', 'https://flic.kr/p/M6EyUH');
	myLicense.textContent = 'cc-by-2.0';
    } else {
	myImage.setAttribute ('src', 'images/breaching_whale.jpg');
	myLicense.setAttribute('href', 'https://creativecommons.org/licenses/by-nd/2.0/');
	myLicense.textContent = 'cc-by-nd-2.0';
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

myButton.onclick = function() {
    setUserName();
}
