function printString(myString){
    let substring;
    console.log(myString[0]);
    substring= myString.substring(1, myString.length);
    printString(substring);
  } else {
    return true;
  }
