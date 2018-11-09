
var input = "Caesar Cipher";

function rot13(str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var newStr = "";

    for (var i = 0; i < str.length; i++) {
        var char = str[i],
            isUpper = char === char.toUpperCase() ? true : false;

        char = char.toLowerCase();

        if (alphabet.indexOf(char) > -1) {
            var newIndex = alphabet.indexOf(char) + 13;
            if(newIndex < alphabet.length) {
            	isUpper ? newStr += alphabet[newIndex].toUpperCase() : newStr += alphabet[newIndex];
            } else {
             	var shiftedIndex = -(alphabet.length - newIndex);
                isUpper ? newStr += alphabet[shiftedIndex].toUpperCase() : newStr += alphabet[shiftedIndex];
            }
        } else {
           newStr += char;
        }
    }
    return newStr;
}


// Change the inputs below to test
rot13("SERR PBQR PNZC");
