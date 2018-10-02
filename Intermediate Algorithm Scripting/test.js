function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let fixStr = str.replace(/([A-Z])/g, ' $1');
  let lowerStr = fixStr.toLowerCase();
  let splitStr = lowerStr.split(/\W+|[_]/).filter(x => x.length > 1);
  let joinStr = splitStr.join("-");
  console.log(joinStr)
}

spinalCase('The_Andy_Griffith_Show');
