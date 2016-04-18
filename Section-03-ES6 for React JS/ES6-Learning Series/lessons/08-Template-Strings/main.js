/**
  * Arrow functions have shorter syntax than function expressions.
  * These functions also lexically bind `this` value and are always anonymous.
  */
  
var x = "foo";
var y = "bar";

// es5
var join = x + ' ' + y; // foo bar

// es6
var join1 = `${x} ${y}`; // foo bar
console.log(join1);
console.log(join);