// Code your solution
function printString(myString){
  console.log(myString[0])
  if (myString.length>1){
    printString(myString.substring(1,myString.length))
  }else{
    return true
  }
}

function reverseString(myString){
  //let reverse=myString[myString.length-1]
  if (myString.length>1){
    return myString[myString.length-1]+reverseString(myString.substring(0,myString.length-1))
  }else{
    return myString[0]
  }
}
