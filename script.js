let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");
let clear = document.querySelector(".clear");
let raise = document.querySelector(".raise");
let modulo = document.querySelector(".modulo");
let divide = document.querySelector(".divide");
let multiply = document.querySelector(".multiply");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let del = document.querySelector(".delete");
let dot = document.querySelector(".dot");
let equal = document.querySelector(".equal");
let display = document.querySelector(".js-calc");
let calculation = localStorage.getItem("calculation") || "";

one.addEventListener("click", function (){updateCalculation("1");});
two.addEventListener("click", function (){updateCalculation("2");});
three.addEventListener("click", function () {updateCalculation("3");});
four.addEventListener("click", function () {updateCalculation("4");});
five.addEventListener("click", function () {updateCalculation("5");});
six.addEventListener("click", function () {updateCalculation("6");});
seven.addEventListener("click", function () {updateCalculation("7");});
eight.addEventListener("click", function () {updateCalculation("8");});
nine.addEventListener("click", function () {updateCalculation("9");});
zero.addEventListener("click", function () {updateCalculation("0");});
dot.addEventListener("click", function () {updateCalculation(".");});
plus.addEventListener("click", function () {updateCalculation(" + ");});
minus.addEventListener("click", function () {updateCalculation(" - ");});
multiply.addEventListener("click", function () {updateCalculation(" * ");});
divide.addEventListener("click", function () {updateCalculation(" / ");});
modulo.addEventListener("click", function () {updateCalculation(" % ");});
raise.addEventListener("click", function () {updateCalculation(" ** ");});
equal.addEventListener("click", function () {(calculation = eval(calculation)),localStorage.setItem("calculation", calculation),displayCalculation();});
del.addEventListener("click", function () {deleteButton(), displayCalculation();});
clear.addEventListener("click", function () {(calculation = ""),displayCalculation(),localStorage.setItem("calculation", calculation);});

displayCalculation();

function updateCalculation(value) {
  calculation += value;

  displayCalculation();

  localStorage.setItem("calculation", calculation);
}

function displayCalculation() {
  display.innerHTML = calculation;
  if (calculation === "") {
    display.innerHTML = "0";
  }
}

function deleteButton() {
  var currentValue = display.innerHTML;
  var newValue = currentValue.slice(0, -1);
  display.innerHTML = newValue;
  calculation = newValue;
}
