function printString(str) {
  console.log(str[0]);
  if (str.length > 1) {
    let substr = str.substring(1, str.length);
    printString(substr);
  } else {
    return true;
  }
}

function reverseString(str) {
  if (str.length > 1) {
    return reverseString(str.substr(1)) + str.charAt(0);
  } else {
    return str;
  }
}

function isPalindrome(string) {      
  if (string.length === 0 || string.length === 1) {        
      return true;
    } else if (string[0] === string[string.length - 1]) {
      return isPalindrome( string.slice(1, string.length - 1));
    } else {
      return false;
    }
};

function addUpTo(myArray, i) {
  let sum = 0
  if (i > 0) {
      sum = myArray[i] + addUpTo(myArray, i - 1)
  } else {
      return sum + myArray[i]
  }
  return sum
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return Math.max(arr.pop(), maxOf(arr));
  }
}

function includesNumber(arr, element) {
  if (arr.length === 0) {
    return false;
  } else if (arr[0] === element) {
      return true;
  } else {
      return includesNumber(arr.slice(1), element)
  }
}