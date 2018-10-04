//DNA Pairing

/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

/*
function pairElement(str) {
  let arr = [];
  let obj = [];

  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (str[i] == "A") {
      obj = [str[i], "T"];
      arr.push(obj);
    }
    else if (str[i] == "T") {
      obj = [str[i], "A"];
      arr.push(obj);
    }
    else if (str[i] == "C") {
      obj = [str[i], "G"];
      arr.push(obj);
    }
    else {
      obj = [str[i], "C"];
      arr.push(obj);
    }
  }
  return arr;
}
*/

/*
Another way to solve This

function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

// test here
pairElement("GCG");
*/

/*
Another way to solve This

function pairElement(str) {
  //define a map object with all pair possibilities
  var map = {T:'A', A:'T', G:'C', C:'G'};
  //split str into a char Array
  strArr = str.split('');
  //replace each Array item with a 2d Array using map
  for (var i=0;i<strArr.length;i++){
    strArr[i]=[strArr[i], map[strArr[i]]];
  }
 return strArr;
}

// test here
pairElement("GCG");
*/
