//Return Largest Numbers in Arrays

/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

/*
function largestOfFour(arr) {
  // You can do this!
  let largeArray = [];
  for (let i = 0; i < arr.length; i++) {
    let largeNum = -100;
    for (let j = 0; j < arr.length; j++) {
      if (largeNum<arr[i][j]){
        largeNum = arr[i][j]
      }
    }
    largeArray.push(largeNum);
  }
  return largeArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
*/

/*

*/
