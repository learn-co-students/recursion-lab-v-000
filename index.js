// Code your solution here!

function printString(n) {
  console.log(n[0])

  if (n.length > 1){
    let substring = n.substring(1, n.length)
    printString(substring)
  }else{
    return true
}}

function reverseString(n){
  if (n < 2){
    return n
  } else {
    return reverseString(n.substring(1)) + n[0]
  }
}

function isPalindrome(n){
  if( n.length < 2){
    return true
  }else if (n[0] === n[n.length -1]){
      return isPalindrome(n.substring(1, n.length-1))
  }else {
    return false
  }
}

function addUpTo(array, i){
  if (i > 0){
    return addUpTo(array, i - 1) + array[i]
  }else{
    return array[0]
  }
}

function maxOf(array){
  if (array.length < 2){
    return array
  }else if(array[0] > array[1]){
    array.splice(1,1)
    return maxOf(array)
  }else{
    return maxOf(array.slice(1))
  }
}

function includesNumber(array, n){
  if (n === array[0]){
    return true
  }else if (array.length > 1){
      return includesNumber(array.slice(1), n)
  }else{
    return false
  }
}
