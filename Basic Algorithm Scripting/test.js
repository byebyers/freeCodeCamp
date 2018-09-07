function repeatStringNumTimes(str, num) {
  // repeat after me

  //mult = str * num;
  //strArray = str.split();
  //newArray = strArray * num;

  myArray = []

  for (let i = 0; i < num; i++) {
    myArray.push(str);
  }

  let newStr = myArray.join("");

  console.log(newStr);

  //return str;
}

repeatStringNumTimes("abc", 3);
