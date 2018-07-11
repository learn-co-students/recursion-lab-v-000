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
  if (string.length <= 1){
    return true;
  } else if(string[0] === string[string.length -1]){
    let mySubString = string.substring(1, string.length - 1);
    return isPalindrome(mySubString);
  } else {
    return false;
  }
}
