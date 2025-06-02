const myHtml = document.querySelector('html')
let myH1 = document.getElementsByTagName('h1')
const topSection = document.getElementsByClassName('top-section')
const navbar = document.getElementById('navbar');
const otherNavbar = document.querySelector(".navbar")

console.log(myHtml);

console.log(myH1)
console.log("innerHTML: ", myH1[0].innerHTML)
console.log("textContent: ", myH1[0].textContent)
console.log("innerText: ", myH1[0].innerText)

console.log("top section: ", topSection);

console.log("navbar: ", navbar);
console.log("otherNavbar: ", otherNavbar);