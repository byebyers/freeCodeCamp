function truthCheck(collection, pre) {
  // Is everyone being true?
  var size = collection.length;
  var result = true;
  for (let i = 0; i < size; i++) {
    let key = Object.keys(collection[i]);
    let test = key.every(x => key.includes(pre));
    if (test === false) {
      result = false;
    }
  }
  return result;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
