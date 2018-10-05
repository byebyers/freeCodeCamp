//Convert HTML Entities

/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

/*
function convertHTML(str) {
  // &colon;&rpar;
  let newArr = [];
  let item;
  for (let i = 0; i < str.length; i++) {
    item = str[i];
    switch (str[i]) {
      case `&`:
        item = item.replace(`&`, `&amp;`);
        break;
      case `<`:
        item = item.replace(`<`, `&lt;`);
        break;
      case `>`:
        item = item.replace(`>`, `&gt;`);
        break;
      case `"`:
        item = item.replace(`"`, `&quot;`);
        break;
      case `'`:
        item = item.replace(`'`, `&apos;`);
        break;
      default:
        break;
    }
    newArr.push(item);
  }
  return newArr.join("");
}

convertHTML("Dolce & Gabbana");
*/

/*
Another way to sove This
function convertHTML(str) {
//Chaining of replace method with different arguments
  str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
return str;
}

// test here
convertHTML("Dolce & Gabbana");
*/

/*
Another way to sove This
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  var htmlEntities = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '\"':'&quot;',
    '\'':"&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str.split('').map(function(entity){
    return htmlEntities[entity] || entity;
  }).join('');
}

// test here
convertHTML("Dolce & Gabbana");
*/
