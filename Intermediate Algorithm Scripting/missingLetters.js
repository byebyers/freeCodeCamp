//Missing letters

/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

/*
function fearNotLetter(str) {
  let key = "abcdefghijklmnopqrstuvwxyz";
  let splitKey = key.split("");
  let start = key.search(str[0]);
  let strLength = str.length;
  let strKey = splitKey.splice(start, strLength);
  let copyStr = str.split("");
  let difference = strKey.filter(x => !copyStr.includes(x));
  difference = difference.join("");

  if (key.length == str.length) {
    return undefined;
  }
  else {
    return difference;
  }
}

fearNotLetter("abce");
*/

/*
Another way to solve This

function fearNotLetter(str) {

  for(var i = 0; i < str.length; i++) {
    //code of current character
    var code = str.charCodeAt(i);

    // if code of current character is not equal to first character + no of iteration
    hence character has been escaped
    if (code !== str.charCodeAt(0) + i) {

      // if current character has escaped one character find previous char and return
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");
*/

/*
Another way to solve This
function fearNotLetter(str) {
  var compare = str.charCodeAt(0), missing;

  str.split('').map(function(letter,index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// test here
fearNotLetter("abce");
*/

/*
Another way to solve This
function fearNotLetter(str) {
  var allChars = '';
  var notChars = new RegExp('[^'+str+']','g');

  for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}

// test here
fearNotLetter("abce");
*/

/*
Another way to solve This

function fearNotLetter(str) {
  let strArr = str.split("");
  let compare = Number(str[0].charCodeAt(0)) - 1;
  //console.log(compare)
  for (let i = 0; i < strArr.length; i++) {
    compare += 1;
    if (strArr[i].charCodeAt(0) != compare) {
      return String.fromCharCode(strArr[i].charCodeAt(0) - 1);
    }
    //console.log(compare)
    //console.log(strArr[i].charCodeAt(0));
  }
}

fearNotLetter("stvwx");
*/

/*
Another way to solve This

function uniteUnique(arr) {
  let args = Array.from(arguments);
  let newArr = [];
  for (let i = 0; i < args.length; i++) {
    for(let j = 0; j < args[i].length; j++) {
      if (newArr.indexOf(args[i][j]) === -1) {
      newArr.push(args[i][j]);
      }
    }
  }
  return newArr;
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
*/
