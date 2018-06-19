function printString (string) {
  console.log(string[0])

  if (string.length > 1) {
    printString(string.substring(1, string.length))
  } else {
    return true
  }
}

function reverseString (string) {
  if (string === '') {
    return ''
  } else {
    return reverseString(string.substring(1)) + string.charAt(0)
  }
}

function isPalindrome (string) {
  let s = string.toLowerCase()

  if (s.length === 0 || s.length === 1) {
    return true
  } else if (s[0] === s[s.length - 1]) {
    return isPalindrome( s.slice(1, s.length - 1))
  } else {
    return false
  }
}

function addUpTo (array, index) {
  if (index > 0) {
    return array[index] + addUpTo(array, index - 1)
  } else {
    return array[0]
  }
}

function maxOf (array) {
  if (array.length > 1) {
    if (array[0] < array[1]) {
      return maxOf(array.slice(1))
    } else {
      return maxOf(array.slice(0, -1))
    }
  } else {
    return array[0]
  }
}

function includesNumber (array, n) {
  if (array.length > 0) {
    if (array[0] === n) {
      return true
    } else {
      return includesNumber(array.slice(1), n)
    }
  } else {
    return false
  }
}
