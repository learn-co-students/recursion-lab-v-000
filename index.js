function printString(myString) {
    console.log(myString[0]);

    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString);
    } else {
        return true;
    }
}

function reverseString(myString){
    if (myString.length > 1) {
        return reverseString(myString.substring(1)) + myString[0];
    } else {
        return myString;
    }
}

function isPalindrome(myString){
    let l = myString.length;

    if (l === 0 || l === 1) {
        return true
    }

    if (myString[0] === myString[l - 1]) {
        return isPalindrome(myString.slice(1, l - 1));
    }

    return false
}

function addUpTo(array, index) {
    if (index) {
        // -- pre-decrements the index, so 1 - 1 etc
        return array[index] + addUpTo(array, --index)
    } else {
        return array[index]
    }
}

function maxOf(array) {
    if (array.length == 1) {
        return array[0];
    }  else {
        return Math.max(array.pop(), maxOf(array));
    }
}

function includesNumber(array, number) {
    if (!array.length) {
        return false;
    } else if (array[0] == number) {
        return true
    } else {
        return includesNumber(array.slice(1), number);
    }
}