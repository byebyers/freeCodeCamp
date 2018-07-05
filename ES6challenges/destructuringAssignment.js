//Use Destructuring Assignment to Assign Variables from Objects

/*
We can do something similar with objects as well. Destructuring assignment is special syntax for neatly assigning values taken directly from an object to variables.

Consider the following ES5 code:

    var voxel = {x: 3.6, y: 7.4, z: 6.54 };
    var x = voxel.x; // x = 3.6
    var y = voxel.y; // y = 7.4
    var z = voxel.z; // z = 6.54

Here's the same assignment statement with ES6 destructuring syntax:

    const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54

If instead you want to store the values of voxel.x into a, voxel.y into b, and voxel.z into c, you have that freedom as well.

    const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54


Here is some example code.

function getLength(str) {
  "use strict";

  // change code below this line
  const {length : len} = str; // change this
  // change code above this line

  return len; // you must assign length to len in line

}

console.log(getLength('FreeCodeCamp'));

Essentially we are assigning .length to len then calling it back for a response. Easier way to
write it.
*/


//Use Destructuring Assignment to Assign Variables from Nested Objects

/*
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const {tomorrow : {max : maxOfTomorrow}} = forecast; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
*/


//Use Destructuring Assignment to Assign Variables from Arrays

/*
ES6 makes destructuring arrays as easy as destructuring objects.

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that:

    const [a, b] = [1, 2, 3, 4, 5, 6];
    console.log(a, b); // 1, 2

The variable a is assigned the first value of the array, and b is assigned the second value of the array.

We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

    const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
    console.log(a, b, c); // 1, 2, 5

Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b, a] = [a, b]
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
*/


//Use Destructuring Assignment with the Rest Operator to Reassign Array Elements

/*

In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below:

    const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
    console.log(a, b); // 1, 2
    console.log(arr); // [3, 4, 5, 7]

    Variables a and b take the first and second values from the array. After that, because of rest operator's presence, arr gets rest of the values in the form of an array.

    The rest element only works correctly as the last variable in the list. As in, you cannot use the rest operator to catch a subarray that leaves out last element of the original array.


Use destructuring assignment with the rest operator to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.


const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a,b,...arr] = list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];


//Use Destructuring Assignment to Pass an Object as a Function's Parameters

/*
Example of destructuring an object in a function itself.

Consider the code below:

    const profileUpdate = (profileData) => {
      const { name, age, nationality, location } = profileData;
      // do something with these variables
    }

This effectively destructures the object sent into the function. This can also be done in-place:

    const profileUpdate = ({ name, age, nationality, location }) => {
       do something with these fields
    }

This removes some extra lines and makes our code look neat.
*/

/*
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return function half({min, max}) {
    // use function argument destructuring

    return (max + min) / 2.0;
  };
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
*/


//Create Strings using Template Literals

/*
A new feature of ES6 is the template literal.
This is a special type of string that allows you to use string
interpolation features to create strings.

Consider the code below:

    const person = {
      name: "Zodiac Hasbro",
      age: 56
    };

    // string interpolation
    const greeting = `Hello, my name is ${person.name}!
    I am ${person.age} years old.`;

    console.log(greeting); // prints
    // Hello, my name is Zodiac Hasbro!
    // I am 56 years old.

A lot of things happened there.

Firstly, the ${variable} syntax used above is a place holder. Basically,
you won't have to use concatenation with the + operator anymore. To add variables to strings,
you just drop the variable in a template string and wrap it with ${ and }.

Secondly, the example uses backticks (`), not quotes (' or "), to wrap the string.
Notice that the string is multi-line.

This new way of creating strings gives you more flexibility to create robust strings.
*/

/*
Use template literal syntax with backticks to display each entry of the result object's
failure array. Each entry should be wrapped inside an li element with the class attribute
text-warning, and listed within the resultDisplayArray.
*/

/*
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = arr.map(val => `<li class=“text-warning”>${val}</li>`);
  // change code above this line

  console.log(resultDisplayArray);
}
/**
 * makeList(result.failure) should return:
 * [ <li class="text-warning">no-var</li>,
 *   <li class="text-warning">var-on-top</li>,
 *   <li class="text-warning">linebreak</li> ]
 **/

/*
const resultDisplayArray = makeList(result.failure);
*/

//Write Concise Object Literal Declarations Using Simple Fields

/*
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return ({name, age, gender});
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
*/


//Write Concise Declarative Functions with ES6

/*
ES6: Write Concise Declarative Functions with ES6

When defining functions within objects in ES5, we have to use the keyword function as follows:

    const person = {
      name: "Taylor",
      sayHello: function() {
        return `Hello! My name is ${this.name}.`;
      }
    };

With ES6, You can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:

    const person = {
      name: "Taylor",
      sayHello() {
        return `Hello! My name is ${this.name}.`;
      }
    };
*/

/*
Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.
*/

/*
// change code below this line
const bicycle = {
  gear: 2,
  setGear: function({gear}) {
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
*/
