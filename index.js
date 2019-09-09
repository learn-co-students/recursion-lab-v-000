// Code your solution here!
function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    let subString = string.substring(1, string.length)
    printString(subString)
  } else {
    return true
  }
}

function reverseString(string) {
  if(string.length === 1) {
    return string
  } else {
    let subString = string.substring(1, string.length)
     return reverseString(subString) + string[0]
  }
}

function isPalindrome(string) {
  if (string.length === 1 || string === "") {
    return true
  } else {
    let subString = string.substring(1, string.length -1)
    return isPalindrome(subString) && string[0] === string[string.length - 1]
  }
}

function addUpTo(array, index) {
  if(index === 0) {
    return array[index]
  } else {
    return addUpTo(array, index - 1) + array[index]
  }
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  } else {
    let lastElement = array.pop()
    let returnedValue = maxOf(array)
    if(returnedValue > lastElement) {
      return returnedValue
    } else {
      return lastElement
     }
   }
}

function includesNumber(array, number) {
  if (array.length === 1 && array[0] !== number) {
    return false
  } else {
    if (array[0] === number){
      return true
    } else {
      array.shift()
      return includesNumber(array, number)
    }
  }
  return false
}
