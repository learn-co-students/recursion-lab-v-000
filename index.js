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

function reverseString(string) {
  if (string === "") {
    return string
  } else {
    return reverseString(string.substr(1)) + string.charAt(0)
  }
}

function isPalindrome(str) {

  var strLength = str.length

  if (strLength > 1 && str[0].toLowerCase() === str[strLength - 1].toLowerCase()) {
		let substring = str.slice(1, strLength - 1)
		return isPalindrome(substring)
  } else if (str.length <= 1) {
		return true
  } else {
		return false
  }
}

function addUpTo(arr, index, currentIndex = 0, sum = 0) {

  if (currentIndex != index) {
    sum += arr[currentIndex]
    currentIndex += 1
    return addUpTo(arr, index, currentIndex, sum)
  } else {
    return sum + arr[currentIndex]
  }
}
