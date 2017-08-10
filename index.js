function printString(myString){
    let substring;
    console.log(myString[0]);
    if(myString.length > 1) {
    substring= myString.substring(1, myString.length);
    printString(substring);
  } else {
    return true;
  }
}

function reverseString(myString) {

    let revString;
    console.log(revString)
    if(myString.length > 2) {
      revString= myString.split("").reverse().join("");
      reverseString(revString)
    } else {
    return myString;
}
}
