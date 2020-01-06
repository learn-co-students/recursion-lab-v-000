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
// printString("pizza");

function reverseString(myString) {
  // console.log(myString.length-1); 
 if(myString === ""){
  return myString 
 }else{
  return reverseString(myString.substr(1)) + myString[0]
 }
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

// function addUpTo(numArr, num) {
//  for (let i = 0; i < numArr.length; i++) {
//    const element = numArr[i];
   
//  } 
  // addUpTo(params)
// }

function addUpTo(myArray, index) {
  return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
}
// function addUpTo(array , n) {
  
//   if (array.length === 0) {
//     return 0;
//   } else {
//      let e 
//     for (let index = 0; index < array[n]; index++) {
//       // const element = array[index];
//      e = array[index] + addUpTo(array.slice(1));
//     }
//     return e
//   }
// };

function maxOf(list) {

  if (list.length === 1) {return list[0]} else{ return Math.max(list.pop(), maxOf(list));}
}
function includesNumber(myArray, myNumber) {
 if (!myArray.length) {
    return false;
  } else if (myArray[0] === myNumber) {
    return true;
  } else {
    return includesNumber(myArray.slice(1), myNumber);
  }
}