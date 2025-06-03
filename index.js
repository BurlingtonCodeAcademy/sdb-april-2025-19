const myHtml = document.querySelector('html')
let myH1 = document.getElementsByTagName('h1')
const topSection = document.getElementsByClassName('top-section')
const navbar = document.getElementById('navbar');
const otherNavbar = document.querySelector(".navbar")
let myDiv = document.getElementById('my-div');
let myParagraph = document.createElement('p')

console.log(myHtml);

console.log(myH1)
console.log("innerHTML: ", myH1[0].innerHTML)
console.log("textContent: ", myH1[0].textContent)
console.log("innerText: ", myH1[0].innerText)

console.log("top section: ", topSection);

console.log("navbar: ", navbar);
console.log("otherNavbar: ", otherNavbar);

myH1[0].innerHTML = "Chris has short feet";

myH1[1].innerHTML = "spiderman is fun"

console.log("myDiv: ", myDiv);

myParagraph.textContent = "This is a new paragraph created by JavaScript";
navbar.prepend(myParagraph);
myDiv.appendChild(myH1[0]);
myDiv.appendChild(myH1[1]);
myDiv.appendChild(myH1[2]);
