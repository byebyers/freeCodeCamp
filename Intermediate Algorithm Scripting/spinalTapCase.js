//Spinal Tap Case

/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

/*
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let fixStr = str.replace(/([A-Z])/g, ' $1');
  let lowerStr = fixStr.toLowerCase();
  let splitStr = lowerStr.split(/\W+|[_]/).filter(x => x.length > 1);
  let joinStr = splitStr.join("-");
  return joinStr;
}

spinalCase('This Is Spinal Tap');
*/

/*
Another way to solve This

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}
*/
