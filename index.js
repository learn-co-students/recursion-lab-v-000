function printString(string) {
  console.log(string[0]);

  if (string.length <= 1) {
    return;
  } else {
    printString(string.substring(1, string.length));
  }
}

function reverseString(string) {
  const last = string[string.length - 1];
  const remainder = string.substring(0, string.length - 1);
  return (remainder.length === 0) ? last : last + reverseString(remainder);
}

function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  } else if (string[0] !== string[string.length - 1]) {
    return false;
  } else {
    const middle = string.substring(1, string.length - 1);
    return isPalindrome(middle);
  }
}

function addUpTo(ary, i) {
  return (i === 0) ? ary[0] : ary[0] + addUpTo(ary.slice(1), i - 1);
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    const first = array[0];
    const nextMax = maxOf(array.slice(1));
    return (first > nextMax) ? first : nextMax;
  }
}

function includesNumber(array, value) {
  if (array.length === 0) return false;
  if (array[0] === value) return true;
  return includesNumber(array.slice(1), value);
}