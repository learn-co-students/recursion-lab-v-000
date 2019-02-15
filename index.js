// Code your solution here!

function printString(str){
  console.log(str[0]);

  if(str.length > 1){
    let sub = str.substring(1, str.length);
    printString(sub);
  }
  else{
    return true;
  }
}

function reverseString(str){
  if(str.length < 2){
    return str;
  }
  else{
    return reverseString(str.substring(1)) + str[0];
  }
}

function isPalindrome(str){
  let len = str.length;
  if(len < 2){
    return true;
  }
  else if (str[len-1] === str[0]) {
    return isPalindrome(str.substring(1,len-1))
  }
  else{
    return false;
  }
}

function addUpTo(num, i){
  return i ? num[i] + addUpTo(num, --i) : num[i];
}

function maxOf(n){
  if(n.length === 1){
    return n[0];
  }
  else{
    return Math.max(n.pop(), maxOf(n));
  }
}

function includesNumber(arr, num){
  if(!arr.length){
    return false;
  }
  else if (arr[0] === num) {
    return true;
  }
  else{
    return includesNumber(arr.slice(1), num)
  }
}
