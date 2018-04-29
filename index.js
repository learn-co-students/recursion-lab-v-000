function printString(string) {
    console.log(string[0])
    if (string.length > 1) {
        let subString = string.substring(1, string.length);
        printString(subString);
    } else {
        return true
    }
}

function reverseString(string) {
    if (string.length > 0) {
        let revString = string.substring(1, string.length);
        return reverseString(revString) + string.substring(0, 1)
    } else {
        return ""
    }
}

function isPalindrome(string) {
    if (string.length < 2) {
        return true
    } else {
        if (string.substring(0,1) !== string.slice(string.length - 1)) {
            return false
        } else {
            return isPalindrome(string.substring(1,string.length - 1))
        }
    }
}

function addUpTo(array, idx) {
    if (idx === 0) {
        return array[0]
    } else {
        return array[idx] + addUpTo(array.slice(0,idx), idx - 1)
    }
}

function maxOf(array) {
    if (array.length === 1) {
        return array[0]
    } else if (array[0] < array[1]) {
        return maxOf(array.slice(1))
    } else {
        return maxOf(array.slice(0,1).concat(array.slice(2)))
    }
}

function includesNumber(array, num) {
    if (array.length === 1) {
        return array[0] === num
    } else if (array[0] === num) {
        return true
    } else {
        return includesNumber(array.slice(1), num)
    }
}