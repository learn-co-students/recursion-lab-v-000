// Code your solution here!

function printString(myString) 
{
    console.log(myString[0]);

    if (myString.length > 1) {
        let mySubstring = myString.substring(1, myString.length);
        printString(mySubstring);
    } else {
        return true;
    }
}

function reverseString(myString) 
{
    if (myString.length < 2) {
        return myString;
    } else {
        return reverseString(myString.substring(1)) + myString[0];                
    }
}

function isPalindrome(myString) 
{
    if (myString.length <= 1) {
        return true;
    } else if (myString[0] === myString[myString.length-1]) {
        return isPalindrome(myString.substring(1, myString.length-1));            
    } else {
        return false;
    }
}

function addUpTo(myArray, myIndex) 
{
   if (myIndex > 0) {
    return addUpTo(myArray, myIndex - 1) + myArray[myIndex]    
   } else {
       return myArray[myIndex];
   }
}

function maxOf(myArray) 
{
    if (myArray.length === 1) {
        return myArray[0];
    } else {
        return Math.max(myArray.pop(), maxOf(myArray));
    }
}

function includesNumber(array, number) 
{
    if (array.length === 0) {
        return false;
    } else if (array[0] === number) {
        return true;
    } else {
        return includesNumber(array.slice(1), number);
    }
}