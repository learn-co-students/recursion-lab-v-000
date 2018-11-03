// Code your solution here!

function printString(myString){
    console.log(myString[0]);

    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length)
        printString(mySubString)
    } else {
        return true
    }
}



function reverseString(str) {
    if (str === "") 
      return "";
    
    else
      return reverseString(str.substr(1)) + str.charAt(0);
}

// function isPalindrome(str){
//     if (printString(str) == reverseString(str)){
//         return true
//     } 
// }

function isPalindrome(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
  }
  function addUpTo(arr){
  
    if (arr.length == 1) return arr[0] // base case
    return arr[0] + addUpTo(arr.slice(1))  // recurse
    
  }

  function maxOf(arr){
    var max = 0;
    
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
    }
    return max;

  }

  function includesNumber(arr, num){
      for (var i = 0; i < arr.length; i++){
          if (arr[i] == num){
              return true;
          } 
      }

  }