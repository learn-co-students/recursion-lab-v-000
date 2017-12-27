function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  if (myString === '') {
    return '';
  } else {
    return reverseString(myString.substr(1)) + myString.charAt(0);
  }
}

function isPalindrome(string) {
  if (string[0] === string[string.length - 1]) {
    if (string.length === 1) {
      return true
    }
    isPalindrome(string.slice(1, -1))
      return true
  } else {
    return false
  }
}

function addUpTo(arr, index) {
  if (index) {
    return arr[index] + addUpTo(arr, --index);
  } else {
    return arr[index];
  }
}

function maxOf(arr) {
  if (arr.length !== 1) {
    arr.splice(arr.indexOf(Math.min(arr[0], arr[1])), 1);
    return maxOf(arr);
  } else {
    return arr[0];
  }
}

function includesNumber(arr, element) {
  if (!arr.length) {
    return false;
  } else if (arr[0] === element) {
    return true;
  } else {
    return includesNumber(arr.slice(1), element);
  }
}