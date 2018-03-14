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


function reverseString(string) {
    const char = string[string.length - 1]

    if (string.length > 1) {
        let substring = string.substring(0, string.length - 1)
        return char + reverseString(substring)
    } else {
        return char;
    }
}

function isPalindrome(string) {
    if (string.length > 1) {
        return string[0] === string[string.length - 1] ? isPalindrome(string.slice(1, string.length - 1)) : false;
    } else {
        return true;
    }
}

function addUpTo(arr, index) {
    return arr.length > 1 ? arr[0] + addUpTo(arr.slice(1, index + 1), index - 1) : arr[0]
}

function maxOf(array){
    if (array.length > 1) {
        return Math.max(array.pop(), maxOf(array));
    } else {
        return array[0];
    }
}

function includesNumber(arr, num) {

    if (arr.length > 0) {
        return arr[0] === num ? true : includesNumber(arr.slice(1, arr.length), num)
    }

    return false;
}