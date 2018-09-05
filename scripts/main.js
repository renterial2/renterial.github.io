var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/DallasCowboys.jpg') {
      myImage.setAttribute ('src','images/dallas-cowboys-helmet.jpg');
    } else {
      myImage.setAttribute ('src','images/DallasCowboys.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to Cowboy Nation ' + myName + "!";
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Cowboy Nation ' + storedName + "!";
  }
  myButton.onclick = function() {
    setUserName();
  }