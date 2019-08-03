// Code your solution here!
//const myString = 'Apple'
function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    const substring = myString.slice(1)
    printString(substring);
  }
}

function reverseString(myString) {
  if (myString === '') {
    return "";
  } else {
    return reverseString(myString.substring(1)) + myString.charAt(0);
  }
}

function isPalindrome(myString) {
  if (myString.length < 2) {
    return true
  }
  else {
    const firstChar = myString[0];
    const lastChar = myString[myString.length - 1];

    if (firstChar === lastChar) {
      const newString = myString.slice(1, -1)
      return isPalindrome(newString)
    }else {
      return false
    }
  }
}

function addUpTo(nums, idx) {
  if (idx) {
    return nums[idx] + addUpTo(nums, idx - 1)
  } else {
    return nums[idx]
  }
}


function maxOf(nums) {
  if (nums.length === 1) {
    return nums[0]
  } else if (nums[0] < nums[1]) {
    nums.splice(0,1) // remove nums[0]
  } else {
    nums.splice(1,1) // remove nums[1]
  }

  return maxOf(nums)
}

function includesNumber(nums, n) {

  if (nums.length === 0) {
    return false;
  } else {

    if (nums[0] === n) {
      return true;
    } else {
      nums.splice(0,1);
    }

  }

  return includesNumber(nums, n);
}



// FOR isPalindrome
// myString.split('').forEach( (c, i) => {
//   if (c !== myString[(myString.length) - (i+1)]) {
//     bool = false
//   }
// })
//
// return bool

// 1. iterate through the string
// 2. compare the letter in each index to its complementary index

// EXAMPLE:
// 'm a d a m i m a d a m'
//  0 1 2 3 4 5 6 7 8 9 10
// 0, 10
// 1, 9
// 2, 8
// 3, 7
// 4, 6
// 5, 5

// 3. if the letter in the complementary index is the same, return true
// 4. else return false
