function convertHTML(str) {
  // &colon;&rpar;
  let newArr = [];
  let item;
  for (let i = 0; i < str.length; i++) {
    item = str[i];
    switch (str[i]) {
      case '&':
        item = item.replace('&', '&amp;');
        break;
      default:
        break;
    }
    newArr.push(item);
  }
  console.log(newArr.join(""));
}

convertHTML("Dolce & Gabbana");
