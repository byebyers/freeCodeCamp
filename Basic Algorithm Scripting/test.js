function reverseString(str) {
  let splitStr = str.split("");
  console.log(splitStr);
  let revStr = splitStr.reverse();
  console.log(revStr);
  let newStr = revStr.join('');
  console.log(newStr);
  return newStr;
}

reverseString("hello");
