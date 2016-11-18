//CALCULATOR MODULE
console.log("SANITY");

function Calculator() {
  var _memory = 0;
  var _total = 0;
  var _balance = 0;
  var _operator =null;
  clear();

  function deposit() {
    _memory = parseFloat(display.innerHTML);
    // there must be a better way to reliably get a number to two decimals
    _balance += parseFloat((Math.round(_memory * 100) / 100).toFixed(2));
    clear();
  }

  function withdraw() {
    _memory = parseFloat(display.innerHTML);
    _balance -= parseFloat((Math.round(_memory * 100) / 100).toFixed(2));
    if (_balance < 0) {
      _balance = 0;
    }
    clear();
  }

  function getBalance() {
    clear();
    _total = _balance.toFixed(2);
    display.innerHTML = _total;
    return _total;
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
