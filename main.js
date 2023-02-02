let number1 = +prompt("введіть перше число");
let symbol = prompt("Введіть знак дії");
let number2 = +prompt("введіть друге число");

function calculator(number1, number2, symbol) {
  if (symbol === "/") {
    return number1 / number2;
  } else if (symbol === "*") {
    return number1 * number2;
  } else if (symbol === "+") {
    return number1 + number2;
  } else if (symbol === "-") {
    return number1 - number2;
  }
}

alert(calculator(number1, number2, symbol));
