function printString(myString) {
    console.log(myString[0]); 

    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length); 
        printString(mySubString);
    } else {
        return true; 
    }
}

function reverseString(myString) {
    if (myString.length < 2){
        return myString; 
    } else {
        return reverseString(myString.substring(1)) + myString[0] 
    }
}

function isPalindrome(myString){
    if (myString.length < 2) {
        return true 
    }
    else if (myString[0] === myString[myString.length-1]) {
        return isPalindrome(myString.substring(1, myString.length-1))
    }
    else { return false }
}

function addUpTo(array, index){
    let number = array[index] 
    if (index > 0) {
        return number + addUpTo(array, index-1)
    }
    else {
        return number; 
    }
}

function maxOf(array) {
    if (array.length === 1) {
      return array[0];
    } else {
      return Math.max(array.pop(), maxOf(array));
    }
  }

function includesNumber(array, number){
    if (array[0] === number){
        return true 
    } 
    if (array.length > 1){
        return includesNumber(array.slice(1), number); 
    }
    else {
       return false 
    }

}

