/**
  * Arrow functions have shorter syntax than function expressions.
  * These functions also lexically bind `this` value and are always anonymous.
  */
  
let foo = ["Hello", "World"];

let  reflect = value => value;

let  reflect1 = (value) => value;

let  reflect2 = (value1,value2) =>   value1+ value2 ;
// effectively equivalent to:

var reflect3 = function(value) {
    return value;
};

let getName = () => "Trogdor";
// effectively equivalent to:
var  getName1 = function() {
    return "Trogdor";
};

var sum = (num1, num2) => {
    return num1 + num2;
};

// effectively equivalent to:

var sum1 = function(num1, num2) {
    return num1 + num2;
};

/***************************************************/

var getTempItem = id => ({ id: id, name: "Temp" });

// effectively equivalent to:

var getTempItem1 = function(id) {

    return {
        id: id,
        name: "Temp"
    };
};

function FooCtrl (FooService) {
  this.foo = 'Hello';
  _this = this;
  FooService
  .doSomething(function (response) {
    _this.foo = response;
  }
}

function FooCtrl (FooService) {
  this.foo = 'Hello';
  FooService
  .doSomething(function (response) {
    this.foo = response;
  }.bind(this));
}
//its cool Now leixical scopeing 
function FooCtrl (FooService) {
  this.foo = 'Hello';
  FooService
  .doSomething((response) => { // woo, pretty
    this.foo = response;
  });
}