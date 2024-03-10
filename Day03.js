/*1.Do the below programs in anonymous function & IIFE
    a)Print odd numbers in an array
    b)Convert all the strings to title caps in a string array
    c)Sum of all numbers in an array
    d)Return all the prime numbers in an array
    e)Return all the palindromes in an array
    f)Return median of two sorted arrays of the same size.
    g)Remove duplicates from an array
    h)Rotate an array by k times


2.Do the below programs in arrow functions.
    a)Print odd numbers in an array
    b)Convert all the strings to title caps in a string array
    c)Sum of all numbers in an array
    d)Return all the prime numbers in an array
    e)Return all the palindromes in an array*/

//1a)Print odd numbers in an array
//Anonymous function
var print_odd_numbers = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log("Odd number", arr[i]);
    }
  }
};
print_odd_numbers([1, 2, 3, 4, 5]);

//IIFE
(function (arr) {
  console.log("IIFE");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log("Odd number", arr[i]);
    }
  }
})([1, 2, 3, 4, 5]);

//1b)Convert all the strings to title caps in a string array
//Anonymous function
var convert_to_title_case = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    var temp = "";
    if (arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 123) {
      temp =
        temp +
        String.fromCharCode(arr[i].charCodeAt(0) - 32) +
        arr[i].slice(1, arr[i].length);
      arr[i] = temp;
    }
  }
  return arr;
};

var res = convert_to_title_case(["abc", "Abc", "sdae"]);
console.log("After conversion of all the elements to title case", res);

//IIFE
(function (arr) {
  console.log("IIFE");
  for (var i = 0; i < arr.length; i++) {
    var temp = "";
    if (arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 123) {
      temp =
        temp +
        String.fromCharCode(arr[i].charCodeAt(0) - 32) +
        arr[i].slice(1, arr[i].length);
      arr[i] = temp;
    }
  }
  console.log(arr);
})(["abc", "Abc", "sdae"]);

//1c)Sum of all numbers in an array
//Anonymous function
var sum_of_all_numbers = function (arr) {
  var res = 0;

  for (var i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
};

var total_sum = sum_of_all_numbers([1, 5, 2, 6, 3]);
console.log("Sum of all numbers in the array is", total_sum);

//IIFE
(function (arr) {
  console.log("IIFE");
  var res = 0;

  for (var i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  console.log(res);
})([1, 5, 2, 6, 3]);

//1d)Return all the prime numbers in an array
//Anonymous function
var give_prime_nos = function (arr) {
  var res = [];
  var isPrime;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 2) {
      res.push(2);
    } else if (arr[i] > 2) {
      isPrime = true;
      for (var j = 2; j < arr[i]; j++) {
        if (arr[i] % j == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime == true) {
        res.push(arr[i]);
      }
    }
  }
  return res;
};

var prime_nos = give_prime_nos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("The prime numbers in the given array is", prime_nos);

//IIFE
(function(arr){
  console.log("IIFE");
  var res = [];
  var isPrime;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 2) {
      res.push(2);
    } else if (arr[i] > 2) {
      isPrime = true;
      for (var j = 2; j < arr[i]; j++) {
        if (arr[i] % j == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime == true) {
        res.push(arr[i]);
      }
    }
  }
  console.log(res);

})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//1e)Return all the palindromes in an array
//Anonymous function
var give_palindromes = function (arr) {
  var isPalindrome;
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    isPalindrome = true;

    var word = arr[i];
    var half_str_len = Math.floor(word.length / 2);

    var from_start = 0;
    var from_end = -1;

    while (from_start < half_str_len) {
      if (word.at(from_start) != word.at(from_end)) {
        isPalindrome = false;
        break;
      }
      from_start += 1;
      from_end -= 1;
    }

    if (isPalindrome == true) {
      res.push(word);
    }
  }

  return res;
};

var palindromes = give_palindromes(["aba", "abc", "cdf", "Aba", "malayalam"]);
console.log("The plaindromes in the given array are", palindromes);

//IIFE
(function(arr){
  console.log("IIFE");
  var isPalindrome;
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    isPalindrome = true;

    var word = arr[i];
    var half_str_len = Math.floor(word.length / 2);

    var from_start = 0;
    var from_end = -1;

    while (from_start < half_str_len) {
      if (word.at(from_start) != word.at(from_end)) {
        isPalindrome = false;
        break;
      }
      from_start += 1;
      from_end -= 1;
    }

    if (isPalindrome == true) {
      res.push(word);
    }
  }

  console.log(res);
}
)(["aba", "abc", "cdf", "Aba", "malayalam"]);

//1g)Remove duplicates from an array
//Anonymous functions
var remove_duplicates = function (arr) {
  var ref = [];

  for (var i = 0; i < arr.length; i++) {
    if (!ref.includes(arr[i])) {
      ref.push(arr[i]);
    }
  }
  console.log("After removal of duplicates", ref);
};

var res = remove_duplicates([1, 2, 2, 2, 3, 3, 4, 5, 5, 6, 6]);

