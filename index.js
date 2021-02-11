// Code your solution here!

function printString(myString) {
    console.log(myString[0])
    if (myString.length > 1) {
        printString(myString.substring(1, myString.length))
    }
    else {
        return true
    }
    
}

function reverseString(myString) {

    if (myString.length < 2) {
        return myString
    }
    else {
        return reverseString(myString.substring(1)) + myString[0]
    }
}

function isPalindrome(myString) {
    let stringLen = myString.length

    if (stringLen < 2) {
        return true
    }
    else if (myString[0] === myString[stringLen - 1]) {
        return isPalindrome(myString.substring(1, stringLen - 1))
    }
    else {
        return false
    }
}

function addUpTo(myArray, index) {

    if (index) {
        return myArray[index] + addUpTo(myArray, --index)
    }

    else {
        return myArray[index]
    }
   
}

function maxOf(myArray) {

    if (myArray.length === 1) {
        return myArray[0]
    }

    else {
        return Math.max(myArray.pop(), maxOf(myArray))
    }
}

function includesNumber(myArray, num) {

    if (myArray.length === 0 ) {
        return false;
    }

    else if (myArray[0] === num) {
        return true;
    }

    else {

        return includesNumber(myArray.slice(1), num);
    }

}