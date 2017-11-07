// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  };
};

function reverseString(str) {
  if(str === ""){
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
};

function isPalindrome(str) {
  var stringLength = str.length;
  if(stringLength === 0 || stringLength === 1) {
    return true
  }

  if(str[0] === str[stringLength - 1]) {
    return isPalindrome(str.slice(1, stringLength - 1));
  }
    return false
};

function addUpTo(array, index) {
  console.log(array, index)
  if (index == 0){
    return array[index]
  }
  return addUpTo(array, index-1) + array[index]
};

function maxOf(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    return Math.max(array.shift(), maxOf(array))
  };
}

function includesNumber(array, number) {
 if (!array.length){
   return false;
 } else if (array[0] === number){
   return true;
 } else {
   return includesNumber(array.slice(1), number);
 }
}
