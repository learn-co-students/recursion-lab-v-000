// Code your solution here!
function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    let subString = string.substring(1, string.length);

    printString(subString);
  }
}

function reverseString(string) {
  let lastLetter = string[string.length - 1];
  let removedLastLetter = string.substring(0, string.length - 1);

  if (string.length > 0) {
    let newString = lastLetter + reverseString(removedLastLetter)

    return newString;
  } else {
    return string;
  }
}

function isPalindrome(string) {
  let firstLetter = string[0];                                      // first letter of string
  let lastLetter = string[string.length - 1];                       // last letter of string
  let removedFirstLast = string.substring(1, string.length - 1);    // new string without first and last letter of original word

  if (firstLetter !== lastLetter) {                                 // is the first letter equal to the last letter; if not then false
    return false;
  } else if (firstLetter === lastLetter) {                          // if it is

    if (string.length > 2) {                                        // is the string greater than two letters; if it is then it needs to call itself again
      return isPalindrome(removedFirstLast);
    } else if (string.length === 2 || string.length === 1) {        // is the string two or one letters; if it is then it is a palindrome
      return true;
    }
  }
}

function addUpTo(array, index) {
  let firstNumber = array[index];               // first number in array
  let newArray = array.splice(0, index);

  if (index > 0) {
    let nextIndex = index - 1;                   // subtract one to index

    return firstNumber + addUpTo(newArray, nextIndex);
  } else {
    return firstNumber;
  }
}

function maxOf(array) {
  if (array.length === 1) {             // if only one element in array, then biggest number
    return array[0];
  } else if (array.length > 1) {        // there is more than one element in array

    if (array[0] >= array[1]) {         // if the first element is bigger or equal to next element, remove that second element and call function
      let newArray = [...array.splice(0, 1), ...array.splice(1, array.length)];

      return maxOf(newArray);
    } else if (array[0] < array[1]) {   // if second element is bigger than remove first element and call function
      let newArray = [...array.splice(1, array.length)];

      return maxOf(newArray);
    }
  }
}

function includesNumber(array, number) {
  if (array.length === 1) {                                 // is there only one element in array; if so is the element equal to the number
    if (number === array[0]) {
      return true
    } else {
      return false
    }
  } else if (array.length > 1) {                            // if there is more than one element in array
    if (number === array[0]) {                              // is the number equal to the first element; if so return true
      return true
    } else if (number !== array[0]) {                       // if it is not equal remove the first element and call the function again but with the new array
      let newArray = array.splice(1, array.length);

      return includesNumber(newArray, number)
    }
  }
}
