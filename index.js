// Code your solution here!

function printString(myString) {
    console.log(myString[0])
    if(myString.length > 1) {
        myString = myString.substring(1, myString.length)
        printString(myString)
    } else {
        return true
    }   
}

function reverseString(myString) {
    if (myString === '') {
        return myString
    } else {
        return reverseString(myString.substring(1)) + myString.charAt(0)
    }
}

function isPalindrome(myString) {
    if(myString.length === 1 || myString.length === 0) {
        return true
    } else if(myString[0] === myString[myString.length - 1]) {
        return isPalindrome(myString.slice(1, myString.length - 1))
    } else {
        return false
    }
}