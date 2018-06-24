/*
Changing var to let allows the variable to be only called only once.
This helps when dealing with larger code when you may overite a varable accidently. 
*/
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
