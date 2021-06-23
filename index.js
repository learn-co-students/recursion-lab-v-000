// Code your solution here!

// Code your solution here!
function printString(s){
    console.log(s[0]);
    if(s.length === 1){
        return true
    } else {
        printString(s.substring(1, s.length))
    }
}

function reverseString(s){

    if(s.length < 2){
        return s;
    } else {
        return reverseString(s.substring(1)) + s[0]
    }
}

function isPalindrome(s){

    if(s.length === 1){
        return true
    } else {
        if(s[0] === s[s.length-1]){
            return isPalindrome(s.substring(1, s.length-1))
        } else {
            return false
        }
    }
}

function addUpTo(a, index){
    if(index === 0){
        return a[0]
    } else {
        return addUpTo(a.splice(1), index-1) + a[0]
    }
}

function maxOf(a){
    
    if(a.length === 1){
        return a[0]
    } else {
        if(a[a.length-1] > a[0]){
            return maxOf(a.slice(1))
        } else {
            return maxOf(a.slice(0, a.length-1))
        }
    }
}


function includesNumber(a, num){
    if(a.length === 1){
        if(a[0] === num){
            return true
        } else {
            return false
        }
    } else {
        if(a[0] === num){
            return true
        } else {
            return includesNumber(a.slice(1), num)
        }
    }
}