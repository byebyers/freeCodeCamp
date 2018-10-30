//Steamroller

/*
Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

/*
function steamrollArray(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // pop value from stack
    const next = stack.pop();
    if (Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  //reverse to restore input order
  return res.reverse();
}

steamrollArray([1, [2], [3, [[4]]]]);
*/
