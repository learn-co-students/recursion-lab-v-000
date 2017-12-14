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
  return string === reverseString(string)
}

function addUpTo(){

}

function maxOf(){

}

function includesNumber(){

}
