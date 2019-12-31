// Code your solution here!

function printString(str){
    console.log(str[0]);
    if (str.length > 1) {
        printString(str.substring(1, str.length));
    } else {
        return true;
    }
}

function reverseString(str){
    let myStr = str[str.length - 1];
    if (str.length > 1) {
        myStr += reverseString(str.substring(0, str.length - 1));
    } 
    return myStr;
}

function isPalindrome(str){
    if (str.length > 1) {
        if (str[0].toLowerCase() === str[str.length - 1].toLowerCase()) {
            return isPalindrome(str.substring(1, str.length - 1));
        } else {
            return false;
        }
    } else {
        return true;
    }
}

function addUpTo(arr, index){
    if (index > 0) {
        return arr[index] += addUpTo(arr, (index - 1));
    } else {
        return arr[index];
    }
}

function maxOf(arr, largest = 0){
    if (arr.length > 1) {
      if(arr[0] > largest) {
        return maxOf(arr.slice(1), arr[0])
      } else {
        return maxOf(arr.slice(1), largest);
      }
    } 
    return largest > arr[0] ? largest : arr[0];
}

function includesNumber(arr, num){
    if (arr[0] === num) {
        return true;
    }
    if (arr.length > 1) {
        return includesNumber(arr.slice(1), num);
    }
    return false;
}