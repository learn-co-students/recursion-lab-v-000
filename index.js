// 1. Apply the problem to a specific case (i.e., choose an example).
// 2. Write out a function that solves that particular example.
// 3. Reword that function so that it uses recursion, invoking itself.


function printString(myString) {
  // 1. 
  // mystring = "food"
  // 2.
  // console.log(myString[0], myString[1], myString[2], myString[3])
  // 3.

  // Print out the current first character in the string.
  console.log(myString[0]);
 
  //check if there are more characters to print
  if(myString.length >1){
    // Store the remainder of the string in the 'substring' variable.
    let substring = myString.substring(1, myString.length);
    // Invoke printString() from within, passing in the remainder of the previous string.
    printString(substring);
  }else{
    return true;
  }  
}

function reverseString(string){
  // 1. string = food
  // 2. return, not log!
  // return str.split("").reverse().join("");
  // 'd' + 'o' + 'o' + 'f'
  // string.charAt(3) + string.charAt(2) + string.charAt(1) + string.charAt(0)
  // 3.
  // peel off first character & place each subsequent character before it
  // return the resutling string
  // return reverseString(string.substring(1, string.length-1)) + string.charAt(0)
  // add a base case when substring is empty
  if(string === ""){
    return "";
  }else{
    return reverseString(string.substr(1)) + string.charAt(0);
  }
}

function isPalindrome(string){
  if (string.length > 1) {
    if (string.charAt(0) !== string.charAt(string.length - 1)) {
      return false;
    } else {
      let substring = string.substr(1, string.length - 2);
      isPalindrome(substring);
    }
  }
  return true;
}

function addUpTo(array, index){
  if (0 < index) {
    let arrayToChange = array
    let valueToAdd = arrayToChange.shift();
    return addUpTo(arrayToChange, index-1) + valueToAdd;
  } else {
    return array.shift();
  }
}

function maxOf(array){
  if (array.length > 1) {
    if (array[0] > array[1]) {
      array.splice(1, 1);
      maxOf(array);
    } else {
      array.splice(0, 1);
      maxOf(array);
    }
  } else {
    return array;
  }
  return array[0];
}

function includesNumber(array, number) {
  if(array.length>=1){
    if (array[0] === number) {
      return true
    }else{
      let newArray = array.shift();
      return !!includesNumber(array, number)
    }
  }
}