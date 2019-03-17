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

function isPalindrome(myString){
  console.log(myString)
  if (myString.length<2){
    return true
  }

  if (myString[0]===myString[myString.length-1] ){
      return isPalindrome(myString.substring(1,myString.length-1))
  }

  return false
  }

  function addUpTo(arr,num){
    if (num>0) {
      return arr[num]+addUpTo(arr,num-1)
    } else {
      return arr[num]
    }
  }

  //console.log(isPalindrome("madam"))
