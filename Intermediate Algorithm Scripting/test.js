function translatePigLatin(str) {
  let splitStr = str.split("");
  let vowelStr = [];
  let newStr = [];
  let conStr = [];
  if (splitStr[0] == "a" || splitStr[0] == "e" || splitStr[0] == "i" || splitStr[0] == "o" || splitStr[0] == "u") {
    let vowelStr = splitStr;
    let vowel = ['w', 'a', 'y'];
    vowelStr = vowelStr.concat(vowel);
    vowelStr = vowelStr.join("");
    console.log(vowelStr);
  }
  else if (splitStr[1] == "l") {
    let conStr = splitStr.splice(2);
    let conExtra = ['a', 'y'];
    conStr = conStr.concat(splitStr);
    conStr = conStr.concat(conExtra);
    conStr = conStr.join("");
    console.log(conStr);
  }
  else {
    let newStr = splitStr.splice(1);
    let extra = ['a', 'y'];
    newStr = newStr.concat(splitStr);
    newStr = newStr.concat(extra);
    newStr = newStr.join("");
    console.log(newStr);
  }
  console.log(splitStr);
}

translatePigLatin("glove");
