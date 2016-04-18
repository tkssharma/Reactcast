//Spread/Rest Operator ...
//This operator, '...', has two uses, depending on the context. In the first case we'll cover the usage as a spread operator.
//Rest parameter 
function max(...nums) { return Math.max(...nums); }  
max(5,18,1,8); 



function sum(...number) {
  var result = 0;
  numbers.forEach(function (number) {
    result += number;
  });
  return result;
}
console.log(sum(1)); // 1
console.log(sum(1, 2, 3, 4, 5)); // 15


function sum(a, b, c) {
  return a + b + c;
}
var args = [1, 2, 3];
console.log(sum(... args)); // 6



//passing y as Array
function f(x, ...y) {
  // y is an Array
  return x * y.length;
}
f(3, "hello", true) == 6


//passing param as var arguments 
function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument spread operator 
f(...[1,2,3]) == 6

function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);

function myFunction(v, w, x, y, z) { }
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);