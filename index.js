function printString(myString) {
  let letter = myString[0];
  console.log(letter);
  if (myString.length > 1) {
    printString(myString.substring(1, myString.length));
  }
}


function reverseString(string) {
  if (string === "") {
    return "";
  } else {  
    return reverseString(string.substr(1)) + string.charAt(0);
  }
}

function isPalindrome(string) {
  string = string.split('');
  let palStatus = true;
  if (string.length > 1) {
    if (string.pop() === string.shift()) {
      isPalindrome(string.join(''));
    } else {
      palStatus = false;
    }
  }
  return palStatus;
}

function addUpTo(arr, idx) {
 if (idx) {
   return addUpTo(arr, idx-1) + arr[idx];
 } else {
   return arr[idx];
 }
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return Math.max(arr.pop(), maxOf(arr));
  }
}

function includesNumber(arr, num) {
  if (!arr.length) {
    return false 
  } else if (arr[0] === num) {  
      return true;
  } else {
    return includesNumber(arr.slice(1), num);
  }
}

