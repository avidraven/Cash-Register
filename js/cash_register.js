var myCalc = Calculator();
var answer = false;
var decimalinput = false;

zero.addEventListener('click',function() {if (parseFloat(display.innerHTML) !== 0 || display.innerHTML.indexOf('.') !== -1) {clearDisplay(); display.innerHTML += 0;} });

one.addEventListener('click',function() {clearDisplay(); display.innerHTML += 1;});

two.addEventListener('click',function() {clearDisplay(); display.innerHTML += 2;});

three.addEventListener('click',function() {clearDisplay(); display.innerHTML += 3;});

four.addEventListener('click',function() {clearDisplay(); display.innerHTML += 4;});

five.addEventListener('click',function() {clearDisplay(); display.innerHTML += 5;});

six.addEventListener('click',function() {clearDisplay(); display.innerHTML += 6;});

seven.addEventListener('click',function() {clearDisplay(); display.innerHTML += 7;});

eight.addEventListener('click',function() {clearDisplay(); display.innerHTML += 8;});

nine.addEventListener('click',function() {clearDisplay(); display.innerHTML += 9;});

decimal.addEventListener('click',function() {if (display.innerHTML.indexOf('.') === -1 || answer === true) {decimalinput = true; clearDisplay(); display.innerHTML += '.';}});

doubleZero.addEventListener('click',function() {if (display.innerHTML.indexOf('.') === -1) {display.innerHTML += '.00';}});

clear.addEventListener('click',myCalc.clear);

add.addEventListener('click',function() {
   myCalc.add();
   answer = true;
});

subtract.addEventListener('click', function() {
   myCalc.subtract();
   answer = true;
});

multiply.addEventListener('click', function() {
   myCalc.multiply();
   answer = true;
});

divide.addEventListener('click', function() {
   myCalc.divide();
   answer = true;
});

equals.addEventListener('click', function() {
  myCalc.equals();
  answer = true;
});

getBalance.addEventListener('click', function() {
  myCalc.getBalance();
  answer = true;
});

depositCash.addEventListener('click', function() {
    myCalc.deposit();
    answer = true;
});
withdrawCash.addEventListener('click', function() {
    myCalc.withdraw();
    answer = true;
});

function clearDisplay() {
  console.log(answer);
  if ((parseFloat(display.innerHTML) === 0 && display.innerHTML.indexOf('.') === -1) || answer === true) {
    if (decimalinput === true) {
      display.innerHTML = 0;
      decimalinput = false;
    }else{
      display.innerHTML = null;
    }
    answer = false;
  }
}