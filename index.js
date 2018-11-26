// Code your solution here!
function printString(string) {
  console.log(string[0]);
  if (string.length > 1) {
    let substring = string.substring(1, string.length);
    printString(substring);
  } else {
    return true
  }
}

function reverseString(str) {
  if (str === "") 
    return "";
  
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}

function isPalindrome(str) {
  let strLen = str.length;
    if (strLen === 0 || strLen === 1) {
        return true;
    }
    
    if (str[0] === str[strLen - 1]) {
        return isPalindrome( str.slice(1, strLen - 1) );
    }
    
    return false;
}

function addUpTo(array, index) {
  if (array[0] == array[index]) {
    return array[0];
  } else {
    return addUpTo(array.slice(1), index - 1) + array[0]
  }
}

function maxOf(array) {
  if (array.length == 1) {
    return array[0]
  }
  if (array[0] < array[1]) {
    return maxOf(array.slice(1))
  } else {
    array.splice(1, 1)
    return maxOf(array)
  }
}

function includesNumber(array, n) {
  if (array.length === 0) {
    return false
  } else if (array[0] == n) {
    return true
  } else {
    return includesNumber(array.slice(1), n)
  }
}