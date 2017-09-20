// Code your solution here!

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
    if (myString.length < 2) {
        return myString;
    } else {
        return reverseString(myString.substring(1)) + myString[0];
    }
}

function isPalindrome(myString) {
    if (myString.length === 1) {
        return true
    }
    if (myString.length === 2) {
        if (myString[0] !== myString[myString.length - 1]) {
            return false
        } else {
            return true
        }
    }

    if (myString[0] !== myString[myString.length - 1]) {
        return false
    }

    return isPalindrome(myString.substring(1, myString.length - 1))
}

function addUpTo(myArray, i) {
    let sum = 0
    if (i > 0) {
        sum = myArray[i] + addUpTo(myArray, i - 1)
    } else {
        return sum + myArray[i]
    }
    return sum
}

function maxOf(myArray) {
    if (myArray.length > 1) {
        let a = myArray
        if (myArray[0] < myArray[1]) {
            let b = a.shift()
            return maxOf(a)
        } else {
            let b = a.shift()
            a.shift()
            a.unshift(b)
            return maxOf(a)
        }
    }

    return myArray[0]
}

function includesNumber(myArray, n) {
    if (myArray[0] === n) {
        return true
    }

    if (myArray.length > 1) {
        myArray.shift()
        return includesNumber(myArray, n)
    }

    return false
}