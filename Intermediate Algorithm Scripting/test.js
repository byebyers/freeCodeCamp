
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly

  var name = firstAndLast.split(' ');

  this.getFirstName = function() {
    return name[0];
  }
  this.getLastName = function() {
    return name[1];
  }
  this.getFullName = function() {
    return name.join(' ');
  };
  this.setFirstName = function(first) {
    name[0] = first;
  }
  this.setLastName = function(last) {
    name[1] = last;
  }
  this.setFullName = function(firstAndLast) {
    name = firstAndLast.split(' ');
  }

};

/*
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
*/
