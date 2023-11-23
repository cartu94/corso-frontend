// # Module 10

// console.log(
//   'Exercise 10.01.00: write a program that prints "Hello world!" to the console.'
// );
// console.log("Hello world!\n");

// console.log(
//   "Exercise 10.01.05: write a program that takes 5 numbers as input and prints their sum and average to the console."
// );
// // ```
// // Input: a = 1, b = 2, c = 3, d = 4, e = 5
// // Output: Sum = 15, Average = 3
// // ```
// let a = prompt("Enter number a: ");
// let b = prompt("Enter number b: ");
// let c = prompt("Enter number c: ");
// let d = prompt("Enter number d: ");
// let e = prompt("Enter number e: ");
// let sum = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e);
// let average = sum / 5;
// console.log("Sum = " + sum + ", Average = " + average + "\n");

// console.log(
//   "Exercise 10.01.10: what are the types of these variables listed below? Verify this with typeof and output the result to the console:"
// );

// let str1 = "Laurence";
// let str2 = "Svekis";
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;
// console.log(typeof str1);
// console.log(typeof str2);
// console.log(typeof val1);
// console.log(typeof val2);
// console.log(typeof myNum + "\n");

// console.log(
//   "Exercise 10.01.20: create a variable for your name, another one for your age, and another one for whether you can code JavaScript or not." +
//   "Log to the console the following sentence, where name, age and true/false are variables"
// );
// // ```
// // "Hello, my name is Davide, I am 29 years old and I can code JavaScript:
// // true"
// // ```
// let myName = "Luca";
// let age = 28;
// let canCode = true;
// console.log(
//   "Hello, my name is " + myName + ", I am " + age + " years old and I can code JavaScript: " + canCode + "\n"
// );

// console.log("Exercise 10.01.30: create a variable that contains a value in miles, convert it to kilometers, and log the value in kilometers in the following format:");
// // ```
// // "The distance of 130 kms is equal to 209.2142 miles"
// // (For reference, 1 mile equals 1.60934 kilometers)
// // ```
// let miles = prompt("Enter miles: ");
// console.log("The distance of " + miles*1.60934 + " kms is equal to " + miles + " miles\n");

// console.log("Exercise 10.01.40: set values for height in inches and weight in pounds, then convert the values to centimeters and kilos, " +
// "outputting the results to the console:");
// // • 1 inch is equal to 2.54 cm
// // • 2.2046 pounds is equal to 1 kilo
// // Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos) divided by squared height (in meters). Output the results to the console.
// let inches = prompt("Enter inches: ");
// let pounds = prompt("Enter pounds: ");
// let cm = inches*2.54;
// let kilos = pounds/2.2046;
// let bmi = kilos/(cm/100)**2;
// console.log("Height in cm: " + cm + ", Weight in kilos: " + kilos + ", BMI: " + bmi + "\n");

// console.log("Exercise 10.01.50: write a program that takes a number of seconds as input, calculates the corresponding amount of hours, minutes, and seconds, "+
// "and then prints the result. The output will only display integer numbers.");
// // ```
// // Input: 12560
// // Output: 3 hours, 29 minutes and 20 seconds
// // ```
// let seconds = prompt("Enter seconds: ");
// let hours = Math.floor(seconds/3600);
// let minutes = Math.floor((seconds%3600)/60);

// console.log("Exercise 10.01.60: what outputs do the following statements print? (Write a comment as a note before running the code)");

// a = 5, b = 2, c = 'hello';

// console.log(a == 5);
// console.log(b == '2');
// console.log(c == 'Hello');
// console.log(a != 2);
// console.log(b != 'Hello');
// console.log(a === 2);
// console.log(a === '2');
// console.log(a !== 2);
// console.log(a !== '2');
// console.log(b !== 'Hello');
// console.log(a > 5);
// console.log(a < 2);
// console.log(a >= 5);
// console.log(a <= 5 + '\n');

// console.log("Exercise 10.01.70: what is the output of the following code snippets?");

// 1.
// ```
// alert( null || 2 || undefined ); // 2
// ```

// 2.
// ```
// alert( alert(1) || 2 || alert(3) ); // 1, 2
// ```

// 3.
// ```
// alert( true && null && true); // null
// ```

// 4.
// ```
// alert( alert(1) && alert(2) ); // 1, undefined
// ```

// 5.
// ```
// alert( null || 2 && 3 || 4 ); // 3
// ```

// 6.
// What data type is the following variable?
// ```
// const c = "5"; // string
// ```

// 7.
// What data type is the following variable?
// ```
// const c = 91; // number
// ```

// 8.
// Which one is generally better, line 1 or line 2? // line 2
// ```
// let empty1 = undefined; //line 1
// let empty2 = null; //line 2
// ```

// 9.
// What is the console output for the following? 
// ```
// let a = "Hello";
// a = "world";
// console.log(a);
// ```

// 10.
// What will be logged to the console?
// ```
// let a = "world";
// let b = `Hello ${a}!`;
// console.log(b);
// ```

// 11.
// What is the value of a?
// ```
// let a = "Hello";
// a = prompt("world");
// console.log(a);
// ```

// 12.
// What is the value of b output to the console?
// ```
// let a = 5;
// let b = 70;
// let c = "5";
// b++;
// console.log(b);
// ```

// 13.
// What is the value of result?
// ```
// let result = 3 + 4 * 2 / 8; //4
// ```

// 14.
// What is the value of total and total2?
// ```
// let firstNum = 5;
// let secondNum = 10;
// firstNum++;
// secondNum--;
// let total = ++firstNum + secondNum;
// console.log(total);
// let total2 = 500 + 100 / 5 + total--;
// console.log(total2);
// ```

// 15.
// What is logged to the console here?
// ```
// const a = 5;
// const b = 10;
// console.log(a > 0 && b > 0);
// console.log(a == 5 && b == 4);
// console.log(true ||false);
// console.log(a == 3 || b == 10);
// console.log(a == 3 || b == 7);
// ```
