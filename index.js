// Code your solution here!

function printString (myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let subString = myString.substring(1, myString.length);
    printString(subString);
  } else {
    return true;
  }
}

//printString('pizza')
//printString("supercalifragilisticexpialidocious");

function reverseString(string) {
  if (string.length > 1) {
    return string.charAt(string.length - 1) + reverseString(string.substring(string.length - 1, 0))
  } else {
    return string
  }
}

function isPalindrome(string) {
  let str = string.length
  if (str <= 1) {
    return true
  } else if (string[str - 1] === string[0]) {
    return isPalindrome(string.substring(1, str - 1))
  } else {
    return false
  }
}

function addUpTo(array, i) {
  return i ? array[i] + addUpTo(array, --i) : array[i]
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
  } else if (array[0] === number) {
    return true
  } else {
    return includesNumber(array.slice(1), number)
  }
}
