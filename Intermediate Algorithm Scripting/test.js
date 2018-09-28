

function sumAll(arr) {
  let lower = Math.min(arr[0],arr[1]);
  let upper = Math.max(arr[0],arr[1]);
  let total = 0;
  for (let i = lower; i <= upper; i++) {
    total += i;
  }
  console.log(total);
  return total;
}



sumAll([1, 4]);
