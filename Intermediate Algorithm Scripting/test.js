var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  var splitName = firstAndLast.split(" ");
  var first = splitName[0];
  var last = splitName[1];
  var newName = first + " " + last;
  console.log(newName);
  this.setFirstName = function (firstName) {
    first = firstName;
    return first;
  };
  this.setLastName = function (lastName) {
    last = lastName;
    console.log(last);
  };
  this.setFullName = function (newFirstAndLast) {
    var newSplit = newFirstAndLast.split(" ");
    first = newSplit[0];
    last = newSplit[1];
    return newName;
  };
  this.getFirstName = function() {
    return first;
  };
  this.getLastName = function() {
    return last;
  };
  this.getFullName = function() {
    return newName;
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.setLastName("Haskell")
bob.getLastName();
console.log(bob.getLastName);

/*
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
*/
