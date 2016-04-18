/**
  * Arrow functions have shorter syntax than function expressions.
  * These functions also lexically bind `this` value and are always anonymous.
  */
//object initilizer 
let name = 'tarun';
let age = 26;
let user = {name,age};
console.log(user.name);
console.log(user.age);



//examples 

var [a, b] = [1, 2];
console.log(a, b);
//=> 1 2


// Use from functions, only select from pattern
var foo = () => {
  return [1, 2, 3];
};

var [a, b] = foo();
console.log(a, b);
// => 1 2


// Omit certain values
var [a, , b] = [1, 2, 3];
console.log(a, b);
// => 1 3


// Combine with spread/rest operator (accumulates the rest of the values)
var [a, ...b] = [1, 2, 3];
console.log(a, b);
// => 1 [ 2, 3 ]