// Code your solution here!

function printString(str) {
    console.log(str[0]);
    if(str.length > 1 ) {
        let sub = str.substring(1, str.length);
        printString(sub);
    } else {
        return true;
    }
}

function reverseString(str) {
    if(str.length < 2) {
        return str;
    } else {
        return reverseString(str.substring(1)) + str[0];
    }
}

function isPalindrome(str) {
    if(str.length < 2) {
        return true;
    } else if (str[str.length - 1] === str[0]) {
        return isPalindrome(str.substring(1, str.length - 1));
    } else {
        return false;
    }
}

function addUpTo(arr, n) {
    return n ? arr[n] + addUpTo(arr, --n) : arr[n];
}

function maxOf(arr) {
    if(arr.length === 1) {
        return arr[0];
    } else {
        return Math.max(arr.pop(), maxOf(arr) );
    }
}

function includesNumber(arr, n) {
    if(!arr.length) {
        return false;
    } else if (arr[0] === n) {
        return true;
    } else {
        return includesNumber(arr.slice(1), n);
    }
}