// Code your solution here!
function printString(string){
    console.log(string[0])

    if (string.length > 1) {
        printString(string.slice(1))
    }
}