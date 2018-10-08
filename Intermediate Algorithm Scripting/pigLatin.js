//Pig Latin

/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

/*
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

// test here
translatePigLatin("consonant");
*/

/*
Another way to solve This

function translatePigLatin(str) {
  function check(obj) {
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
  }

  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}

// test here
translatePigLatin("consonant");

*/

/*
function translatePigLatin(str) {
  return str
    .replace(/^([aeiouy])(.*)/, '$1$2way')
    .replace(/^([^aeiouy]+)(.*)/, '$2$1ay');
}

// test here
translatePigLatin("consonant");
*/


//Better way to solve this.


/*
function translatePigLatin(str) {
    var strArr = [];
    var tmpChar;

    // check if the char is consonant using RegEx
    function isConsonant(char) {
        return !/[aeiou]/.test(char);
    }

    // return initial str + "way" if it starts with vowel
    // if not - convert str to array
    if (!isConsonant(str.charAt(0)))
        return str + "way";
    else
        strArr = str.split("");

    // push all consonats to the end of the array
    while (isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }
 // convert array to string and concatenate "ay" at the end
 return strArr.join("")+"ay";
}


// test here

translatePigLatin("consonant");
*/



//Best way to solve this!

function translatePigLatin(str) {
  console.log("str.search-> "+str.search(/[aeiou]/))
  switch (str.search(/[aeiou]/)){
     case -1: return str.concat('ay');
     break;
     case 0: return str.concat('way');
     break;
     default: return str.replace(/(^[^aeiou]+)(\w*)/,'$2$1ay');
   }
}




// test here

console.log(translatePigLatin("consonant"));
