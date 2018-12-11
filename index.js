// Code your solution here!

function printString(word){
    console.log(word[0]);

    if(word.length > 1){
      let subword = word.substring(1, word.length)
      printString(subword)
  } else {
    return true;
  }
}


  function reverseString(word){

    if (word.length < 2) {
      return word;
    } else {
      return reverseString(word.substring(1)) + word[0]
    }

  }

  function isPalindrome(sentence){

    if (sentence.length < 2) {
      return true;
    } else if( sentence[sentence.length -1] === sentence[0]) {
        return isPalindrome(sentence.substring(1, sentence.length - 1))
    } else {
      return false;
    }
  }


  function addUpTo(array, index) {
    if (index) {
  	return array[index] + addUpTo(array, --index)
  }else {
  	return array[index]
  }
}

function maxOf(myArray) {
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray));
  }
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
