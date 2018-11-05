// Code your solution here!

function printString(myString){
    console.log(myString[0]);

    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length)
        printString(mySubString)
    } else {
        return true
    }
}

function reverseString(str) {
    if (str === "") 
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
}

function isPalindrome(str) {
    const strLen = str.length;
    if (strLen === 0 || strLen === 1) {
        return true;
    }
    
    if (str[0] === str[strLen - 1]) {
        return isPalindrome( str.slice(1, strLen - 1) );
    }
    
    return false;
};

function addUpTo(myArray, index) {
    return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
}

function maxOf(arr) {
    var num = arr.slice();
    if (num.length == 1) {
        return	num[0];
    }
    if (num[0] < num[1]) { num.splice(0,1); }
    else { num.splice(1,1); }

// with one less number in the array, call the same function
    return maxOf(num);
}

function includesNumber(arr, num){
    if (!arr.length){
        return false
    } else if (arr[0] === num){
            return true;
    } else { 
        return includesNumber(arr.slice(1), num)
    }
}