// Code your solution here!

function printString(myString) {
    console.log(myString[0])
    if(myString.length > 1) {
        myString = myString.substring(1, myString.length)
        printString(myString)
    } else {
        return true
    }   
}

function reverseString(myString) {
    if (myString === '') {
        return myString
    } else {
        return reverseString(myString.substring(1)) + myString.charAt(0)
    }
}

function isPalindrome(myString) {
    if(myString.length === 1 || myString.length === 0) {
        return true
    } else if(myString[0] === myString[myString.length - 1]) {
        return isPalindrome(myString.slice(1, myString.length - 1))
    } else {
        return false
    }
}

function addUpTo(array, index) {
    if(index === 0) {
        return array[0]
    } else {
        array[1] = array[0] + array[1]
        array.shift()
        return addUpTo(array, index - 1)
    }
}

function maxOf(array) {
    if (array.length === 1 || array.length == 0) {
        return array[0]
    } else if (array[0] > array[1]) {
        array.splice(1, 1)
    } else if (array[1] > array[0]) {
        array.splice(0, 1)
    }
    return maxOf(array)
}

function includesNumber(array, n) {
    if (array.length === 0) {
        return false
    } else if(array[0] === n) {
        return true
    } else {
        array.shift()
        return includesNumber(array, n)
    }
}