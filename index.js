// Prints out each letter of a string with recursion
function printString(myString) {
    console.log(myString[0]);

    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString);
    } else {
        return true;
    }
}

// Reverses all letters of a string using recursion
function reverseString(myString) {
    if (myString === "") {
        return "";
    } else {
        return reverseString(myString.substr(1)) + myString.charAt(0);
    }
}

// Check with recursion if a string is a palindrome
function isPalindrome(myString) {
    if (myString.length <= 1) return true;
    if (myString.charAt(0) != myString.charAt(myString.length - 1)) return false;
    return isPalindrome(myString.substr(1, myString.length - 2));
}

// Sum all numbers up to a given index in an array with recursion
function addUpTo(array, index) {
    if (index == 0) {
        return array[0]
    } else {
        return addUpTo(array, index - 1) + array[index]
    }
}

// Find the largest integer in an array with recursion
function maxOf(array) {
    if (array.length === 1) {
        return array[0]
    } else {
        return Math.max(array.pop(), maxOf(array))
    }
}

// Return true if number is present in the array
function includesNumber(array, num) {
    if (array.length === 0) { return false };
    if (array[0] === num) { return true };
    return includesNumber(array.slice(1), num);
}