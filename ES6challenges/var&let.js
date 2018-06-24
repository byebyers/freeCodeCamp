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
