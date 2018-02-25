// Code your solution here!
function printString(string){ 
	console.log(string[0]);
	if(string.length > 1){ 
		let mySubstring = string.substring(1, string.length);
		printString(mySubstring);
	}else{ 
		return true;
	}
}

function reverseString(string){
	let sLength = string.length;
   let myRevesedString = string[sLength -1].split();
   if(sLength > 1){
       let mySubstring = string.substring(0 , sLength -1);
       myRevesedString.push(reverseString(mySubstring));
   }else {
       return string;
   }
   return myRevesedString.join("");
}

function isPalindrome(word){
    if(word.length < 2){
        return true;
    }else if(word.charAt(0) === word.charAt(word.length -1)){
        return isPalindrome(word.substring(1, word.length -1))
    }else{
      return false
    }
}

function addUpTo(array, index){
    if(index < 1){
    	return array[index];
    }else{
    	let n = array[index];
    	n += addUpTo(array, --index);
    	return n;
    }
}


function maxOf(array){
    const sum = array[0] - array[array.length -1];
	if(array.length < 2){
        return array[0];
	}else if(sum > 0){
		array.pop();
		return maxOf(array);
	}else{
		array.shift();
		return maxOf(array);
	}
}

// function maxOf(myArray) {
//   if (myArray.length === 1) {
//     return myArray[0];
//   } else {
//     return Math.max(myArray.pop(), maxOf(myArray));
//   }
// }

function includesNumber(array, number){
    if(array[0] === number){
        return true
    }else if(array.length < 2){
    	return false
    }else{
    	array.shift();
    	return includesNumber(array, number);
    }
}



