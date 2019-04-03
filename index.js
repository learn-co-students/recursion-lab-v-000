function printString(string) {
  console.log(string[0]);

if (string.length > 1) {
let substring = string.substring(1, string.length);
printString(substring);
  }
}

function reverseString(string){
  return (string === '') ? '' : reverseString(string.substr(1)) + string.charAt(0)
}

function isPalindrome(string) {
  if (string.length === 1) {
    return true
  }
  
  return string[0] == string[string.length - 1] ?
  isPalindrome(string.slice(1, string.length - 1)) : false
}

function addUpTo(array, index) {
  return index === 0 ? array[0] : array[index] + addUpTo(array.slice(0, index), index - 1)
}

function maxOf(array) {
  if (array.length == 1) {
    return array[0]
  }
  return array[0] > array[array.length - 1] ? maxOf(array.slice(0, array.length - 1)) : maxOf(array.slice(1))
}

function includesNumber(array, num) {
  if(array[0] !== num && array.length == 1) {
    return false
  }
  return array[0] === num ? true : includesNumber(array.slice(1), num)
}