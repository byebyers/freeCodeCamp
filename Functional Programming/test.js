function sentensify(str) {
  // Add your code below this line
  let newArr = str.split(/[-]/);
  let newStr = newArr.join(" ");
  console.log(newStr);
  // Add your code above this line
}
sentensify("May-the-force-be-with-you");
