import { reverse } from "dns";

// Code your solution here!

function printString(string) {
    console.log(string[0])

    if(string.length > 1){
        let mySubString = string.substring(1, string.length) //up until string.length-1   
        printString(mySubString)    
    }else{
        return true;
    }
}

function reverseString(string){
  if (string.length === 0){
    return ""
  }else{
      return reverseString(string.substring(1)) + string[0]
  }
}

function isPalindrome(word){
    let length = word.length
    
    if (length < 2){
        return true
    }else if(word[0] === word[word.length-1]){
        return isPalindrome(word.substring(1, word.length-1))
    }else{
        return false
    }
  }

function addUpTo(arr, idx){
    if (idx){
       return arr[idx] + addUpTo(arr, --idx)
    }else{
     return arr[idx]
    }
}

function maxOf(myArray) {
    if (myArray.length === 1) {
      return myArray[0];
    } else {
      return Math.max(myArray.shift(), maxOf(myArray));
    }
  }
  
  function includesNumber(myArray, myNumber) {
    if (!myArray.length) {
       return false
    } else 
    if (myArray[0] === myNumber) {
       return true;
    } else {
       return includesNumber(myArray.slice(1), myNumber);
    }
  }