//IIFE
(function(arr){
  console.log("IIFE");
  var ref = [];

  for (var i = 0; i < arr.length; i++) {
    if (!ref.includes(arr[i])) {
      ref.push(arr[i]);
    }
  }
  console.log("After removal of duplicates", ref);

})([1, 2, 2, 2, 3, 3, 4, 5, 5, 6, 6]);


//1h)Rotate an array by k times
//Anonymous functions
var rotate_array_left = function (arr, rotate_times) {
  var rotate = rotate_times;
  if (rotate_times > arr.length) {
    rotate = rotate_times % arr.length;
  }

  var chopped = arr.slice(0, rotate);

  arr = arr.slice(rotate, arr.length + 1);
  arr = arr.concat(chopped);

  console.log(
    "array after rotating it",
    rotate_times,
    "to the left gives",
    arr
  );
};

rotate_array_left([1, 2, 3, 4], 11);

//IIFE
(function(arr,rotate_times){
  console.log("IIFE");
  var rotate = rotate_times;
  if (rotate_times > arr.length) {
    rotate = rotate_times % arr.length;
  }

  var chopped = arr.slice(0, rotate);

  arr = arr.slice(rotate, arr.length + 1);
  arr = arr.concat(chopped);

  console.log(
    "array after rotating it",
    rotate_times,
    "to the left gives",
    arr
  );
})([1, 2, 3, 4], 11);


var rotate_array_right = function (arr, rotate_times) {
  var rotate = rotate_times;
  if (rotate_times > arr.length) {
    rotate = rotate_times % arr.length;
  }

  var chopped = arr.slice(-1 * rotate);

  chopped = chopped.concat(arr.slice(0, arr.length - chopped.length));

  console.log(
    "array after rotating it",
    rotate_times,
    "to the right gives",
    chopped
  );
};

rotate_array_right([1, 2, 3, 4], 3);

//IIFE
(function(arr,rotate_times){
  console.log("IIFE");
  var rotate = rotate_times;
  if (rotate_times > arr.length) {
    rotate = rotate_times % arr.length;
  }

  var chopped = arr.slice(-1 * rotate);

  chopped = chopped.concat(arr.slice(0, arr.length - chopped.length));

  console.log(
    "array after rotating it",
    rotate_times,
    "to the right gives",
    chopped
  );
})([1, 2, 3, 4], 11);

/*
2.Do the below programs in arrow functions.
    a)Print odd numbers in an array
    b)Convert all the strings to title caps in a string array
    c)Sum of all numbers in an array
    d)Return all the prime numbers in an array
    e)Return all the palindromes in an array*/

//2a)Print odd numbers in an array
//Arrow fumctions
var print_odd_numbers_arrow_func = (arr) => {
  res = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log("Odd number", arr[i]);
      res.push(arr[i]);
    }
  }
  return res;
};
console.log(print_odd_numbers_arrow_func([1, 2, 3, 4, 5]));

//2b)Convert all the strings to title caps in a string array
//Arrow fumctions
var convert_to_title_case_arrow_func = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    var temp = "";
    if (arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 123) {
      temp =
        temp +
        String.fromCharCode(arr[i].charCodeAt(0) - 32) +
        arr[i].slice(1, arr[i].length);
      arr[i] = temp;
    }
  }
  return arr;
};
var res = convert_to_title_case_arrow_func(["abc", "Abc", "sdae"]);
console.log("After conversion of all the elements to title case", res);

//2c)Sum of all numbers in an array
//Arrow fumctions
var sum_of_all_numbers_arrow_func = (arr) => {
  var res = 0;

  for (var i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
};

var total_sum = sum_of_all_numbers_arrow_func([1, 5, 2, 6, 3]);
console.log("Sum of all numbers in the array is", total_sum);

//2 d)Return all the prime numbers in an array
//Arrow fumctions
var give_prime_nos_arrow_func = (arr) => {
  var res = [];
  var isPrime;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 2) {
      res.push(2);
    } else if (arr[i] > 2) {
      isPrime = true;
      for (var j = 2; j < arr[i]; j++) {
        if (arr[i] % j == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime == true) {
        res.push(arr[i]);
      }
    }
  }
  return res;
};

var prime_nos = give_prime_nos_arrow_func([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("The prime numbers in the given array is", prime_nos);

//2e)Return all the palindromes in an array
//Arrow fumctions
var give_palindromes_arrow_func = (arr) => {
  var isPalindrome;
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    isPalindrome = true;

    var word = arr[i];
    var half_str_len = Math.floor(word.length / 2);

    var from_start = 0;
    var from_end = -1;

    while (from_start < half_str_len) {
      if (word.at(from_start) != word.at(from_end)) {
        isPalindrome = false;
        break;
      }
      from_start += 1;
      from_end -= 1;
    }

    if (isPalindrome == true) {
      res.push(word);
    }
  }

  return res;
};

var palindromes = give_palindromes_arrow_func([
  "aba",
  "abc",
  "cdf",
  "Aba",
  "malayalam",
]);
console.log("The plaindromes in the given array are", palindromes);
