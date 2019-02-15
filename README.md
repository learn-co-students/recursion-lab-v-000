# Recursion Lab!

It turns out that there are a lot of interesting problems that can be solved with recursion.

![I don't often repeat myself, but, when I do, I use recursion.](https://s3-us-west-2.amazonaws.com/curriculum-content/web-development/algorithms/recursion-interesting.jpg)

## Working with strings
A string is a data structure that lends itself to recursive solutions. Can you guess why? Take a look at the following code and try to figure it out:

```js
let myString = 'Algorithm';

// Set 'myString' equal to a substring of itself minus the last letter...
myString = myString.substring(0, myString.length - 1) +
// ...and then add the last letter back:
myString[myString.length - 1];

// myString still contains 'Algorithm'!
myString;
// => "Algorithm"
```

If you said something along the lines of *"a string is composed of a bunch of smaller, overlapping substrings,"* pat yourself on the back!

To solve the problems below, use the technique we just learned for finding recursive solutions. Remember:
  1. Apply the problem to a specific case (i.e., choose an example).
  2. Write out a function that solves that particular example.
  3. Reword that function so that it uses recursion, invoking itself.

We can do the first one together, but feel free to try it on your own.

1. Write a recursive function to print out all of the characters in a string.

First, we'll choose a specific case. Let's print out all of the characters in the string `'pizza'`:

```js
function printString(myString) {
  console.log(myString[0], myString[1], myString[2], myString[3], myString[4]);
}

printString("pizza");
// p i z z a
```

It works! Time to pack up and head home.

![Homer leaving work](https://cloud.githubusercontent.com/assets/17556281/26704825/c0583410-46ff-11e7-80c0-a8a5791c290f.gif)

But wait, our solution only works for strings that are five characters long:

```js
printString("oops");
// o o p s undefined

printString("That's not good...");
// T h a t '
```

It's clear that we won't be able to write out a series of string index references (`myString[0], myString[1], ...`) that can accommodate strings of varying length, so let's re-think our approach a bit.

Once we `console.log()` out `myString[0]`, we won't ever need to access `myString[0]` again. The only data we need to retain are the remaining characters in `myString`. Consider this: what happens if we simply get rid of the current character at `myString[0]` and shift everything else over by one place? We could then call `myString[0]` again, but this time it would refer to the *new* first character (the character stored at `myString[1]` prior to the shift).

```js
let myString = 'pizza';
console.log(myString[0]);
// p

myString = 'izza';
console.log(myString[0]);
// i

myString = 'zza';
// and so on...
```

Luckily for us, there's a wonderfully compact way to accomplish this wizardry with recursion. Consulting our handy three-step technique above, it appears we're onto the third and final phase: rewording the function to call itself. What if, instead of printing out multiple characters in the same pass, the function printed out `myString[0]`, shifted every remaining character one slot to the left, and then *invoked itself with the new, shortened string?!* Let's see how that would look in JavaScript:

```js
function printString(string) {
  let substring;

  // Print out the current first character in the string.
  console.log(string[0]);

  // Store the remainder of the string in the 'substring' variable.
  substring = string.substring(1, string.length);

  // Invoke printString() from within, passing in the remainder of the previous string.
  printString(substring);
}

printString("pizza");
```

Uh oh, a wild infinite loop appeared! Remember, we always need to find the base case in order to stop our recursion once its mission is accomplished. In this case, our function's recursive work will be complete once there are no remaining letters to shift to the left, or, in other words, once we're down to the last character in the string. At that point, we can just print out the final character and exit!

```js
function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}
```

Now that we think we have a working solution, let's test it out in the browser's JavaScript console with some examples.

```js
printString("supercalifragilisticexpialidocious");
// s
// u
// p
// e
// r
// c
// a
// ...
```

Once we've verified that our solution works, let's move it over to our `index.js` file and start attacking the remaining challenges in this lab.

## Additional string challenges

1. Write out a recursive function to reverse a string.
2. Write out a recursive function to see if a word is a palindrome.

## Array challenges

Arrays are another type of recursion-happy data structure. This is because, similar to the string–substring relationship, the properties of an array can be thought of as a series of sub-arrays or, in the context of our `printString()` code above, a combination of sub-arrays and a final element.

1. Given an array and an index, write a recursive function to add up the elements of an array.
2. Write a recursive function to find the largest integer in an array.
3. Write out a function to see if an array includes a given element.
