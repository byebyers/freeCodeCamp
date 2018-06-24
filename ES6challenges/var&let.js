/*
Changing var to let allows the variable to be only called only once.
This helps when dealing with larger code when you may overite a varable accidently.
*/

/*
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
*/

//ES6: Compare Scopes of the var and let Keywords

/*
By declaring a let function in the block, we do not affect the varable outside.
*/

/*
function checkScope() {
  function checkScope() {
  "use strict";
    let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
  }
*/

  //Declare a Read-Only Variable with the const Keyword

  /*
  We can take it a step further by declaring the variable as const. This makes it into
  a read only varable that is unable to be changed even inside a block.
  */

  /*
  function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
*/


//Mutate an Array Declared with const

/*
You can change const variables as a mutable object.
*/

/*
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid
  s[0] = 2;
  s[1] = 5;
  s[7] = 7;
  // change code above this line
}
editInPlace();
*/
