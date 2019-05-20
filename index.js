function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

let reversedString = ''

function reverseString(myString) {
  reversedString += myString[myString.length-1];
  console.log(reversedString);
  if (myString.length > 1) {
    let mySubString = myString.substring(0, myString.length-1);
    reverseString(mySubString);
  } else {
    return reversedString;
  }
}
