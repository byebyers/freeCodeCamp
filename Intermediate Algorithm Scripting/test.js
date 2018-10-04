function myReplace(str, before, after) {
  console.log(str.search(before));
  let checkUpper = before[0];
  let changedUpper = after[0];
  if (checkUpper == checkUpper.toUpperCase()) {
    changedUpper = changedUpper.toUpperCase;
    console.log(changedUpper);
  }
  console.log(after);

  switch (str.search(before)) {
    case -1: return "No Match";
    break;
    default: return str.replace(before, after);
  }
}

myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");
