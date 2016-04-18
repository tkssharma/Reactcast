/**
  * Arrow functions have shorter syntax than function expressions.
  * These functions also lexically bind `this` value and are always anonymous.
  */
  
let foo = ["Hello", "World"];

/*const person = {
    name: "Nicholas";
};
// works
person.name = "Greg";*/

// throws an error
/*person = {
    name: "Greg"
};*/

//let  message = "Hello!";
//let age = 25;

// Each of these would throw an error given the previous declarations
const message = "Goodbye!";
const age = 30;