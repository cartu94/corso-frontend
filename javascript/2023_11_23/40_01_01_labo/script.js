// // es 00 -------------------------------------------------------------------------
// const sum = (a, b) => {
//   return a + b;
// }

// let a = 1, b = 2;

// console.log(sum(a, b));

// // es 10 -------------------------------------------------------------------------
// const adj = ["handsome", "beautiful", "cute", "smart", "funny"];

// const fun = () => {
//   const random = Math.floor(Math.random() * adj.length);
//   console.log(adj[random]);
// }

// fun();

// // es 20 -------------------------------------------------------------------------
// let a = 1, b = 2;
// let operator = "+";

// const calc = (a, b, operator) => {
//   switch (operator) {
//     case "+":
//       console.log(a + b);
//       break;
//     case "-":
//       console.log(a - b);
//       break;
//     default:
//       console.log("error");
//       break;
//   }
// };

// es 30 -------------------------------------------------------------------------
// const calc = (a, b, operator) => {
//   switch (operator) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     default:
//       return "error";
//   }
// }

// let arr = [];
// for(let i = 0; i<10; ++i) {
//   arr.push(calc(i*5,i**2,"+"));
// }
// console.log(arr);

// // es 40 -------------------------------------------------------------------------
// let n = 10;

// function countDown(count) {
//   console.log(count);
//   if (count < 1) return;
//   else countDown(count - 1);
// }
// countDown(n);

// function countDown2(count) {
//   console.log(count);
//   if(count > 0) countDown2(--count);
// }
// countDown2(n);

// // es 60 -------------------------------------------------------------------------

// const f1 = () => {
//   console.log("One");
// };
// const f2 = () => {
//   console.log("Two");
// }
// const f3 = () => {
//   console.log("Three");
//   f1();
//   f2();
// }
// const f4 = () => {
//   console.log("Four");
//   setTimeout(f1);
//   f3();
// }

// f4();

// // es 70 -------------------------------------------------------------------------

// const rev = (x) => {
//   return parseInt(x.toString().split("").reverse().join(""));
// }

// console.log(rev(1234));

// // es 80 -------------------------------------------------------------------------
// let word = "abcba";

// const isPalindrome = (word) => {
//   return word === word.split("").reverse().join("");
// }
// console.log(isPalindrome(word));

// // es 90 -------------------------------------------------------------------------
// function capitalizeFirstLetter(str) {
//   let words = str.split(' ');
//   // let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//   let newArr = [];
//   for(el of words) {
//     el = el.charAt(0).toUpperCase() + el.slice(1);
//     newArr.push(el);
//   };
//   return newArr.join(' ');
// }
// console.log(capitalizeFirstLetter('the quick brown fox')); // 'The Quick Brown Fox'

// // es 95 -------------------------------------------------------------------------
// function generateCombinations(str) {
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       result.push(str.slice(i, j));
//     }
//   }
//   return result;
// }

// console.log(generateCombinations('dog'));


// // es 100 -------------------------------------------------------------------------
//1. What value is output into the console? 10
// let val = 10;
// function tester(val) {
//   val += 10;
//   if (val < 100) {
//     return tester(val);
//   }
//   return val;
// }
// tester(val);
// console.log(val);

//2. What will be output into the console by the below code? Hello
// let testFunction = function(){
//   console.log("Hello");
// }();

//3. What will be output to the console? "Hello" "JavaScript" "My Name is JavaScript"
// (function () {
//     console.log("Hello");
// })();
// (function () {
//     let firstName = "JavaScript";
// })();
// let result = (function () {
//     let firstName = "JavaScript";
//     return firstName;
// })();
// console.log(result);
// (function (firstName) {
//     console.log("My Name is " + firstName);
// })("JavaScript");

// 4. What will be output to the console? ""
// let test2 = (num) => num + 5;
// console.log(test2(14));

// 5. What will be output to the console? 16
// var addFive1 = function addFive1(num) {
//   return num + 2;
// };
// let addFive2 = (num) => num + 2;
// console.log(addFive1(14));
