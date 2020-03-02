function printString(str) {
  console.log(str[0]);

  if (str.length > 1) {
    let mySubStr = str.substring(1, str.length);
    printString(mySubStr);
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
  let n = str.length
  if (n === 0 || n === 1) {
    return true
  } else if (str[0] === str[n - 1]) {
    return isPalindrome(str.slice(1, n - 1))
  }
  return false
}

function addUpTo(arr, idx) {
  return (idx === 0) ? arr[0] : arr[0] + addUpTo(arr.slice(1), idx - 1);
}

function maxOf(arr) {
  let n = arr.length;
  if (n === 1 ) {
    return arr[0]
  } else {
    return maxOf(arr[0] < arr[n-1] ? arr.slice(1) : arr.slice(0, -1));
  }
}

function includesNumber(arr, num) {
  let n = arr.length
  if (arr[0] === num) {
    return true
  } else if (n > 1) {
    arr.shift();
    return includesNumber(arr, num)
  }
  return false
}
