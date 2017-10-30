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