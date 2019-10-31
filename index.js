  // Code your solution here!

function printString(str) {
  console.log(str[0]);

  if(str.length == 1) {
    return true
  }
  const substr = str.substring(1, str.length);
  printString(substr);

}

function reverseString(s) {
  if(s.length === 1) {
    return s
  }
  return reverseString(s.substring(1)) + s[0]
}

function sumUpTo(n) {
  if(n == 1) { return 1 }
  sumUpTo(n - 1) + n;
}

function isPalindrome(s) {
  if (s.length === 1)  { return true }
  if (s[0] !== s[s.length - 1]) { return false }
  return isPalindrome(s.slice(1, s.length - 1));
}

function addUpTo(arr, i) {
  if(i == 0) {
    return arr[i]
  }
  return arr[i] + addUpTo(arr, --i);
}

function maxOf(arr) {
  if(arr.length === 1) { return arr[0] }
  const deleteIndex = arr[0] < arr[1] ? 0 : 1;
  arr.splice(deleteIndex, 1);
  return maxOf(arr);
}

function includesNumber(arr, n) {
  if (arr[0] === n) { return true }
  if (arr.length === 1) { return false }
  arr.shift();
  return includesNumber(arr, n);
}
