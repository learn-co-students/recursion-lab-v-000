function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);

    printString(mySubString);
  } else {
    return true;
  }
}

// printString("supercalifragilisticexpialidocious");

function reverseString(string) {
  if (string === "") {
    return "";
  } else {
    return reverseString(string.substring(1)) + string.charAt(0);
  }
}

// reverseString("pizza");

function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  }

  let [firstLetter] = string;
  let lastLetter = string[string.length - 1];

  if (firstLetter === lastLetter) {
    return isPalindrome(string.substring(1, string.length - 1));
  } else {
    return false;
  }
}

function addUpTo(array, index) {
  if (array.length < 1 || index === 0) {
    return array[0];
  } else {
    return addUpTo(array, index - 1) + array[index];
  }
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    return Math.max(array.shift(), maxOf(array));
  }
}

function includesNumber(array, num) {
  if (!array.length) {
    return false;
  } else if (array[0] === num) {
    return true;
  } else {
    return includesNumber(array.slice(1), num);
  }
}
