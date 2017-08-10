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


  var revString= myString.split("").reverse().join("");
  return revString


}
