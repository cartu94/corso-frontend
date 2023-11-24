// 1. Area and Perimeter Calculator
function calculateArea(base, height) {
    return base * height;
}
function calculatePerimeter(base, height) {
    return base*2 + height*2;
}
let base = 5;
let height = 8;
// console.log(`Area: ${calculateArea(base, height)}`)
// console.log(`Perimeter: ${calculatePerimeter(base, height)}`)

// 2. Manipulating Arrays of Strings
let names = ["John", "Mary", "Alex", "Steve", "Mary", "Jo"];
function nameLengths(names) {
  let lengths = [];
  for (let name of names) {
    lengths.push(name.length);
  }
  return lengths;
}
// console.log(nameLengths(names));

// 3. Shopping Cart Management
let cart = {
  products : [],
  addProduct : function(product) {
    this.products.push(product);
  },
  calculateTotal : function() {
    return this.products.length;
  }
}

cart.addProduct("Apple");
cart.addProduct("Orange");
cart.addProduct("Banana");
// console.log(cart.products);
// console.log(cart.calculateTotal());

// 4. Word Count in a Sentence
let countWords = function(sentence) {
  let words = sentence.split(" ");
  return words.length;
}
let sentence = "The quick brown fox jumps over the lazy dog";
// console.log(countWords(sentence));

// 5. String Reversal
let reverseString = function(string) {
  return string.split("").reverse().join("");
}
let string = "Hello World!";
// console.log(reverseString(string));

// 6. Filter Even Numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let filterEvenNumbers = function(numbers) {
  let evenNumbers = [];
  for(let number of numbers) {
    if(number % 2 == 0) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}
// console.log(filterEvenNumbers(numbers));

// 7. Check for Anagrams
let areAnagrams = function(string1, string2) {
  let sortedString1 = string1.split("").sort().join("");
  let sortedString2 = string2.split("").sort().join("");
  return sortedString1 === sortedString2;
}
let string1 = "silent";
let string2 = "listen";
// console.log(areAnagrams(string1, string2));

// 8. Currency Converter
let convertCurrency = function(dollars, exchangeRate) {
  return (dollars * exchangeRate).toFixed(2);
}
let dollars = 100;
let exchangeRateEur = 0.91671401;
// console.log(convertCurrency(dollars, exchangeRateEur));

// 9. Age Calculator
let calculateAge = function(birthYr) {
  let currentYr = new Date().getFullYear();
  return currentYr - birthYr;
}
let birthYr = 1994;
// console.log(calculateAge(birthYr));

// 10. Dice Game
let rollDice = function() {
  return Math.floor(Math.random() * 6) + 1;
}
// for(let i = 0; i < 100; i++) {
//   console.log(rollDice());
// }

// 11. Temperature Converter
let convertCelsiusToFahrenheit = function(celsius) {
  return celsius * (9/5) + 32;
}
let celsius = 30;
// console.log(convertCelsiusToFahrenheit(celsius));

// 12. Book Registry
let book = {
  title : "The Hobbit",
  author : "J.R.R. Tolkien",
  year : 1937,
  genre : "Fantasy",
  getInfo : function() {
    return `${this.title} by ${this.author}, ${this.genre}, (${this.year})`;
  }
}
// console.log(book.getInfo());

// 13. Shopping List
let shoppingList = {
  items : [],
  addItem : function(...item) {
    this.items.push(...item);
  },
  removeItem : function(...item) {
    for(let el of item) {
      let index = this.items.indexOf(el);
      if(index > -1) {  // if item is found
        this.items.splice(index, 1);
      }
    }
  }
}
shoppingList.addItem("Apple","Orange","Banana","Milk","Bread");
// console.log(shoppingList.items);
shoppingList.removeItem("Orange","Milk");
// console.log(shoppingList.items);

// 14. Budget Calculator
let budgetCalculator = {
  income : 0,
  expenses : 0,
  addIncome : function(income) {
    this.income += income;
  },
  addExpense : function(expense) {
    this.expenses += expense;
  },
  countBalance : function() {
    return this.income - this.expenses;
  },
  displayResume : function() {
    return `Income: ${this.income}, Expenses: ${this.expenses}, Balance: ${this.countBalance()}`;
  }
}

budgetCalculator.addIncome(1000);
budgetCalculator.addExpense(300);
budgetCalculator.addExpense(200);
// console.log(budgetCalculator.displayResume());

// 15. Music Playlist
let createSong = function(title, artist, duration) {
  return {
    title : title,
    artist : artist,
    duration : duration,
    displayInfo : function() {
      return `${this.title} by ${this.artist} (${this.duration})`;
    }
  }
}

let createPlaylist = function(name) {
  return {
    name : name,
    songs : [],
    addSong : function(song) {
      this.songs.push(song);
    },
    removeSong : function(song) {
      let index = this.songs.indexOf(song);
      if(index > -1) {
        this.songs.splice(index, 1);
      }
    },
    displayPlaylist : function() {
      let info = `${this.name}:\n`;
      if(this.songs.length > 0) {
        for(let song of this.songs) {
          info += `- ${song.displayInfo()}\n`;
        }
      } else {
        info += "No songs in playlist";
      }
      return info;
    }
  }
}

let song1 = createSong("The Hobbit", "Blind Guardian", "5:53");
let song2 = createSong("The Bard's Song", "Blind Guardian", "3:10");
let song3 = createSong("The Last Candle", "Blind Guardian", "6:03");
let playlist = createPlaylist("Blind Guardian");
// console.log(playlist.displayPlaylist());
playlist.addSong(song1);
playlist.addSong(song2);
playlist.addSong(song3);
// console.log(playlist.displayPlaylist());

// 16. Calories Calculator
let caloriesCalculator = {
  lunch : [],
  dinner : [],
  addFood : function(food, meal) {
    switch(meal) {
      case "lunch":
        this.lunch.push(food);
        break;
      case "dinner":
        this.dinner.push(food);
        break;
      default:
        console.log("Meal not found");
    }
  },
  calculateDailyCalories : function() {
    let totalCalories = 0;
    for (let food of this.lunch) {
      totalCalories += food.calories;
    }
    for (let food of this.dinner) {
      totalCalories += food.calories;
    }
    return totalCalories;
  }
}

let createFood = function(name, calories) {
  return {
    name : name,
    calories : calories
  }
}

caloriesCalculator.addFood(createFood("Pizza", 500), "lunch");
caloriesCalculator.addFood(createFood("Apple", 100), "lunch");
caloriesCalculator.addFood(createFood("Chicken", 300), "dinner");
caloriesCalculator.addFood(createFood("Rice", 200), "dinner");
// console.log(caloriesCalculator.calculateDailyCalories());
