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
    let lastLetterIndex = myString.length - 1; 
    let newString;  

    if (lastLetterIndex > 0) {
        newString = newString + myString[lastLetterIndex]; 
        let subString = myString.substring(0, lastLetterIndex); 
        reverseString(subString); 
    } else { 
        newString = newString + myString; 
        return newString; 
    }
}