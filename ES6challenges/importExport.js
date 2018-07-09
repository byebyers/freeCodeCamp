//Understand the Differences Between import and require

/*
In the past, the function require() would be used to import the functions and code in external files and modules. While handy, this presents a problem: some files and modules are rather large, and you may only need certain code from those external resources.

ES6 gives us a very handy tool known as import. With it, we can choose which parts of a module or file to load into a given file, saving time and memory.

Consider the following example. Imagine that math_array_functions has about 20 functions, but I only need one, countItems, in my current file. The old require() approach would force me to bring in all 20 functions. With this new import syntax, I can bring in just the desired function, like so:

    import { countItems } from "math_array_functions"

A description of the above code:

    import { function } from "file_path_goes_here"
    // We can also import variables the same way!

There are a few ways to write an import statement, but the above is a very common use-case.

Note
The whitespace surrounding the function inside the curly braces is a best practice - it makes it easier to read the import statement.

Note
The lessons in this section handle non-browser features. import, and the statements we introduce in the rest of these lessons, won't work on a browser directly. However, we can use various tools to create code out of this to make it work in browser.

Note
In most cases, the file path requires a ./ before it; otherwise, node will look in the node_modules directory first trying to load it as a dependency.
*/

//Use export to Reuse a Code Block

/*
In the previous challenge, you learned about import and how it can be leveraged to import small amounts of code from large files. In order for this to work, though, we must utilize one of the statements that goes with import, known as export. When we want some code - a function, or a variable - to be usable in another file, we must export it in order to import it into another file. Like import, export is a non-browser feature.

The following is what we refer to as a named export. With this, we can import any code we export into another file with the import syntax you learned in the last lesson. Here's an example:

    const capitalizeString = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    export { capitalizeString } //How to export functions.
    export const foo = "bar"; //How to export variables.

Alternatively, if you would like to compact all your export statements into one line, you can take this approach:

    const capitalizeString = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const foo = "bar";
    export { capitalizeString, foo }

Either approach is perfectly acceptable.
*/

/*
Below are two variables that I want to make available for other files to use.
Utilizing the first way I demonstrated export, export the two variables.
*/

/*
"use strict";
export const foo = "bar";
export const bar = "foo";
*/
