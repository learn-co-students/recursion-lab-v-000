function printString(string) {
  console.log(string[0])
  if (string.length > 1) {
    let subString = string.substring(1, string.length)
    printString(subString)
  } else {
    return true
  }
}

function reverseString(string) {
  if (string.length > 1) {
    return reverseString(string.slice(1)) + string[0]
  } else {
    return string
  }
}

function isPalindrome(string) {
  if (string.length < 2 ) {
      return true
  } else if (string[0] === string[string.length - 1]) {
      return isPalindrome(string.slice(1, string.length - 1))
  } else {
      return false
  }
}

function addUpTo(arr, index) {
  if (index > 0) {
    let newIndex = index - 1
    return addUpTo(arr, newIndex) + arr[index]
  } else {
    return arr[index]
  }
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr
  } else {
    return Math.max(arr.pop(), maxOf(arr))
  }
}

function includesNumber(arr, num) {
  if (!arr.length) {
    return false
  } else if (arr[0] === num) {
    return true
  } else {
    return includesNumber(arr.slice(1), num)
  }
}
