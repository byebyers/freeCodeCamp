//Use the Rest Operator with Function Parameters

/*
In cases in which we need more variable/flexible functions, ES6 allows us to use Rest Functions instead.

Like in this example

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.

or

const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6

The way you set up arguments is by using (...argument)
*/


//Use the Spread Operator to Evaluate Arrays In-Place

/*
ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

The ES5 code below uses apply() to compute the maximum value in an array:

    var arr = [6, 89, 3, 45];
    var maximus = Math.max.apply(null, arr); // returns 89

We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array.

The spread operator makes this syntax much better to read and maintain.

    const arr = [6, 89, 3, 45];
    const maximus = Math.max(...arr); // returns 89


...arr returns an unpacked array. In other words, it spreads the array.


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);

use ... for the spread

*/
