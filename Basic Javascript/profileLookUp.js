//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

/*
function lookUpProfile(name, prop){
// Only change code below this line
for (var i = 0; i < contacts.length; i++) {
  if (contacts[i].firstName == name && contacts[i].hasOwnProperty(prop)) {
    console.log(contacts[i][prop]);
  }
  else if (contacts[i].firstName != name) {
    console.log("No such contact");
  }
  else {
    console.log("No such property");
  }
}
// Only change code above this line
}
*/

function lookUpProfile(name, prop){
// Only change code below this line
for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      }
      else {
        return "No such property";
      }
    }
  }
  return "No such contact" ;
// Only change code above this line
}


//console.log(contacts[i]);

/*
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}


for (var i = 0; i < contacts.length; i++) {
  console.log(contacts[i]);
  for (var j = 0; j < contacts[i].length; j++) {
    console.log(contacts[i][j]);
  }
}

for (var i = 0; i < contacts.length; i++) {
  console.log(contacts[i]);
}

*/
//myObj.hasOwnProperty("top"); // true
// Change these values to test your function
lookUpProfile("Kristian", "lastName");
