function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  //console.log(collection);
  for (let i = 0; i < collection.length; i++) {
    console.log(collection[i]);
  }
  // Only change code below this line
  //let newArr = collection.map(function(a) {
  //  console.log({first: a.first, last: a.last});
  //})

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
