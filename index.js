// 1. Print the first character in the string
// 2. If the has more than one character, reduce the original by one character at each iteration, starting from front, and apply the function to the substring
// 3. Otherwise (=if less than two characters remain in the substring), exit

function printString(string) {
  console.log(string[0]);
  if (string.length > 1) {
    printString(string.substring(1, string.length));
  } else
    return true;
}



function reverseString(string) {
  var reverse = [];
  reverse.push(string[string.length - 1]);
  if (string.length > 1) {
    var substring = string.substring(0, string.length - 1);
    reverse.push(reverseString(substring));
  }
  return reverse.join("");
}

function isPalindrome(string) {
  if (string.length === 1) {
    return true;
  } else if (string[0] != string[string.length-1]) {
    return false;
  } else {
    var substring = string.substring(1, string.length - 1);
    return isPalindrome(substring);
  }
}

function addUpTo(array, index) {
  if (index > 0) {
    return addUpTo(array, index - 1) + array[index];
  } else {
    return array[0];
  }
}

function maxOf(array) {
  if (array.length > 1) {
    if (array[1] > array[0]) {
      return maxOf(array.slice(1, array.length));
    } else {
      array[1] = array[0];
    return maxOf(array.slice(1, array.length));
    }
  } else {
  return array[0];
  }
}

function includesNumber(array, el) {
  if (array[0] === el) {
    return true;
  } else {
      while (array.length > 0) {
      array.shift();
      return includesNumber(array, el);
    }
  }
  return false;
}
