// print the string in reverse order
function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(myString.length, 1);
    // console.log(mySubString)
    printString(mySubString);
  } else {
    return true;
  }
}

// reverse the string
function reverseString(myString) {
  if (myString.length < 2) {
    return myString;  // Example: if word is "a" return as it is
  } else {
    return reverseString(myString.substring(1)) + myString[0]; // Example: word = "sam". remove "s" and add it in the end return "am" to repeat.
  }
}

// check if the word is a pallindrome
function isPalindrome(word){
  if (word.length < 2) {                                          // NITIN => positions(0, 1, 2, 3, 4) match 0 <=> 4. if matched remove elements 0 and 4 and send the word back to isPalindrome
    return true;
  } else {                                                        // iteration1:0 <=> 4 -> match found . Elements send to check again (1, 2, 3)
    if (word[0] === word[word.length - 1]) {                      //iteration 2: 1 <=> 3 -> match found. Elements send to check again (3)
      return isPalindrome(word.substring(1, word.length - 1));    //iteration 3: 3. length less than 1. return true. Word is pallindrome.
    } else {
      return false;
    }
  }
}

// Add the elements in an array upto a certain index
function addUpTo(array, index) {
  if (index > 0) {
    return array[index] + addUpTo(array, index - 1)  // Formulae: n + (n - 1). return value of array[index] added to array[index - 1] recursively
  } else {
    return array[index]
  }
}

// find largest in an array
function maxOf(numbers) {
  if (numbers.length == 1) {
    return numbers[0];
  } else {
    return Math.max(numbers.pop(), maxOf(numbers));
  }
}

// find the number in the array
function includesNumber(array, number) {
  if (array.length < 1){                      // if array has no elements number was not found
    return false;
  } else {
    if(array[0] === number) {             // otherwise check if the array's first element equals number
      return true;                        // if it does return number found
    } else {
      return includesNumber(array.slice(1), number); // if not, make the recursive call to the function with the array without first element
    }
  }
}
