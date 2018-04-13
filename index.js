function printString(string) {
  console.log(string[0])
  if(string.length > 1) {
    let newString = string.substring(1, string.length)
    printString(newString)
  }else{
    return true
  }
}

//lesson I learned: you can't store immutable things in variables in recursive functions
//let or another declaration will clear it out, so you have to alter the input directly
function reverseString(str) { //not my code, but oh so pretty
   return (str ? reverseString(str.substring(1)) + str.charAt(0) : str);
}
//string.substring(1) slices off the first letter, returns rest of string
function isPalindrome(string) {
  if (string.length > 1) {
    if (string[0] === string[string.length-1]){
      let newString = string.substring(1, string.length-1)
      isPalindrome(newString)
  }else{
    return false
  }
}
  return true
}

function addUpTo(array, index) {
  if(array.length > 1){
    let newArray = array.slice(0, index +1)
    let newIndex = newArray.length - 1
    return addUpTo([(newArray[0]+newArray[1]), ...newArray.slice(2)], newIndex)
  }else{
    return parseInt(array.join(""))
  }
}

function maxOf(array) {
  while (array.length > 1) {
    if(array[0] > array[1]){
      let firstArray = [array[0], ...array.slice(2)]
      return maxOf(firstArray)
    }else if(array[0] <= array[1]) {
      let secondArray = array.slice(1)
      return maxOf(secondArray)
    }
  }
  return parseInt(array.join(""))
}

function includesNumber(array, number) { //detects number
  while (array.length > 0){
  if(array[0] !== number){ //if the index does not match the number
    let newArray = array.slice(1)
    return includesNumber(newArray, number)
  }else if(array[0] === number){
    return true
  }
}
return false

}
