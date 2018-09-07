function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  //let n = str.split(" ");
  //let ln = n[n.length - 1];

  //console.log(ln.indexOf(target) === -1 ? false : true);

  str.substr(-target.length) === target ? true : false;

  console.log(str.lastIndexOf(RegExp(target)) === -1 ? false : true);
}

confirmEnding("Connor", "n");
