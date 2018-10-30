//Drop it

/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

/*
function dropElements(arr, func) {
  // Drop them elements.
  var times = arr.length;
  for (let i = 0; i < times; i++) {
    console.log(func(arr[i]));
    if (func(arr[0]) === true) {
      break;
    }
    else {
      arr.shift();
    }
  }
  console.log(arr);
  return arr;
}


dropElements([1, 2, 3, 4], function(n) {return n > 5;});
*/
