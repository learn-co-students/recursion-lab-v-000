function printString(myString) {
  if (myString.length > 1){
    printString (myString.substring(0, myString.length -1))
    console.log(myString[myString.length -1])
  } else {
    console.log(myString)
  }
}

function reverseString(myString) {
  if(myString.length > 1){
    return reverseString (myString.substring(1, myString.length)) + myString[0]
    
  } else {
    return myString[0]
  }
  
}

function isPalindrome(myString) {
  if (myString.length === 0 || myString.length === 1) {
    return true;
  } else if (myString[0] === myString[myString.length - 1]) {
      return isPalindrome(myString.substring(1, myString.length - 1));
  }else {
      return false;
  }
}

function addUpTo(array, index){
  if (index === 0){
    return array[index]
  } else{
    return array[index] + addUpTo(array, index - 1)
  }
}

function maxOf(array){
  if (array.length == 1){
    return array[0]
  } else {
    let comparison = maxOf(array.slice(1,array.length))
    return array[0] >= comparison ? array[0] : comparison
  }
}

function includesNumber(array, number){
  if (array.length === 1){
    return array[0] === number
  } else {
    return includesNumber(array.slice(1, array.length), number) || array[0] === number
  }
}
