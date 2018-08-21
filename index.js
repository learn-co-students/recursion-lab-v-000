// Code your solution here!
function printString(string) {
    console.log(string[0]);

    if (string.length > 1) {
        let substring = string.substring(1, string.length);
        printString(substring);
    } else {
        return true;
    }
}

function reverseString(string) {
    // Base Case
    if (string.length < 1) {
        return "";
    }

    return reverseString(string.substring(1)) + string.charAt(0);
}

function isPalindrome(string) {
    // Base Case
    if (string.length < 2) {
        return true;
    } else if (string.charAt(string.length - 1) === string.charAt(0)) {
        return isPalindrome(string.substring(1, string.length - 1));
    } else {
        return false;
    }
}

function addUpTo(array, index) {
    if (index) {
        return array[index] + addUpTo(array, --index);
    } else {
        // Base Case
        return array[index]
    }
}

function maxOf(array) {
    // Base Case
    if (array.length === 1) {
        return array[0];
    } else {
        return Math.max(array.pop(), maxOf(array));
    }
}

function includesNumber(array, num) {
    if (array.length < 1) {
        return false;
    } else if (array[0] === num) {
        return true;
    } else {
        return includesNumber(array.slice(1), num);
    }
}