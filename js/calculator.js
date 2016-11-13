//CALCULATOR MODULE
console.log("SANITY");

function Calculator() {
  var _total = 0;
  var _balance = 0;

  function load(x) {
    _total = x;
  }

  function deposit(x) {
    _balance += x;
  }

  function getBalance() {
    return _balance;
  }

  function equals() {
    return _total;
  }

  function withdraw(x) {
    _balance -= x;
  }

  //MATH FUNCTIONS

  function add(x) {
    _total += x;
  }

  function subtract(x) {
    _total -= x;
  }

  function multiply(x) {
    _total = _total * x;
  }

  function divide(x) {
    _total = _total / x;
  }

  function clear() {
    _total = 0;
    return _total;
  }

  return {
    load: load,
    deposit: deposit,
    withdraw: withdraw,
    getBalance: getBalance,
    equals: equals,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    clear: clear
  };
}
