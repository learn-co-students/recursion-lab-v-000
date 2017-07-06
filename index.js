// Code your solution here!

function printString(myString) { 
  console.log(myString[0]);
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
  return myString;
}

function reverseString(str) {
  console.log('STRING', str)
  if (str.length == 1) {
    return str;
  } else {
    console.log(str.substr(1) + str.charAt(0))
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

function isPalindrome(str){
  console.log(str)
  
  if (str.length == 1) {
    return true
  }

  if (str[0] != str[str.length-1]){
    return false;
  }

  return isPalindrome(str.substring(1, str.length-1))
  
}

function addUpTo(array, index){
  console.log(array, index)
  if ( index == 0 ) {
    return array[index]
  }

  return addUpTo(array, index-1) + array[index]
  
}

function maxOf(array){

  var len = array.length

  if ( len == 1) {
    return array[0] // integer
  }

  var result = maxOf(array.slice(0, len-1) )

  return result > array[len-1]  ? result : array[len-1] ;

}

function includesNumber(array, int) {
  if ( array.length == 1) {
    return array[0] == int ? true : false
  } 

  if ( array[0] == int ){
    return true
  }

  return includesNumber(array.splice(1, array.length), int)
}

