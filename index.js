// Code your solution here!

function printString(string){
  console.log(string[0])
  if (string.length > 1) {
    let substring
    substring = string.substring(1,string.length)
    printString(substring)
  } else {
    return true
  }
}

function reverseString(string){
  if (string.length > 1) {
    let substring = string.substring(0, string.length-1)
    return string.charAt(string.length-1) + reverseString(substring)
  } else {
    return string.charAt(0)
  }
}

function isPalindrome(string){
  let reversed = reverseString(string)
  console.log(reversed)
  if(string.length > 1){
    if (string[0] === reversed[0]){

    console.log(isPalindrome(string.substring(1, string.length -1)))
    return true
    } else {
      return false
      console.log("maybE?")
    }
  } else {
    return false
    console.log("false?")
  }
}

function addUpTo(array, index){
  return index ? array[index] + addUpTo(array, --index) : array[index]
}

function maxOf(array){
  if (array.length===1){
    return array[0]
  } else {
    //get the max of the shortened array plus max of that
    return Math.max(array.pop(), maxOf(array))
  }
}

function includesNumber(array, number){
  if (!array.length){
    return false
  } else if (array[0] === number) {
    return true
  } else {
    return includesNumber(array.slice(1), number)
  }
}
