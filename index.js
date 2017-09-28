// Code your solution here!
function printString(string) {
  console.log(string[0])

  if (string.length > 1) {

    let substring = string.substring(1, string.length)
     printString(substring)
  }
  else {
    return true
  }
}


function reverseString(string) {

  if(string.length > 1) {
    let newString = string.slice(1)
    let removedLetter = string.slice(0, 1)
    return reverseString(newString) + removedLetter
  }
  else {
    return string
  }
}


  function isPalindrome(string) {

    let left = string[0]
    let right = string.slice(-1)

    if (left === right) {
      if (string.length < 3 ) {
        return true
      }

      let slicedString = string.slice(1, -1)
      return isPalindrome(slicedString)
    }

    return false

  }

  function addUpTo(list, index) {

    if (index === 0) {
      return list[index]
    }

    let indexElement = list[index]
    let slicedList = list.slice(0, index)

    let newIndex = index - 1
    return addUpTo(slicedList, newIndex) + indexElement

  }


  function maxOf(array) {


    if (array.length < 2) {
      return array[0]
    }
    if (array[0] < array[1]) {
      array = array.slice(1)
    }
    else {
      array.splice(1,1)
    }
    return maxOf(array)

  }


  function includesNumber(array, number) {

    if (array[0] === number) {
      return true
    }

    if (array.length < 2) {
      return false
    }
    let newArray = array.slice(1)

    return includesNumber(newArray, number)
    }



  
