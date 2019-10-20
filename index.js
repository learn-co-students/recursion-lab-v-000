function printString(string) {
    console.log(string[0])

    if (string.length > 1) {
        let sub = string.substring(1)
        printString(sub)
    } else {
        return true
    }
}

function reverseString(string) {
    if (string.length < 2 ) {
        return string
    } else {
        return reverseString(string.substring(1)) + string[0]
    }

}

function isPalindrome(string) {
    if (string.length === 1 || string.length === 0) {
        return true
    } else if (string[0] === string[string.length -1]) {
        return isPalindrome(string.substring(1, string.length -1))
    } else {
        return false
    }
}

function addUpTo(array, index) {
    if (array.length < 2 || index === 0) {
        return array[0]
    } else {
        return addUpTo(array, index -1) + array[index]
    }

}

function maxOf(array) {
    let l = array.length
    if (l === 1) {
    return array
    } else if (array[0] < array[l - 1]) {
        return maxOf(array.slice(1))
    } else {
        return maxOf(array.slice(0, l - 1))
    }    
}

function includesNumber(array, number) {
    if (array[0] === number) {
        return true
    } else if (array.length === 1) {
        return false
    } else {
        return includesNumber(array.slice(1), number)
    }
}
