// the global variable
var globalTitle = " Winter Is  Coming";

// Add your code below this line
function urlSlug(title) {
  let lowTitle = title.toLowerCase();
  let splitTitle = lowTitle.split(/[^A-Za-z]/g);
  let joinTitle = splitTitle.join('-');
  console.log(splitTitle);
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
