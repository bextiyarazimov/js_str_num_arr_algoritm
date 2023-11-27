

                ///// Task4  //////

// 1. Write program that will reverse string: 'Hello world' => 'dlrow olleH'    
///// tersine çevirecek proqram yazin: 'Hello world' => 'dlrow olleH'    

// function reverseString(inputStr) {
//     return inputStr.split('').reverse().join('');
// }

// const inputStr = 'Hello world';
// const result = reverseString(inputStr);
// console.log(result);






/////  2.Write program to repeat every character in string 3 times: 'Hello world' => 'HHHeeellllllooo wwwooorrrlllddd!!!'    

///////Setirdeki her simvolu 3 defe tekrar etmek ucun proqram yazin: 'Salam dunya' = > 'HHHeeelllllllooo wwwooorrrlldddd!!!'    


// function repeatCharacters(inputStr) {
//     return inputStr.split('').map(char => char.repeat(3)).join('');
// }

// const inputStr = 'Hello world';
// const result = repeatCharacters(inputStr);
// console.log(result);













//// 3.Write program to repeat given string n times: 'Hello world', 3 => 'Hello worldHello worldHello world'    

// Verilmiş sətri n dəfə təkrarlamaq üçün proqram yazın: 'Salam dünya', 3 => 'Salam dünyaSalam dünyaSalam dünya'    

// function repeatString(inputStr, n) {
//     return new Array(n).fill(inputStr).join('');
// }

// const inputStr = 'Hello world';
// const repetitions = 3;
// const result = repeatString(inputStr, repetitions);
// console.log(result);











/////  4. Write program to find the first not repeated character: 'abacddbec' => 'e'    

// İlk təkrarlanmayan simvolu tapmaq üçün proqram yazın: 'abacddbec' => 'e'    

// function firstNotRepeatedChar(inputStr) {
//     const charCount = {};
    
//     // Karakter sayılarını say
//     for (const char of inputStr) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     // İlk tekrarlanmayan karakteri bul
//     for (const char of inputStr) {
//         if (charCount[char] === 1) {
//             return char;
//         }
//     }

//     // Eğer hiç tekrarlanmayan karakter yoksa null döndür
//     return null;
// }

// const inputStr = 'abacddbec';
// const result = firstNotRepeatedChar(inputStr);
// console.log(result);









////   5.Write program to find the first repeated character: 'abacddbec' => 'a'    
// İlk təkrarlanan simvolu tapmaq üçün proqram yazın: 'abacddbec' => 'a' 

// function firstRepeatedChar(inputStr) {
//     const charSet = new Set();

//     // İlk tekrarlanan karakteri bul
//     for (const char of inputStr) {
//         if (charSet.has(char)) {
//             return char;
//         }
//         charSet.add(char);
//     }

//     // Eğer hiç tekrarlanan karakter yoksa null döndür
//     return null;
// }

// const inputStr = 'abacddbec';
// const result = firstRepeatedChar(inputStr);
// console.log(result);









//// 6.Write program to find the count of each character: 'abacddbec' => {a: 2, b: 2, c: 1, d: 3, e: 1}   
// Hər simvolun sayını tapmaq üçün proqram yazın: 'abacddbec' => {a: 2, b: 2, c: 1, d: 3, e: 1} Sətiri kəsən proqram   

// function charCount(inputStr) {
//     const charCountMap = {};

//     for (const char of inputStr) {
//         charCountMap[char] = (charCountMap[char] || 0) + 1;
//     }

//     return charCountMap;
// }

// const inputStr = 'abacddbec';
// const result = charCount(inputStr);
// console.log(result);






//// 7.Write program that truncates string in a given length: 'Hello world', 5 => 'Hello...'    
// yazın verilmiş uzunluq: 'Salam dünya', 5 => 'Salam...'  

// function truncateString(inputStr, maxLength) {
//     if (inputStr.length <= maxLength) {
//         return inputStr;
//     } else {
//         return inputStr.slice(0, maxLength) + '...';
//     }
// }

// const inputStr = 'Hello world';
// const maxLength = 5;
// const result = truncateString(inputStr, maxLength);
// console.log(result);








//// 8.Write program that truncates string in a given length, but it should not break the word: 'Hello world, nice talking to you', 20 => 'Hello world, nice...'    
// Verilmiş uzunluqda sətri kəsən proqram yazın, lakin o, sözü pozmamalıdır: 'Salam dünya, sizinlə söhbət etmək xoşdur', 20 => ' Salam dünya, gözəl...'  

// function truncateString(inputStr, maxLength) {
//     if (inputStr.length <= maxLength) {
//         return inputStr;
//     } else {
//         // Find the last space within the maxLength
//         const lastSpaceIndex = inputStr.lastIndexOf(' ', maxLength);

//         // If there is a space within the maxLength, truncate at that space
//         if (lastSpaceIndex !== -1) {
//             return inputStr.slice(0, lastSpaceIndex) + '...';
//         } else {
//             // If there is no space, simply truncate at the maxLength
//             return inputStr.slice(0, maxLength) + '...';
//         }
//     }
// }

