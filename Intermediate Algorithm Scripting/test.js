function fearNotLetter(str) {
  let key = "abcdefghijklmnopqrstuvwxyz";
  let splitKey = key.split("");
  let start = key.search(str[0]);
  let strLength = str.length;
  let strKey = splitKey.splice(start, strLength);
  let copyStr = str.split("");
  let difference = strKey.filter(x => !copyStr.includes(x));
  difference = difference.join("");



  console.log(difference);
  return str;
}

fearNotLetter("abce");
