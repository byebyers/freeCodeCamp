//Remove Whitespace from Start and End

/*
Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.
*/

/*
Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

Note
The .trim() method would work here, but you'll need to complete this challenge using regular expressions.
*/


//let hello = "   Hello, World!  ";
//let wsRegex = /^\s*\w+,\s\w+!\s*/; // Change this line

//By using \w*, you are looking for all matching alphabetical letters, then you simply need to drop in the comma, as well as the space after the comma, as well as the exclamation mark. 

//let result = hello.replace(wsRegex, 'Hello, World!'); // Change this line
