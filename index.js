function printString(str) {
  console.log(str[0])

  if (str.length > 1) {
   let newString = str.substring(1, str.length)
   printString(newString)
  } else {
   return true
  }
}

function reverseString(str) {
  return str.length <= 1
    ? str
    : reverseString(str.substring(1)) + str[0]
}

function isPalindrome(str) {
  let l = str.length
  if (l <= 1) {
    return true
  } else {
    if (str[0] === str[l - 1]) {
      let newString = str.substring(1, l - 1)
      return isPalindrome(newString)
    } else {
      return false
    }
  }
}

function addUpTo(arr, i) {
  return i > 0 ? arr[i] + addUpTo(arr, --i) : arr[i]
}

function maxOf(arr) {
  return arr.length === 1 ? arr[0] : Math.max(arr.pop(), maxOf(arr))
}

function includesNumber(arr, num) {
  if (!arr.length) {
    return false
  } else if (arr[0] === num) {
    return true
  } else {
    arr.shift()
    return includesNumber(arr, num)
  }
}
