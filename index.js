function printString(myString) {
  console.log(myString[0]);
  
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}



function reverseString(str) {
  if(str.charAt(0) === ''){
    return "";
  }
  return (str.charAt(str.length -1) + reverseString(str.substring(0,str.length-1)));
}


function isPalindrome(myString) {
  let strLength = myString.length;
  if (strLength === 0 || strLength === 1) {
    return true;
  }

  if (myString[0] === myString[strLength - 1]) {
    myString = myString.substring(1, strLength - 1);
    return isPalindrome(myString);
  }

  return false;
}

function addUpTo(arr, index) {
  if (arr.length === 1) {
    return arr[0];
  }
  let arr1 = arr.slice(1, index + 1);
  return arr[0] + addUpTo(arr1, arr1.length - 1);
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return Math.max(arr.pop(), maxOf(arr));
  }
}

function includesNumber(arr, num) {
  if (arr.length === 0) {
    return false;
  } else if (arr[0] === num) {
    return true;
  } else {
    return includesNumber(arr.slice(1, arr.length), num);
  }
}