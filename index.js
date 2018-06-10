// Code your solution here!

function printString(string){
  console.log(string[0]);
  if(string.length > 1){
    let substring = string.substring(1, string.length);
    printString(substring);
  }else {
    return true;
  }
}


function reverseString(string){
  if(string.length == 1){
    return string;
  }else{
    let next = string.substring(0, string.length - 1);
    return string[string.length - 1] + reverseString(next);
  }
}

function isPalindrome(test){
  if(test.length == 1){
    return true;
  }
  return test[0] == test[test.length - 1] ?  isPalindrome(test.substring(1,test.length - 1)) : false;
}

function addUpTo(arr, i){
  return i == 0 ? arr[0] : arr[i] + addUpTo(arr.slice(0, i), i - 1);
}

function maxOf(arr){
  if(arr.length == 1){
    return arr[0]
  }
  return arr[0] > arr[arr.length - 1] ? maxOf(arr.slice(0,arr.length - 1)) : maxOf(arr.slice(1, arr.length));
}

function includesNumber(arr, num){
  if(arr[0] == num){
    return true;
  }
  if(arr.length == 1){
    return false;
  }
  return includesNumber(arr.slice(1,arr.length), num);
}
