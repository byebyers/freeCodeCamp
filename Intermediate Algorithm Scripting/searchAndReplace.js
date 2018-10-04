//Search and Replace

/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

/*
function myReplace(str, before, after) {
  console.log(str.search(before));

  let x = before[0];
  let y= after[0];

  console.log(y)

  if (x === x.toUpperCase()) {
    y = y.toUpperCase();
    after = after.substr(1);
    after = y + after;
  }



  switch (str.search(before)) {
    case -1: return "No Match";
    break;
    default: return str.replace(before, after);
  }
}

myReplace("His name is Tom", "Tom", "john");

*/

/*
Another way to solve This

function myReplace(str, before, after) {
//Create a regular expression object
  var re = new RegExp(before,"gi");
//Check whether the first letter is uppercase or not
  if(/[A-Z]/.test(before[0])){
  //Change the word to be capitalized
    after = after.charAt(0).toUpperCase()+after.slice(1);
     }
     //Replace the original word with new one
  var  newStr =  str.replace(re,after);

 return newStr;
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
*/
