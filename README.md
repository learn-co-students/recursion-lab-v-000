### Recursion Lab!

It turns out that there are a lot of interesting problems that can be solved with using recursion.  


### Working with strings
A string is a data structure that lends itself to recursive solutions.  Do you see why?  It's because a string consists of the substring plus that missing letter.  

```javascript
let string = 'Algorithm'
  string === string.substring(0, string.length - 1) 
				// all letters except for last letter
  + string[string.length - 1]
   // last letter
   
  // true
```

With the problems below use our technique for finding recursive solutions. Remember that the technique is to (1) Apply the problem to a specific case (ie. choose an example), (2) write out the solution to just that example, and then (3) reword that solution in terms of the function itself.  We can do the first one together, but feel free to try them on your own.

1. Write a recursive function to print out all of the elements of a string.  

Ok, so the first step is to choose an example like "pizza".  So to print out all of the elements of pizza. We would just write out:

```javascript

function printString(string){
  console.log(string[0], string[1], string[2], string[3], string[4])
}

printString("pizza")
```

Now we ask if we can perform this operation by incorporating use the function printString.  We see that we can.  Print string seems to be equivalent to printing the first letter followed by printing all but the first letter of a string.  Or, in Javascript:

```javascript
function printString(string){
  let substring
  console.log(string[0])
  substring = string.substring(1, string.length)
  printString(substring)
}

printString("pizza")
```

Now there is only one thing left to do, which is find the base case.  Well the stopping point should be when there is only one letter left in the string.  At that point, you can just print out the string.  So this gives us:

```javascript

function printString(string){
  console.log(string[0])
  if(string.length > 1){
    let substring = string.substring(1, string.length)
    printString(substring)
  } else{
    return true
  }
}

```


Now that we think we have a working solution, we try it out in the console with some examples, and after it looks good we move it over to our codebase.  Ok, you can open up the tests to this lab and find the rest of these problems.

### Additional Problems with Strings

* Write out a recursive function to reverse a string.
* Write out a recursive function to see if a word is a palindrome.

### Arrays

Arrays are another type of recursive data structure.  This is because properties of an array generally can be thought of as combination of the properties of a subarray and a final element.

1.  Given an array and an index, write a recursive function to add up the elements of an array
2. Write a recursive function to find the largest integer in an array
3. Write out the function include to see if an array includes a given element
