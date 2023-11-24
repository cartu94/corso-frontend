# Exercises

## 1. Area and Perimeter Calculator

- Create a function `calculateArea` that calculates and returns the area of a rectangle. The function takes two parameters: base and height.
- Create a function `calculatePerimeter` that calculates and returns the perimeter of a rectangle. The function takes two parameters: base and height.
- Use both functions to calculate and log the area and perimeter of a rectangle with a base of 5 and height of 8.

## 2. Manipulating Arrays of Strings

- Create an array of strings called `names`.
- Write a function called `nameLengths` that takes an array of strings and returns a new array containing the length of each name.
- Log the array of name lengths using the function.

## 3. Shopping Cart Management

- Create an object `cart` representing a shopping cart. The object should have a prop to hold the array of items and a method `addProduct` that accepts a product name and adds it to the array.
- Add to the object a method `calculateTotal` that calculates and returns the total number of items in the cart.
- Add some products to the cart and log the total.

## 4. Word Count in a Sentence

- Write a function called `countWords` that takes a sentence and returns the number of words in the sentence.
- Call the function to count the words in an example sentence.

## 5. String Reversal

- Write a function called `reverseString` that takes a string and returns the reversed string.
- Call the function to reverse an example string.

## 6. Filter Even Numbers

- Create an array of numbers.
- Write a function called `filterEvenNumbers` that returns a new array containing only the even numbers from the original array.
- Log the filtered array using the function.

## 7. Check for Anagrams

- Write a function called `areAnagrams` that takes two strings and returns true if they are anagrams, otherwise false.
- Call the function to check if some pairs of words are anagrams.

## 8. Currency Converter

- Write a function called `convertCurrency` that takes an amount in dollars and an exchange rate, and returns the converted amount in another currency.
- Call the function with an amount and exchange rate of your choice.
- Tip: To round the value to just two decimal places you can use the numbers `toFixed(2)` method

## 9. Age Calculator

- Write a function called `calculateAge` that takes a birth year and returns the current age.
- Call the function with your birth year.

## 10. Dice Game

- Write a function called `rollDice` that simulates rolling a six-sided die and returns the result (a number from 1 to 6).
- Roll the die multiple times and log the results.

## 11. Temperature Converter

- Write a function called `convertCelsiusToFahrenheit` that takes a temperature in degrees Celsius and returns the equivalent temperature in degrees Fahrenheit.
- Call the function with a temperature in Celsius.
- Tip: To convert a temperature from Celsius to Fahrenheit, multiply the Celsius value by 9/5 and add 32.

## 12. Book Registry

- Create an object named `book` representing a book. The book should have properties like `title`, `author`, `year`, and `genre`.
- Write a method `getInfo` that returns the book information in a formatted string.
- Log the result of `getInfo` method

## 13. Shopping List

- Create an object named `shoppingList` representing a shopping list. The list should have an array of items and methods like `addItem` to add an item and `removeItem` to remove an item.
- Add and remove some items using object's methods
- Log the number of items and the content of the shopping list

## 14. Budget Calculator

- Create an object named `budgetCalculator` representing a budget calculator. The calculator should have properties like `income` and `expenses`, and methods like `addIncome` to add income and `addExpense` to add an expense.
- Add a `displayResume` method that logs income and expenses property values.

## 15. Music Playlist

- Create a function `createSong` that takes parameters for the title, artist, and duration of a song and returns a song object with a `displayInfo` method to log information about the song.
- Create a function `createPlaylist` that takes a name and returns a playlist object with the following methods:
   - `addSong`: Takes a song object and adds it to the playlist.
   - `removeSong`: Takes a song object and removes it from the playlist.
   - `displayPlaylist`: Logs the name of the playlist and the information of all the songs in the playlist. If the playlist is empty log a message in the console

- Use the function previously defined to create songs
- Create the playlist `myPlaylist`
- Add songs to playlist
- Display the playlist content with `displayPlaylist` method

Ensure the `createSong` function returns an object with a `displayInfo` method, and the `createPlaylist` function returns an object with the specified methods.

## 16. Calories Calculator

- Create an object named `caloriesCalculator` representing a calories calculator. The calculator should have properties like `lunch` and `dinner` (arrays) representing the meals of the day and methods like `addFood` to add food consumption in each meal and `calculateDailyCalories` to calculate total daily calories.
- The `addFood` method takes two properties: `food` and `meal`.
- Each food added to the meals in the object should be an object containing two properties: `name` and `calories`.
- Use the method `addFood` at least twice (each meal) to add some food into the arrays.
- Log the result of `calculateDailyCalories` in the console.