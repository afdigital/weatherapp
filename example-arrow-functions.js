// Arrow Functions
var names = ['Andrew', 'Ulysses', 'Abraham', 'James', 'Barack', 'Theodore'];
//
// names.forEach(function (name) {
//   console.log('Name: ', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc: ', name)
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Andrew'));


var person = {
  name: 'Andrew',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says "Hi" to ' + name);
    });
  }
};

person.greet();

// Challenge
function add (a, b) {
  return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

 // Add statement
var addStatement = (a, b) => {
  return a + b;
}

console.log(addStatement(4, 7));

 // Add expression
 var addExpression = (a, b) => a + b;

console.log(addExpression(5, 5));
