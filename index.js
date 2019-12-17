// Code your solution here!

function printString(string) {
    console.log(string[0]);
    if (string.length > 1 ) {
        let newStr = string.slice(1)
        printString(newStr)
    } else {
        return true;
    }
    
}

function reverseString(string) {
    if (string.length < 2) {
        return string;
    } else {
    return reverseString(string.substring(1)) + string[0];
    }
}

function isPalindrome(string) {
    if (string.length < 2) {
        return true;
    } else if (string[string.length - 1] === string[0]) {
        return isPalindrome(string.substring(1, string.length - 1));
    } else {
        return false;
    }
}

function addUpTo(arr, i) {
    if (i > 0) {
        return (addUpTo(arr, [i- 1]) + arr[i]);
    } else {
        return arr[0];
    }
}

function maxOf(arr) {
    let i = arr.length;
    if (i === 1) {
        return arr[0]
    } else {
        return Math.max(arr.pop(), maxOf(arr))
    }
}

function includesNumber(arr, num) {
    if (arr.length === 0) {
        return false;
    } else if (arr[0] === num) {
        return true;
    } else {
        return includesNumber(arr.slice(1), num)
    }
}

let myArr = [1, 2, 3, 4, 8, 4, 3, 1, 1, 1];

console.log(includesNumber(myArr, 8));