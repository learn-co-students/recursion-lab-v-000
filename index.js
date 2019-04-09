// Code your solution here!

function printString(s){
  console.log(s[0])
  if (s.length>1){
    printString(s.substring(1,s.length))
  }
  // else{ return true}
}

function reverseString(s){
  let rev
  if (s.length > 1){
    rev = s[s.length-1] + reverseString(s.substring(0,s.length-1))
  }
  else if (s.length === 1){
    return s[0]
  }
  return rev
}

function isPalindrome(s){
  if (s.length > 1){
    if (s[0] === s[s.length-1]){
      return isPalindrome(s.substring(1,s.length-1))
    }
    else{ return false }
  }
  else { return true }
}

function addUpTo(a,i){
  let sum
  if (i > 0){
    sum = a[i] + addUpTo(a, i-1)
  }
  else if (i === 0){
    return a[0]
  }
  return sum
}

function maxOf(a){
  if (a.length === 1){
    return a[0]
  }
  else{
    return Math.max(a.pop(), maxOf(a))
  }
}

function includesNumber(a,n){
  if (a.length > 0){
    if (a.shift() === n){
      return true
    }
    else { return includesNumber(a,n)}
  }
  return false
}
