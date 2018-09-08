function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let copy = arr1.slice();
  console.log(copy);

  arr2.splice(n,0,...copy);
  console.log(arr2);
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//return str.substr(-target.length) === target ? true : false;
