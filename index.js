// Code your solution here!

function printString(str) {
    console.log(str[0]);

    if (str.length > 1) {
        let mySubStr = str.substring(1, str.length);
        printString(mySubStr);
    } else {
        return true;
    }
}


function reverseString(str) {
    if (str.length < 2) {
        return str;  
    } else {
        return reverseString(str.substring(1)) + str[0];
    }
}

function isPalindrome(str) {

    if (str.length < 2) {
        return true;
    } else if (str[str.length - 1] === str[0]) {
        return isPalindrome(str.substring(1, str.length - 1));
    } else {
        return false;
    }
}

function addUpTo(arr, index) {
    return index ? arr[index] + addUpTo(arr, --index) : arr[index];
}

function maxOf(arr) {
    if (arr.length === 1){
        return arr[0];
    } else {
        return Math.max(arr.pop(), maxOf(arr));
    }
}

function includesNumber(arr, num) {
    if (!arr.length) {
        return false;
    } else if (arr[0] === num) {
        return true;
    } else {
        return includesNumber(arr.slice(1), num);
    }
}