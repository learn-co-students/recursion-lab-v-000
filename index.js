// Code your solution here!

function printString(string) {
  console.log(string[0]);
  if (string.length > 1) {
    let subString =
    string.substring(1, string.length);
    printString(subString);
  } else {return true;
  }
}

function reverseString(string) {
  if (string.length < 2) {
    return string;
  } else {
    return reverseString(string.substring(1)) + string[0]
  }
}
