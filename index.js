function printString(str) {
  console.log(str.charAt(0))

  if (str.length > 1) {
    return printString(str.slice(1))
  }
}


function reverseString(str) {
  return str.length > 1 ? str.charAt(str.length-1).concat(reverseString(str.slice(0, str.length-1))) : str.charAt(0)
}

function isPalindrome(str) {
  if (str.charAt(0) !== str.charAt(str.length-1)) {
    return false
  } else if (str.length > 2) {
    return isPalindrome(str.slice(1, str.length-1))
  }
  return true
}

function addUpTo(arr, index) {
  if (index >= arr.length) {return -1}

  if (index > 0) {
    return arr.shift() + addUpTo(arr, --index)
  } else {
    return arr[0]
  }
}

function maxOf(arr) {
  if (arr.length === 1) {return arr[0]}
  arr[0] > arr[arr.length - 1] ? arr.pop() : arr.shift()
  return maxOf(arr)
}

function includesNumber(arr, x) {
  if (arr.length === 0) {
    return false
  } else if (arr[0] === x) {
    return true
  } else {
    arr.shift()
    return includesNumber(arr,x)
  }
}
