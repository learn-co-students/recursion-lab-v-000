// Code your solution here!

function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}	

function reverseString(string){
	  if (string === "") {
    return "";
  } else {
  // recursive function is calling on a sub-problem
    return reverseString(string.substr(1)) + string.charAt(0);
  }
}


// loop palindrome

function ezPalindrome(string){
	const splitString = string.split("")
	const revString = splitString.reverse().join("")
	
	if (revString === string){
		return true
	} else {
		return false
	}
}

console.log(ezPalindrome("really"));

// recursion palindrome (for test spec pass)

function isPalindrome(str) {
  let l = str.length;
  if (str.length < 2) {
    return true;
  } else if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1))
  } else {
    return false;
  }
}



function addUpTo(array, index) {
	if (index === -1){
		return false
	} else{
		return array[index] + addUpTo(array, index - 1);
	}
}	

function maxOf(array){
	if (array.length === 1){
		return array[0]
	} else {
		return Math.max(array.pop(), maxOf(array))
	}
}


function includesNumber(array, number){
  if (array.length === 0) {
    return false;
  } else if (array[0] === number) {
    return true;
  } else {
    return includesNumber(array.slice(1), number);
  }
}

console.log(includesNumber([1, 4, 5, 3], 3));




