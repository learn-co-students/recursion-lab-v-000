// Code your solution here!

function printString(string){
  if(string.length > 1){
    console.log(string[0])
    var substring = string.substring(1, string.length)
    printString(substring)
  }else{
    console.log(string)
  }
}

function reverseString(string){
  if(string.length > 1){
    return reverseString(string.substring(1, string.length))+ string[0]
  }else{
    return string
  }
}

// function isPalindrome(string){
//    if(string.length > 1){
//     if(string[0] === string[string.length - 1]){
//       return isPalindrome(string.substring(1, string.length - 1))
//     }else{
//       return false
//     }
//    }else{
//      return true
//    }
// }


 function isPalindrome(string){
   if(string.length > 1){
    return string[0] === string[string.length - 1] && isPalindrome(string.substring(1, string.length - 1))
   }else{
     return true
   }
}


function addUpTo(array, index){
  if (index > 0){
    return addUpTo(array.slice(0, array.length), index - 1) + array[index]
  }else{
    return array[0]
  }
}

function maxOf(array){
   if(array.length > 1){
    if(array[0] >= array[array.length - 1]){
      return maxOf(array.slice(0, array.length - 1))
    }else{
      return maxOf(array.slice(1, array.length))
    }
   }else{
     return array[0]
   }
}

function includesNumber(array, number){
  if (array.length > 1){
    if (array[0] !== number){
      return includesNumber(array.slice(1, array.length), number)
    } else {
      return true
    }
  }else{
    return array[0] === number
  }
}
