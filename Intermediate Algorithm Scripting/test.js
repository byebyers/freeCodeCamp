function myReplace(str, before, after) {
  if (before.charAt(0) == before.charAt(0).toUpperCase()) {
     after = after.charAt(0).toUpperCase()+after.slice(1);
  }
  let change = str.replace(before, after);
  console.log(change);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
