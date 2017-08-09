// Code your solution here!
function printString(myString) {
  let substring;
  console.log(myString[0]);
    if(myString.length > 1) {
      substring= myString.substring(1, myString.length);
      printString(substring)
  } else {
    return true;
  }
}
