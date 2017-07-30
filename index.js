// Code your solution here!

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
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    return reverseString(mySubString) + myString[0];
  } else {
    return myString;
  }
}

function isPalindrome(word) {
  if (word.length < 2) return true;
  if (word[0] == word[word.length-1]) {
    return isPalindrome(word.substring(1, word.length - 1));
  }
  else return false;
}

function addUpTo(array, index) {
  if (index == 0) return array[0];
  else return addUpTo(array,index-1) + array[index];
}

function maxOf(array) {
  if (array.length == 1) return array[0];
  else {
    const first = array.shift();
    const subArrayMax = maxOf(array);
    return first > subArrayMax ? first : subArrayMax;
  }
}

function includesNumber(array, number) {
  if (array.length == 1) {
    return array[0] == number ? true : false;
  } else {
    const first = array.shift();
    return (first == number) || includesNumber(array, number);
  }
}