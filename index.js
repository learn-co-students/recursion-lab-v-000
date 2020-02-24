// Code your solution here!

function printString(string) {
  console.log(string[0]);
  if (string.length > 1) {
    string = string.slice(1);
    printString(string);
  } 
}

function reverseString(string) {
  if (string.length < 2) {
    return string;
  } else {
    return string[string.length - 1] + reverseString(string.slice(0, string.length - 1));
  }
}

function isPalindrome(string) {
 if (string.length < 2) {
   return true;
 }
 else if (string[0] !== string[string.length - 1]) {
   return false
 } else {
   let newString = string.substring(1, string.length - 1);
   console.log(newString)
   isPalindrome(newString);
 };
 return true
}

function addUpTo(array, index) {
  if (index === 0) {
    return array[0]
  } else {
    let newIndex = index - 1;
    return array[index] + addUpTo(array, newIndex)
  }
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    array[0] > array[1] ? array.splice(1, 1) : array.shift();
    console.log(array)
    return maxOf(array);
  }
}

function includesNumber(array, number) {
  if (array.length > 0) {
    if (array[0] == number) {
      return true;
    } else {
    array.shift();
    }
    return includesNumber(array, number)
  }
  return false
}
