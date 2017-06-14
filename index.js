// Code your solution here!
function printString(string){
  console.log(string[0])
  if(string.length > 1){
    printString(string.slice(1, string.length));
  } else {
    return true;
  }
}

function reverseString(string, array=[]){
  array.push(string[string.length-1])
  if(string.length > 1){
    reverseString(string.slice(0, string.length-1), array)
  }
  return array.join("");
}

function isPalindrome(string, old=null, front="", end=""){
  // set the old string to the old string if it has value or set it to string
  // as long as x is less then half of the string continue the logic
  old = old || string;
  if(string.length > 1){
    front = string[0] + front;
    end += string[string.length-1];
    string = string.substring(1, string.length-1)
    return isPalindrome(string, old, front, end);
  } else {
    string = end + string + front;
  }
  if(old === string) {
    return true;
  } else {
    return false;
  }
}

function addUpTo(array, i, n=0){
  if(i > 0){
    n += array[i];
    return addUpTo(array, --i, n);
  }
  n += array[i]
  return n;
}

function maxOf(array, max=0, i=0){
  if(i<array.length-1){
    if (max < array[i]){
      max = array[i];
    }
    return maxOf(array, max, ++i);
  } else {
    if(max < array[i]){
      max = array[i];
    }
    return max;
  }
}

function includesNumber(array, n, i=0, foundIt=false){
  if(i < array.length && !foundIt){
    if(array[i] === n){
      foundIt = true;
    } else {
      return includesNumber(array, n, ++i, foundIt);
    }
  }
  if(foundIt){
    return true;
  } else {
    return false;
  }
}
