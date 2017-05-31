function printString(string) {
  console.log(string[0])
  if(string.length > 1){
    printString(string.substring(1, string.length))
  } else{
    return true
  }
}

function reverseString(str) {
  if(str.length <= 1) return str;
  else return reverseString(str.substring(1)) + str.charAt(0);
}

function isPalindrome(str) {
  if(str.length <= 1) {
    return true;
  } else if(str[0] === str[str.length-1]) {
    return isPalindrome(str.slice(1,str.length-1));
  } else {
    return false;
  }
}

function addUpTo(arr, index) {
  if(index === 0){
    return arr[0];
  } else {
    return arr[index] + addUpTo(arr, index-1);
  }
}

function maxOf(arr) {
  if(arr.length === 1) return arr[0];
  else return Math.max(arr.pop(), maxOf(arr)) 
}

function includesNumber(arr, num) {
  if(arr.length === 0) return false;
  if(arr[0] === num) return true;
  else return includesNumber(arr.slice(1), num);
}

function addToCart(str){

}

function getCart(){
  return [{'item': undefined}];
}