//prints first letter, if string longer than 1, recurses on new string that starts at 2nd letter
function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let substring = myString.substring(1, myString.length);
    printString(substring);
  } else {
    return true;
  }

}

//recurses on substrings until only single letter (last letter), returns that last letter, appends on second to last letter, etc.
function reverseString(myString) {
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0];
  }
}


//compares first and last letter if true until reaches middle or false
function isPalindrome(myString) {
  let length = myString.length

  if(length < 2) {
    return true;
  } else if (myString[0] === myString[length - 1]) {
    return isPalindrome(myString.substring(1, length - 1));
  } else {
    return false;
  }
}


//add num at given index to recursion on index - 1
function addUpTo(arr, i) {
  return i ? arr[i] + addUpTo(arr, i - 1) : arr[i];
}


//keep popping off final num until only 1 left, compare that num to previous, return max
function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return Math.max(arr.pop(), maxOf(arr));
  }
}

//compare index 0 to given num, slice arr into sub-arr starting at index 1, compare again, until true or array length is 0 then false
function includesNumber(arr, num) {
  if (!arr.length) {
    return false;
  } else if (arr[0] === num) {
    return true;
  } else {
    return includesNumber(arr.slice(1), num);
  }
}
