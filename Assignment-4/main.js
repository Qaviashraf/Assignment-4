// -------------------------QUESTION 1-----------------------------------------
function sumOfEvenNumbers(number) {
    let sum = 0;
  
    for (let i = 0; i < number.length; i++) {
      if (number[i] % 2 === 0) {
        sum += number[i];
      }
    }
  
    return sum;
  }
  
  let number = sumOfEvenNumbers([1,2,3,4,5,6,7,8,9,10]);
  console.log("Sum of all even numbers is "+number); 
//   --------------------------------------------------------------------------
//   -------------------------QUESTION 2---------------------------------------
function countVowels(string) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i].toLowerCase())) {
        count++;
      }
    }

    return count;
  }

  let string = "Bano Qabil Assignmen-4";
  let vowels = countVowels(string);
  console.log("Number of vowels in the string is "+vowels);
//   ----------------------------------------------------------------------------
//   --------------------------QUESTION 3----------------------------------------
function longestString(string) {
    let Length = 0;

    for (let i = 0; i < string.length; i++) {
      if (string[i].length > Length) {
        Length = string[i].length;
      }
    }

    return Length;
  }

  let strings = longestString(["apple", "banana", "pear", "grapefruit","mango","pineapple"]);
  console.log("Length of Longest string in array is "+strings); 
//   ------------------------------------------------------------------------------
//   --------------------------------QUESTION 4------------------------------------
function averageOfNumbers(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    let average = sum / numbers.length;
    return average;
  }
  
  let average =averageOfNumbers([1,2,3,4,5,6,7,8,9,10]);
  console.log("Average of all the numbers in array is "+average); 
//   ------------------------------------------------------------------------------
//   ---------------------------------QUESTION 5-----------------------------------
function getKeys(obj) {
    let keys = Object.keys(obj);
    return keys;
  }
  
  let myObject = { name: "Qavi", age: 20, city: "Karachi" };
  let output = getKeys(myObject);
  console.log(output);
//   ------------------------------------------------------------------------------
//   ----------------------------------QUESTION 6----------------------------------
function getValuesByKey(array, key) {
    let values = [];
  
    for (let i = 0; i < array.length; i++) {
      let value = array[i][key];
      values.push(value);
    }
  
    return values;
  }

  let data = [
    { name: "Qavi", age: 20 },
    { name: "Ali", age: 25 },
    { name: "Umer", age: 23 }
  ];
  let result = getValuesByKey(data, "name");
  console.log(result); 
//   ------------------------------------------------------------------------------
//   -------------------------------QUESTION 7-------------------------------------
function uniqueStrings(array) {
    let uniqueStrings = [];

    for (let i = 0; i < array.length; i++) {
      if (uniqueStrings.indexOf(array[i]) === -1) {
        uniqueStrings.push(array[i]);
      }
    }
  
    return uniqueStrings;
  }
  
  let duplicate_names = [" Qavi", " Ali", " Qavi", " Umer", " Ahmed", " Umer"," Qavi"];
  let unique_names = uniqueStrings(duplicate_names);
  console.log("Unique strings in array are "+unique_names);
//   ------------------------------------------------------------------------------
//   --------------------------------QUESTION 8------------------------------------
function Product(array) {
    let product = 1;

    for (let i = 0; i < array.length; i++) {
      product *= array[i];
    }

    return product;
  }

  let Array = [5, 2, 5];
  let product = Product(Array);
  console.log("Product of all the numbers in array is "+product);
//   ---------------------------------THE END--------------------------------------