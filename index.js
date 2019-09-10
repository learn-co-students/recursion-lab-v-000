// Code your solution here!

function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

function reverseString(myString, reversedString ="") {
  let lastLetter = myString.length - 1; 

  if (lastLetter > 0) {
    let newReversedString = reversedString + myString[lastLetter]; 
    let newString = myString.slice(0, lastLetter); 
    reverseString(newString, newReversedString); 
  } else {
    let finalString = reversedString + myString; 
    console.log(finalString); 
    return finalString; 
  }
}

function isPalindrome(myString) {
  let palindrome; 
  let lastLetterIndex = myString.length - 1; 

  if (lastLetterIndex > 0) {
    if (myString[0] === myString[lastLetterIndex]) {
      let newString = myString.slice(1, lastLetterIndex); 
      isPalindrome(newString); 
    } else {
      palindrome = false; 
    }
  } else {
    palindrome = true; 
  }
  console.log(palindrome)
  return palindrome; 
}

function addUpTo(numberArray, numberIndex, sum =0) {
  if (numberIndex > 0) {
    let newSum = sum + numberArray[0]; 
    let newArray = numberArray.slice(1)
    let newIndex = numberIndex - 1; 
    addUpTo(newArray, newIndex, newSum)
  } else {
    let totalSum = sum + numberArray[0]; 
    console.log(totalSum); 
    return totalSum; 
  }
}