//Use Arrow Functions to Write Concise Anonymous Functions

/*
We can make unnamed functions as inline functions like this.

const myFunc = function() {
  const myVar = "value";
  return myVar;
}

With ES6 howerver we can achieve writing Anonymous functions with arrow functions like this.

const myFunc = () => {
  const myVar = "value";
  return myVar;
}

Since that function above is only returning a vaue we can call the function like this instead.

const myFunc= () => "value"

It is simpler to do it this way.
*/


//Write Arrow Functions with Parameters

/*
Like a normal function you can pass Parameters through an arrow function.

const doubler = (item) => item * 2;

*/


//Write Higher Order Arrow Functions

/*
Since Arrow Functions work well with higher order functions you cat turn.

FBPosts.filter(function(post) {
  return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
})

to

FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)

Simper simple
*/
