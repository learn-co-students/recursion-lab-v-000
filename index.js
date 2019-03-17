// Code your solution
function printString(myString){
  console.log(myString[0])
  if (myString.length>1){
    printString(myString.substring(1,myString.length))
  }else{
    return true
  }
}
