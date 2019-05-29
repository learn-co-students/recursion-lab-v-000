function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
 
  if (myString.length > 1) {
    return reverseString(myString.substr(1)) + myString.charAt(0);
  } else {
    return myString;
  }
}

function isPalindrome(myString) {
 
  if (myString.length > 1) {
    let first = myString.charAt(0);
    let last = myString.charAt(myString.length - 1);
    if (first == last){
      return isPalindrome(myString.substr(1, myString.length - 2));
    }
    else {
      return false;
    }
  } else {
    return true;
  }
}

function addUpTo(idx, n) {
  if (n === 0){
    return idx[n];
  } else{
    return addUpTo(idx, n - 1) + idx[n];
  }
}

function maxOf(idx) {
  if (idx.length > 1){
    if(idx[0] < idx[idx.length - 1]){
      idx[0] = idx[idx.length - 1];
      idx.pop();
      return maxOf(idx);
    } else {
      idx.pop();
      return maxOf(idx);
    }
  } else {
    return idx[0];
  }
}

function includesNumber(idx, n) {
  if (idx.length === 0){
    return false;
  }
  else {
    if (idx[0] === n){
      return true;
    }
    else {
      idx.shift();
      return includesNumber(idx, n);
    }
  }
}