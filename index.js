// Code your solution here!

function printString(string) {
  let substring = string.substring(1, string.length)
  
  console.log(string[0])
  
  !!substring && printString(substring)
}

function reverseString(string) {
  const lastIndex = string.length - 1
  const substring = string.substring(0, lastIndex)

  if (lastIndex >= 0) {
    return string[lastIndex] + reverseString(substring)
  } else {
    return string
  }
}

function isPalindrome(string) {
  const lastIndex = string.length - 1
  const substring = string.substring(1, lastIndex)
  
  if (lastIndex > 0 && string[0] === string[lastIndex]) {
    if (!!substring) isPalindrome(substring)
     return true
  } else if (lastIndex === 0) {
    return true
  } else {
    return false
  }
}

function addUpTo(array, index) {
  return index ? array[index] + addUpTo(array, index - 1) : array[index]
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  } else {
    return Math.max(array.pop(), maxOf(array))
  }
}

function includesNumber(array, number) {
  if (!array.length) {
    return false
  }
  else if (array[0] === number) {
    return true
  }
  else {
    return includesNumber(array.slice(1), number)
  }
}