/*
function addTogether(x) {
  return function(y) {
      if (y) {
        console.log(x+y);
      }
      console.log(x);
    };
}

addTogether(2,3);


function add(x) {
  // Add your code below this line
  return function(y) {
    return function (z) {
      return x + y + z;
    }
  }


  // Add your code above this line
}
add(10)(20)(30);
*/






function addTogether(first, second) {
  if (first === parseInt(first)) {
    if (!second) {
      return function(y) {
        return first + y;
      }
    }
    else {
      if (second === parseInt(second)) {
        return first + second;
      }
      else {
        return undefined;
      }
    }
  }
  else {
    return undefined;
  }
}

addTogether(2,"3");
