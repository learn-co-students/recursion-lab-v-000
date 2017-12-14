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

function addUpTo(n){
  if(n > 1){
      addUpTo(n - 1) + n
  } else {
    return 1
  }
}

function maxOf(){

}

function includesNumber(){

}
