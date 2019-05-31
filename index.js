function printString(str) {
  if (str.length === 1) console.log(str);
  else {
    console.log(str[0]);
    printString(str.slice(1));
  }
}

function reverseString(str) {
  if (str.length === 1) return str;

  return `${ str.slice(-1) + reverseString( str.slice(0, -1) ) }`;
}

function isPalindrome(str) {
  if (str.length <= 1) return true;

  return ( str.slice(0,1) === str.slice(-1) ) && isPalindrome( str.slice(1, -1) );
}

function addUpTo(arr, index) {
  if (index === 0) return arr[0];

  return arr[0] + addUpTo(arr.slice(1), --index);
}

function maxOf(arr) {
  if (arr.length === 1) return arr[0];

  return ( arr[0] <= arr[1] ) ? maxOf( arr.slice(1) ) : maxOf( [ arr[0], ...arr.slice(2) ] );
}

function includesNumber(arr, num) {
  if (arr.length === 0) return false;

  if (arr[0] === num) return true;

  return includesNumber(arr.slice(1), num);
}
