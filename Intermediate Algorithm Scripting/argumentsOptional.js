//Arguments Optional

/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

/*
function addTogether(first, second) {
  if (first === parseInt(first)) {
    if (!second) {
      return function(y) {
        if (y === parseInt(y)) {
          return first + y;
        }
      }
    }
    else {
      if (second === parseInt(second)) {
        return first + second;
      }
      else {
        return undefined;
      }
    }
  }
  else {
    return undefined;
  }
}

addTogether(2,"3");
*/
