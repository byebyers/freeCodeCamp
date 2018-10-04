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
  console.log(arr);
}

pairElement("ACG");


/*
ATCG
TAGC
*/
