function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  let newNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      newNum += 1;

    }

  }
  console.log(newNum);
}

getIndexToIns([2, 20, 10], 19)

//return str.substr(-target.length) === target ? true : false;
