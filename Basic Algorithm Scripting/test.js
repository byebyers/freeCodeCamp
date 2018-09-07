function truncateString(str, num) {
  // Clear out that junk in your trunk

  //console.log(newNum);

  if (str.length > num) {
    consolelog(str.substring(0, num) + "...");
  }

  else {
    console.log(str);
  }

  //let myTruncatedString = str.substring(0, num) + "...";
  //console.log(myTruncatedString);

  //console.log(str.length > num ? true : false);
//  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
