const myHtml = document.querySelector('html')
let myH1 = document.getElementsByTagName('h1')

console.log(myHtml);

console.log(myH1)
console.log("innerHTML: ", myH1[0].innerHTML)
console.log("textContent: ", myH1[0].textContent)
console.log("innerText: ", myH1[0].innerText)