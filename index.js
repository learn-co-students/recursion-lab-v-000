// Code your solution here!
function printString(string){
    console.log(string[0])

    if (string.length > 1) {
        printString(string.slice(1))
    }
}

function reverseString(string){
    if (1 === string.length){
        return string;
    }
    else {
        const lastIndex = string.length -1 
        return string[lastIndex] + reverseString(string.slice(0, lastIndex))
    }
}