//CALCULATOR MODULE
console.log("SANITY");

function Calculator() {
  var _memory = 0;
  var _total = 0;
  var _balance = 0;
  var _operator =null;
  clear();

  function deposit() {
    if (answer === false) {
      _memory = parseFloat(display.innerHTML);
      _balance += Math.round((_memory + 0.0001) * 100) / 100; //adding 0.0001 avoids JS floating point issue
      clear();
    }
  }

  function withdraw() {
    if (answer === false) {
      _memory = parseFloat(display.innerHTML);
      _balance -= Math.round((_memory + 0.0001) * 100) / 100;
      if (_balance < 0) {
        _balance = 0;
      }
      clear();
    }
  }

  function getBalance() {
    clear();
    _total = _balance;
    display.innerHTML = _total;
    // display.innerHTML = '$ ' + _balance;  //doesn't parse to number with parseFloat
    return _balance;
  }

  function equals() {
    if (answer === false) {
      _memory = parseFloat(display.innerHTML);
      if (_operator === add){
        _total += _memory;
      }else
      if (_operator === subtract){
        _total -= _memory;
      }else
      if (_operator === multiply){
        _total = _total * _memory;
      }else
      if (_operator === divide){
        _total = _total / _memory;
      }
      else{
        _total = _memory;
      }
    }else{
      _memory = _total;
    }

    display.innerHTML = _total;
    _operator = null;
    _memory = 0;

    return _total;
  }

  //MATH FUNCTIONS

  function add() {
    if (_operator !== null && answer === false) {
      _total = equals();
    }else{
      _total = parseFloat(display.innerHTML);
    }
    display.innerHTML = _total;
    _operator = add;
  }

  function subtract() {
    if (_operator !== null && answer === false) {
      _total = equals();
    }else{
      _total = parseFloat(display.innerHTML);
    }
    display.innerHTML = _total;
    _operator = subtract;
  }

  function multiply() {
    if (_operator !== null && answer === false) {
      _total = equals();
    }else{
      _total = parseFloat(display.innerHTML);
    }
    display.innerHTML = _total;
    _operator = multiply;
  }

  function divide() {
    if (_operator !== null && answer === false) {
      _total = equals();
    }else{
      _total = parseFloat(display.innerHTML);
    }
    display.innerHTML = _total;
    _operator = divide;
  }

  function clear() {
    _total = 0;
    _memory = 0;
    _operator = null;
    display.innerHTML = 0;
  }

return {
  deposit: deposit,
  withdraw: withdraw,
  getBalance: getBalance,
  equals: equals,
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  clear: clear,
};
}
