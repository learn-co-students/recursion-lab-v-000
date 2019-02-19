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

}