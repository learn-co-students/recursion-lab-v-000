function printString(myString) {
  let mySubstring;
  console.log(myString[0]);
  if (myString.length > 1) {
    mySubstring = myString.substring(1, myString.length);
    printString(mySubstring);
  } else {
    return true;
  }
}

function reverseString(string) {
  let subString = "";
  let first_letter = string[0];
  subString += first_letter
  if (string.length > 0) {
    debugger;
    string -= first_letter
    reverseString(subString)
  } else {
    return subString
  }
 }
