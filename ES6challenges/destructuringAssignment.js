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
