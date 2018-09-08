//Title Case a Sentence

/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

/*
function titleCase(str) {
  return str.replace(
    /\w\S'*'/g,  --remove quotes from star
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

titleCase("I'm a little tea pot");
*/

/*
Another way to solve This

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
titleCase("I'm a little tea pot");
*/
