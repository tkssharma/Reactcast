/**
  * Arrow functions have shorter syntax than function expressions.
  * These functions also lexically bind `this` value and are always anonymous.
  */
  
//Object Assign 
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

var o1 = { a: 1 };
var o2 = { [Symbol('foo')]: 2 };

var obj = Object.assign({}, o1, o2);
console.log(obj); // { a: 1, [Symbol("foo")]: 2 }

// Merge an object
let first = {name: 'Tony'};
let last = {lastName: 'Stark'};
let person = Object.assign(first, last);
ChromeSamples.log(person);

// Merge and overwrite equal keys
let b = Object.assign({foo: 0}, {foo: 1}, {foo: 2});
ChromeSamples.log(b);  // {foo: 2}




//Now lets see what we can solve using obj.assign
function spinner(target, options = {}) {
  
  let defaults = {
    message: "Please wait",
    spinningSpeed: 5,
    cssClass: ".is-spinning"
  };

  let settings = Object.assign({} , defaults , options);

  console.log(`Message: ${settings.message}`);
  console.log(`spinningSpeed: ${settings.spinningSpeed}`);
  console.log(`cssClass: ${settings.cssClass}`);
}
