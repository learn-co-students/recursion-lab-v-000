// Code your solution here!

function addUpTo(arr, index){
  if (index - 1 >= 0){
    return arr[index] + addUpTo(arr, index - 1)
  }
  else {
    return arr[0]
  }
}

function printString(string){
  console.log(string[0]);

  let newString = string.substring(1, string.length);

  if (newString.length > 0){
    return printString(newString)
  }
  else {
    return true
  }
}


function reverseString(string){
  let index = string.length - 1;
  let newString = string.substring(0, index);

  if (index === 0){
    return string[index]
  }
  else{
    return string[index] + reverseString(newString)
  }
}

function isPalindrome(string){
  let last = string.length - 1;//hoeieoh
  let newString = string.substring(1, last)
  if (string.length === 1 || string.length === 0){
    return true
  }
  if (string[0] === string[last]){
    return isPalindrome(newString)
  }
  return false
}


function includesNumber(arr, num){
  let newArr = arr.slice(1, arr.length)
  if (arr.length === 0){
    return false
  }
  if (arr[0] === num){
    return true
  }
  else{
    return includesNumber(newArr, num)
  }
}

function maxOf(arr){
  let max = arr[0];
  let newArr = arr.slice(1, arr.length);
  if (arr.length === 1){
    return max
  }
  if (max >= newArr[0]){
    newArr[0] = max
  }
  return maxOf(newArr)
}
