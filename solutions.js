//Aufgabe 1 Reverse
function reverse(string) {
return string.split('').reverse().join('')
};


//Aufgabe 2 factorial
function factorial(n) {

  let result = n

  for(let i = 1; i < n; i++){
    result *= n-i
  }
  
if(result < 0) {
  result++
}
return result
};



//Aufgabe 3 Longest Word
function longest_word(sentence) {
  let compare = 0
  let array = sentence.split(' ')
  let result = []

    for(let i = 0; i < array.length; i++){
      if(array[i].length > compare) {
          compare = array[i].length
          result.shift()
          result.push(array[i])
      }
    }

  return result.join()

};


//Aufgabe 4 Sum Nums
function sum_nums(num) {
  let result = 0;

  for(let i = 0; i <= num; i++){
    result += i
  }

return result
};


//Aufgabe 5 Time Conversion
function time_conversion(minutes) {

let hour = Math.floor(minutes / 60);
let min = minutes - (hour*60);

function convertH () {
if (hour < 10) {
  return "0"+ hour.toString()
} else {
  return hour.toString()
  }
}

function convertM () {
if (min < 10) {
  return "0"+ min.toString()
} else {
  return min.toString()
  }
}

return (convertH() + ":" + convertM())
};


//Aufgabe 6 Count Vowels
function count_vowels(string) {
 let vowels = ["a", "e", "i", "o", "u"];
 let lowerCase = string.toLowerCase().split('');
 let result = 0;

 for(let i = 0; i < lowerCase.length; i++){
   for (let j = 0; j < vowels.length; j++){
     if(lowerCase[i] === vowels[j]){
       result++
     }
   }
 }

 return result
};


//Aufgabe 7 Palindrome
function palindrome(string) {

if(string === string.split('').reverse().join('')){
  return true;
} else {
  return false;
  }
};

//Aufgabe 8 Most Letters
function nearby_az(string) {
  let array = string.split('')
  let count = 0;

  for(let i = 0; i < array.length; i++){
    if(array[i] === "a"){
      for(let j = i; j < array.length; j++){
        count++
        if(count > 4) {
          return false
          break;
        }
        if(array[j] === "z"){
          return true
        }
      }
    } 
    
     if(i === (array.length -1)) {
      return false
    }
  }
};


//Aufgabe 9 Two Sum
function two_sum(nums) {
  let array = [];

  for (let i = 0; i < nums.length; i++){
    for (let j = 0; j < nums.length; j++){
      if(nums[i] + nums[j] === 0) {
        array.push([i, j])
      }
    }
  }

if(array.length === 0) {
  return null
} else {
  return array.splice((array.length/2), (array.length/2))
}
};


//Aufgabe 10  Is Power of Two






//Aufgabe 11 Repeat a String
function repeat_string_num_times(str, num) {

let array = [];

for (let i = 0; i < num; i++){
  array.push(str.split(' '))
}

return array.join('')
};


//Aufgabe 12 Sum All Numbers in a Range
function add_all(arr) {

let result = 0;

for(let i = arr[0]; i <= arr[1]; i++) {
  result += i
  }

  return result
};


//Aufgabe 13  True or False

function is_it_true(args) {
  
  if(args == true || args == false) {
    return true
  } else {
    return false;
  }

};

//Aufgabe 14 Return Largest Numbers in Arrays
function largest_of_four(arr) {
  let array = [];

  for(let i = 0; i < arr.length; i++) {
    array.push(Math.max.apply(null, arr[i]))
  }

return array
};

//Aufgabe 15 Is it an anagram?
function isAnagram(test, original) {

let arrayT = test.toLowerCase().split('').sort().join('')
let arrayO = original.toLowerCase().split('').sort().join('')

if(arrayT === arrayO) {
  return true
} else {
  return false  
  }
};
