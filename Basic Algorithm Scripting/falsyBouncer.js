//Falsy Bouncer

/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

/*
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!!arr[i] == true) {
      newArr.push(arr[i]);
    }
  }

  return newArr;

}

bouncer([7, "ate", "", false, 9]);
*/

/*
WAY BETTER WAY TO SOLVE THIS!!!
function bouncer(arr) {
  return arr.filter(Boolean);
}
*/
