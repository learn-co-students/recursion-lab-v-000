function printString(str) {
  console.log(str[0]);
  if (str.length > 1) {
    let substr = str.substring(1)
    printString(substr)
  }
}

function reverseString(str) {
  let reversedString = str[0]
  if (str.length > 1) {
    let substr = str.substring(1)
    reversedString = reverseString(substr) + reversedString
  }
  return reversedString
}

function isPalindrome(str) {
  if (str.length > 1) {
    if (str[0] === str[str.length - 1]) {
      let substr = str.substring(1, str.length - 1)
      isPalindrome(substr)
    } else {
      return false
    }
  }
  return true
}

function addUpTo(arr, i) {
  let sum = arr[i]
  if (i > 0) {
    sum += addUpTo(arr, i - 1)
  }
  return sum
}

function maxOf(arr) {
  let max = arr[0]
  if (arr.length > 1) {
    let subArr = arr.splice(1)
    let newMax = maxOf(subArr)
    if (newMax > max) {
      max = newMax
    }
  }
  return max

}

function includesNumber(arr, element) {
  if (arr.length === 0) {
    return false
  }
  if (arr[0] === element) {
    return true
  } else {
    return includesNumber(arr.splice(1), element)
  }
}
