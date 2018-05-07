function printString(str) {
  console.log(str[0]);
 
  if (str.length > 1) {
    let mySubString = str.substring(1, str.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

function isPalindrome(str) {
  if (str.length > 1) {
    if (str[0] === str[str.length-1]) {
      let palindromeSubstring = str.substring(1, str.length-1);
      isPalindrome(palindromeSubstring);
    } else {
      return false;
    }
  }
  return true;
}

function addUpTo(arr, ind) {
  if (ind === 0) {
    return arr[0]
  } else {
    return arr[ind] + addUpTo(arr.slice(0, ind), --ind)
  }
}

function maxOf(arr) {
  if (arr.length > 1) {
    if (arr[0] < arr[1]) {
      return maxOf(arr.slice(1))
    } else {
      return maxOf(arr.slice(0, 1).concat(arr.slice(2)))
    }
  } else {
    return arr[0]
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