// const inputStr = 'Hello world, nice talking to you';
// const maxLength = 20;
// const result = truncateString(inputStr, maxLength);
// console.log(result);









//// 9.Create a program to calculate the sum of the elements in an array of numbers: [1, 2, 3, 4, 5] => 15    
// Ədədlər massivindəki elementlərin cəmini hesablamaq üçün proqram yaradın: [1, 2, 3, 4, 5] => 15    

// function calculateSum(numbers) {
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }

//     return sum;
// }

// const array = [1, 2, 3, 4, 5];
// const result = calculateSum(array);
// console.log(result);








//// 10.Create a program to calculate the average of the elements in an array of numbers: [1, 2, 3, 4, 5] => 3   
// Bir sıradakı elementlərin ortasını hesablamaq üçün proqram yaradın. ədədlər massivi: [1, 2, 3, 4, 5] => 3  


// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//         return 0; // Handle empty array to avoid division by zero
//     }

//     const sum = numbers.reduce((acc, num) => acc + num, 0);
//     return sum / numbers.length;
// }

// const array = [1, 2, 3, 4, 5];
// const result = calculateAverage(array);
// console.log(result);








//// 11.Create a program to find the maximum number in an array of numbers: [1, 2, 3, 4, 5] => 5     
// Rəqəmlər massivində maksimum ədədi tapmaq üçün proqram yaradın: [1, 2, 3, 4, 5] =>    

// function findMaxNumber(numbers) {
//     if (numbers.length === 0) {
//         return undefined; // Handle empty array
//     }

//     return Math.max(...numbers);
// }

// const array = [1, 2, 3, 4, 5];
// const result = findMaxNumber(array);
// console.log(result);







//// 12.Create a program to find the minimum number in an array of numbers: [1, 2, 3, 4, 5] => 1    
// 5 ədədlər massivində minimum ədədi tapın: [1, 2, 3, 4, 5] => 1 Ədədlər massivində ikinci 
   
// function findMinNumber(numbers) {
//     if (numbers.length === 0) {
//         return undefined; // Handle empty array
//     }

//     return Math.min(...numbers);
// }

// const array = [1, 2, 3, 4, 5];
// const result = findMinNumber(array);
// console.log(result);





/// 13. Create a program to find the second largest number in an array of numbers: [1, 2, 3, 4, 5] => 4    
// ən böyük ədədi tapmaq üçün proqram yaradın: [1, 2, 3, 4, 5] => 4    
 
// function findSecondLargest(numbers) {
//     if (numbers.length < 2) {
//         return undefined; // Handle arrays with less than two elements
//     }

//     const sortedNumbers = numbers.sort((a, b) => b - a);
//     return sortedNumbers[1];
// }

// const array = [1, 2, 3, 4, 5];
// const result = findSecondLargest(array);
// console.log(result);







//// 14. Create a program to find the second smallest number in an array of numbers: [1, 2, 3, 4, 5] => 2    
// Ədədlər massivində ikinci ən kiçik ədədi tapmaq üçün proqram yaradın: [1, 2, 3, 4, 5] => 2    

// function findSecondSmallest(numbers) {
//     if (numbers.length < 2) {
//         return undefined; // Handle arrays with less than two elements
//     }

//     const sortedNumbers = numbers.sort((a, b) => a - b);
//     return sortedNumbers[1];
// }

// const array = [1, 2, 3, 4, 5];
// const result = findSecondSmallest(array);
// console.log(result);








//// 15.Create a program to find the count of each element in an array of numbers: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] => {1: 2, 2: 2, 3: 2, 4: 2, 5: 2}   
// Ədədlər massivindəki hər bir elementin sayını tapmaq üçün proqram yaradın: [1 , 2, 3, 4, 5, 1, 2, 3, 4, 5] => {1: 2, 2: 2, 3: 2, 4: 2, 5: 2} cəmini tapmaq üçün proqram yaradın    

// function countElements(numbers) {
//     const elementCount = {};

//     numbers.forEach(num => {
//         elementCount[num] = (elementCount[num] || 0) + 1;
//     });

//     return elementCount;
// }

// const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
// const result = countElements(array);
// console.log(result);








/// 16.Create a program to find the sum of the odd numbers in an array of numbers: [1, 2, 3, 4, 5] => 9
// . ədədlər massivindəki tək ədədlər: [1, 2, 3, 4, 5] => 9 Ədədlər

// function sumOfOddNumbers(numbers) {
//     return numbers.reduce((sum, num) => (num % 2 !== 0) ? sum + num : sum, 0);
// }

// const array = [1, 2, 3, 4, 5];
// const result = sumOfOddNumbers(array);
// console.log(result);

   



/// 17.Create a program to find the sum of the even numbers in an array of numbers: [1, 2, 3, 4, 5] => 6
// massivindəki cüt ədədlərin cəmini tapmaq üçün proqram yaradın: [1, 2, 3, 4, 5 ] => 6
 
// function sumOfEvenNumbers(numbers) {
//     return numbers.reduce((sum, num) => (num % 2 === 0) ? sum + num : sum, 0);
// }

// const array = [1, 2, 3, 4, 5];
// const result = sumOfEvenNumbers(array);
// console.log(result);

