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

  function reverseString(myString) {
      let newString; 
      if (myString.length > 1) {
        let lastLetterIndex = myString.length - 1;
        newString += myString[lastLetterIndex]; 
        console.log (newString)
        reverseString(myString.substring(0, lastLetterIndex))
      } else {
      console.log(newString)
      return newString;
      }
  }