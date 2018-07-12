function printString(string){
  console.log(string[0]);

  if (string.length > 1){
    let mySubString = string.substring(1, string.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string){
  if(string.length > 1){
    return string.slice(-1) + reverseString(string.slice(0, -1))
  } else {
    return string;
  }
}

function isPalindrome(string){
  if (string.length < 2){
    return true;
  } else if (string[0] === string[string.length - 1]){
    return isPalindrome(string.substring(1, string.length - 1))
  } else {
    return false;
  }
}

function addUpTo(array, index){
  if (index === 0){
    return array[0];
  } else {
    return array[0] + addUpTo(array.slice(1), --index);
  }
}

function maxOf(array){
  if(array.length === 1){
    return array[0];
  } else {
    return Math.max(array[0], maxOf(array.slice(1)))
  }
}

function includesNumber(array, number){
  if (array[0] === number){
    return true;
  } else if(array.length > 1){
    return includesNumber(array.slice(1), number)
  } else {
    return false;
  }
}
