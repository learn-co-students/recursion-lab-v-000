// Code your solution here!
// function printString(string){
//   var i;
//   for(i=0; i < string.length; i++){
//     console.log(string[i]);
//   }
// }
// ** NICE TRY (Above solution incorrect)

function printString(string){
  var substring;
  console.log(string[0])
  if (string.length > 1){
    substring = string.substr(1, string.length);
    printString(substring);
  } else {
    return true;
  }
}
// This will call the printString function once for each letter of the string. The function will print just the first letter of the string, then the function will be called on a substring discluding the first letter which will print the second letter instead and so on until all letters have been printed. Eventually the function will try to create the substring "string.substr(1, 1)" which will first return a 1 letter string, and then return a blank string after being called on the 1 letter string. We add a conditional to stop the loop once it gets to this point

function reverseString(string){
  if (string.length == 0){
    return "";
  } else {
    return reverseString(string.substr(1)) + string.charAt(0);
  }
}

function isPalindrome(string){
  if(string.length == 0 || string.length == 1){
    return true;
  }
  if (string.charAt(0) == string.charAt(string.length-1)){
    return isPalindrome(string.substring(1, string.length-1));
  } else {
    return false;
  }
}

// function addUpTo(num){
//   if (num > 0){
//     return num + addUpTo(num-1)
//   } else {
//     return 0
//   }
// }
// Adds up to given number using all lower consecutive numbers

function addUpTo(array, index){
  if (index == 0){
    return array[0]
  } else {
    return array[index] + addUpTo(array, index-1)
  }
}

function maxOf(array){
  if (array.length == 1){
    return array[0];
  } else{
    if(array[0] >= array[1]){
      return maxOf(array.slice(2).concat([array[0]]))
    } else{
      return maxOf(array.slice(1));
    }
  }
}

function includesNumber(array, number){
  if(array.length == 0){
    return false;
  } else{
    if (array[0] == number){
      return true;
    } else{
      return includesNumber(array.slice(1),  number);
    }
  }
}





