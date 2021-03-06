//Everything Be True

/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

/*
function truthCheck(collection, pre) {
  // Is everyone being true?
  var size = collection.length;
  var result = true;
  for (let i = 0; i < size; i++) {
    let key = Object.keys(collection[i]);
    let items = Object.values(collection[i]);
    let test = key.every(x => key.includes(pre) && !items.includes(x = "")
    && !items.includes(x = undefined) && !items.includes(x = NaN)
    && !items.includes(x = null) && !items.includes(x = 0));
    console.log(items);
    if (test === false) {
      result = false;
    }
  }
  return result;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
*/
