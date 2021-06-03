const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// select items 
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// add event
btn.addEventListener('click', function () {
 let hexValue = "#";
 for (let i = 0;i<=5;i++) {
  hexValue += hex[getRandomNumber()];
 }
 document.body.style.backgroundColor = hexValue;
 color.textContent = hexValue;
 console.log(hexValue);
})

function getRandomNumber() {
 return Math.floor(Math.random() * hex.length);
}