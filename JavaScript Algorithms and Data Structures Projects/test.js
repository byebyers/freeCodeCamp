function telephoneCheck(str) {
  // Good luck!
  let phrase = str;
  let reference = /\D/g;
  let symbole = (;
  let checkLength = str.replace(reference, "").length;
  if (checkLength > 11 | checkLength < 10) {
    return false;
  }
  if (checkLength === 11) {
    if (phrase[0] != 1) {
      return false;
    }
  }
  console.log(phrase.search(symbole));
  return true;
}


telephoneCheck(("(555-555-5555"));
