// Code your solution here!

function printString(str) {
  console.log(str[0])
  if (str.length === 1) {
    return true
  } else {
    printString(str.slice(1))
  }
}

function reverseString(str) {
  if (str.length === 1) {
    return str
  } else {
    return str[str.length - 1] + reverseString(str.slice(0, str.length - 1))
  }
}

function isPalindrome(str) {
  if (str.length === 1) {
    return true
  } else if (str[0] !== str[str.length - 1]) {
    return false
  } else {
    return isPalindrome(str.slice(1, str.length - 1))
  }
}

function addUpTo(arr, idx) {
  if (idx === 0) {
    return arr[0]
  } else {
    return addUpTo(arr.slice(1), idx - 1) + arr[0]
  }
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0]
  } else if (arr[0] < arr[1]) {
    arr.splice(0, 1)
  } else if (arr[1] < arr[0]) {
    arr.splice(1, 1)
  }
  return maxOf(arr)
}

function includesNumber(arr, num) {
  if (arr[0] === num) {
    return true
  } else if (arr.length === 1 && arr[0] !== num) {
    return false
  } else {
    return includesNumber(arr.slice(1), num)
  }
}
