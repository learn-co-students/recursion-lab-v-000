// Code your solution here!

function printString(str) {
  console.log(str[0])

  if (str.length > 1) {
    let substring = str.substring(1, str.length)
    printString(substring)
  } else {
    return true
  }
}


function reverseString(str) {
  if (str === '') return ''
  return reverseString(str.substring(1)) + str.charAt(0)
}


function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) return true
  if (str[0] !== str[str.length - 1]) return false
  return isPalindrome(str.substring(1, str.length - 1))
}


function addUpTo(arr, index) {
  if(index === 0) {
    return arr[index]
  } else {
    return addUpTo(arr, index - 1) + arr[index]
  }
}


function maxOf(nums) {
  if (nums.length == 1) { return nums[0]; }
  if (nums[0] < nums[1]) { nums.splice(0,1); }
  else { nums.splice(1,1); }
  return maxOf(nums);
}


function includesNumber(arr, n){
  if (!arr.length) {
    return false
  } else if (arr[0] === n) {
    return true
  } else {
    return includesNumber(arr.slice(1), n)
  }
}