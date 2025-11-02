// Lesson 7


let playlist = ["Shape of you", "Turn TV off", "Let Down", "Everybody knows", "Now or Never", "Hello", "German", "Brule"];

function addNewSongs(song) {
  playlist.unshift(song);
  console.log(`Added ${song} to the start`);
}

function addOldSongs(song) {
  playlist.push(song);
  console.log(`Added ${song} to the end`);
}

function removeFirstSong() {
  let removed = playlist.shift();
  console.log(`Removed first song: ${removed}`)
}

function removeLastSong() {
  let removed = playlist.pop();
  console.log(`Removed last song: ${removed}`)
}

function findSong(song) {
  if (playlist.includes(song)) {
    console.log(`${song} is in the playlist`);
  } else {
    console.log(`${song} is not in the playlist`)
  }
}

function replaceSong(oldSong, newSong) {
  let index = playlist.indexOf(oldSong);
  if (index !== -1) {
    playlist.splice(index, 1, newSong);
    console.log(`Replaced ${oldSong} with ${newSong}`)
  } else {
    console.log(`Could not find ${oldSong} to replace`)
  }
} 

function showShortSongs() {
  let shortSongs = playlist.filter(function(song) {
    return song.length <= 10;
  });
  console.log("Short Songs:");
  console.log(shortSongs.join("\n"));
}

function sortSongs() {
  playlist.sort();
  console.log("Songs sort A - Z");
  console.log(playlist.join("\n"));
}

// ----- Run ------

console.log(playlist);
removeFirstSong();
removeLastSong();
addNewSongs("Warriors");
addOldSongs("Till I Collapse");
findSong("Let Down");
findSong("Enemies");
replaceSong("Turn TV off", "Bad Day");
showShortSongs();
sortSongs();
console.log(playlist);





// let ages = [5, 23, 54, 17, 13, 18];

// let adults = ages.filter((age) => age >= 18);
// let children = ages.filter(function(age) {
//   return age < 18;
// });

// let message = ages.map(function(age) {
//   return "He is " + age;
// })

// console.log(adults);
// console.log(children);
// console.log(message);
// console.log(ages);


// let products = [2, 6, 1, 10, 5, 3, 25, 12, 23, 54];
// let cheap_products = products.filter(function(product) {
//   return product < 15;
// });

// console.log("These are the cheap items " + cheap_products)

// let item_prices = [2, 23, 5, 12, 54, 67, 1, 6];
// let item_expensive = item_prices.find(function(price) {
//   return price > 54;
// })

// console.log(item_expensive);

// let cities = ["New York", "London", "Paris"];
// let dream = cities.forEach(function(city) {
//   console.log("I want to go to " + city);
// })

// console.log(dream);
// console.log(cities);

// let prices = [10, 20, 30];
// let total = 0;

// prices.forEach(function(price) {
//   total += price;
// });

// let new_prices = prices.map(function(price) {
//   return 30 += 30; 
// });


// console.log(new_prices);

// let inflation = prices.map(function(price) {
//   return price * 1.25;
// });

// console.log(inflation);
// console.log(prices);
// console.log(total);


// let first_grade = ["John", "Peter", "Sarah"];
// let second_grade = ["Emma", "Potter", "James"];
// let students = first_grade.concat(second_grade);
// console.log(first_grade);
// console.log(second_grade);
// console.log(students);

// let names = ["Bob", "Cristine", "Alex", "Hugo"];
// console.log(names);
// console.log(names.join(" & "));
// console.log(names.sort());
// let numbers = [10, 70, 20, 100, 3, 65, 5, 60];
// numbers.sort((a, b) => a-b);
// console.log(numbers);

// names.reverse();

// console.log(names);


// let numbers = [5, 2, 6, 3, 2, 4];
// let total = numbers.reduce(function(accumulator, current) {
//   return accumulator + current;
// }, 0);

// Step 1: Acc = 0; Current = 5; total = 5;
// Step 2: Acc = 5; Current = 2; total = 7;
// Step 3: Acc = 7; Current = 6; total = 13;
// Step 4: Acc = 13; Current = 3; total = 16;


// console.log(numbers);
// console.log(total); 










// Lesson 6

// const grades = [85, 65, 72, 89, 100];

// function grader(array) {
//   let message = array.map(grade => "Your grade is " + grade);
//   console.log(message);
// }

// grader(grades);

// const teachers = ["Smith", "Jacob", "Amelia", "Bob"];
// let greetings = teachers.map(name => "Welcome to school " + name);
// let greeting = teachers.map(function(name) {
//  return "Welcome to school " + name;
// });

// // name => "Hello" + name;
// console.log(greetings);

// const grades = [78, 82, 95, 90];
// console.log(grades)
// let fixedGrades = grades.map(grade => grade + 5);
// console.log(fixedGrades);

// const students = ["Alex", "Bob", "Alice", "Alex", "Smith", "Alex"];
// let alexPos = students.indexOf("Alex", 4);
// console.log(students);
// console.log(alexPos);

// let check = students.includes("Luther");
// console.log(check);

// let classA = students.slice(3, 6);
// console.log(classA);
// console.log(students);

// const subjects = ["Algebra", "Geometry", "Computer Science"];
// console.log(subjects);
// subjects.splice(2, 1, "English", "Spanish", "Astronomy", "Chemistry");
// console.log(subjects);

// subjects[0] = "Physics";
// console.log(subjects);

// let fruit1 = "apple";
// let fruit2 = "banana";
// let fruit3 = "orange";

// const fruit = ["apple", "banana", "orange"];
// // console.log(fruit);
// fruit[0] = "watermelon";
// console.log(fruit);
// const vegetable = new Array("carrot", "tomato", "celery");
// console.log(vegetable);
// vegetable[0] = "potato";
// console.log(vegetable);
// vegetable.push("onion", "carrot", "cucumber");
// console.log(vegetable);

// const cars = ["toyota", "lexus", "mercedes"];
// console.log(cars);
// let removedCar = cars.pop();
// console.log(cars);
// console.log("This car was removed " + removedCar);
// removedCar = cars.shift();
// console.log(cars);
// console.log(removedCar);

// cars.unshift("bmw", "porsche", "dodge");
// console.log(cars);

// const grades = [95, 80, 82, 75];
// console.log(grades);
// grades[3] = 95;
// console.log(grades);


// const calculator =function(input1, input2) {
//   return input1 + input2;
// }

// console.log(calculator(2, 3));












// Lesson 5

// num / 2 === 0
// num % 2 === 0
// num % 2 == 0
// num / 2 = 0

// function guessNumber() {
//   let secret = 7;
//   let guess = prompt("Guess the number!");
//   if (guess === secret) {
//     console.lgo("You guessed it right!");
//   } else {
//     console.log("Wrong guess try again");
//   }
// }
// Guessnumber();



// function calculator() {
//   let num1 = prompt("Enter first number");
//   let num2 = prompt("Enter second number");
//   let operation = prompt("Enter +, -, *, or /");
//   if (operation == "+") {
//     console.log("Result:" num1 + num2);
//   } else if (operation = "-") {
//     console.log("Result:" + num1 - num2);
//   } else if (operation == "*") {
//     console.log("Result:" + num1 * num2);
//   } else if (operation == "/") {
//     console.log("Result:" + num1 / num2);
//   } else {
//     console.log("Wrong opertion");
//   }
// }
// calculater();



// function help() {
//    let message = prompt("Please call for 911 if you need urgent help: (type 911)");
//    console.log("Please call for 911 if you need urgent help: (type 911):\n>>> " + message);
//    if (mesage === 911) {
//     console.log("What is you emergency?");
//     let department = prompt("What department do need? \nType: police, firefighters, medics");
//     console.lod("What department do need? \nType: police, firefighters, medics " + department);
//     if (department == "police") {
//       console.log("Police is on the way");
//     } else if (departmet == "firefighters") {
//       console.log("Firefighters are on the way")
//     } else if (department == "medics") {
//       console.log("Medics are on the way");
//     } else {
//       consol.log("You entered the wrong department");
//     }
//    } else {
//     console.log("You called a wrong number");
//    }
// }

// help();



// function add(a, b) {
//   return a + b;
// }

// console.log(add(5, 2));
// console.log(add(10, 3));
// console.log(5+2);
// console.log(10 + 3);


// hello("Alessandra");
// // hoisting

// function hello(name) {
//   console.log("Welcome to school " + name);
// }

// hello(prompt("Please enter your name:"));



// const powerFour = function(num) {
//   return num ** 4;
// }


// const powerFour = num => {return num ** 4};

// console.log(powerFour(2));
// console.log(powerFour(5));

// console.log(square(1));
// console.log(square(2));
// console.log(square(3));
// console.log(square(4));




// Lesson: 4;

// let tempInput = prompt("Enter the current temperature in Celsius: ");

// let temp = Number(tempInput);

// if (isNaN(temp)) {
//   console.log("Please enter a valid number for temperature.");
// } else {
//   if (temp <= 0) {
//     console.log("It's freezing cold! Wear a heavy coat, gloves, and a hat.");
//   } else if (temp > 0 && temp <= 15) {
//     console.log("It's quite chilly. Wear a warm jacket and maybe a scarf.");
//   } else if (temp > 15 && temp <= 25) {
//     console.log("The weather is mild. A light sweater or long-sleeve shirt should be fine.");
//   } else if (temp > 25 && temp <= 35) {
//     console.log("It's warm outside. A t-shirt and shorts are appropriate.");
//   } else {
//     console.log("It's very hot! Stay cool with light clothing and drink plenty of water.");
//   }

//   let isSunny = confirm("Is it sunny outside?");

//   if (isSunny && temp > 20) {
//     console.log("Great day for sunglasses and a walk")
//   } else if (!isSunny && temp < 15) {
//     console.log("Might rain, don't forget your umbrella and a warm coat.");
//   } else {
//     console.log("Have a great day whatever the weather is!")
//   }

//   console.log("Type before conversion: " + typeof tempInput);
//   console.log("Type after conversion: " + typeof temp);

// }










// let grade = 55;

// if (grade <= 100 && grade >= 90) {
//   console.log("You got an A");
// } else if (grade < 90 && grade >= 80) {
//   console.log("You got a B");
// } else if (grade < 80 && grade >= 70) {
//   console.log("You got a C");
// } else if (grade < 70 && grade >= 60) {
//   console.log("You got a D");
// } else {
//   console.log("You got an F");
// }




// console.log(Boolean(""));
// console.log(Boolean(0));
// console.log(Boolean(0n));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(false));
// console.log(Boolean(NaN));


// let name = "";
// const zero = 0;
// let car = null;
// let username;
// let isAdult = false;
// let surname = NaN;
// let data = 0n;

// console.log(Boolean(name));
// console.log(Boolean(zero));
// console.log(Boolean(car));
// console.log(Boolean(username));
// console.log(Boolean(isAdult));
// console.log(Boolean(surname));
// console.log(Boolean(data));


// let a = 5;
// let b = 10;
// let c = 5;

// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a !== b);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a == b && a == c);
// console.log(a == b || a == c);
// console.log(a != b);

// let result = "5" + 2;
// console.log(result);
// console.log(typeof result);

// let result2 = "5" - 2;
// console.log(result2);
// console.log(typeof result2);

// let num = 123;
// let str = String(num);
// console.log(num);
// console.log(typeof num);
// console.log(str);
// console.log(typeof str);

// let str = "5";
// let num = Number(str);
// console.log(str);
// console.log(num);
// let str2 = "Hello";
// let num2 = Number(str2); // Nan - not a number
// console.log(str2);
// console.log(num2);
// const currentYear = 2025;

// const lastName = "Smith";


// let age = 15;
// console.log(age);
// age = 20;
// console.log(age);
// age = 21
// console.log(age);

// Increment by 1




// let x = 1;
// let y = 2025;
// let name = "John Doe";
// console.log(name + " is " + (x + y) + " years old.");
// console.log();


// let statement = true;

// let a = 10;
// let b = 10;

// console.log(a == b);

// let x;
// x = 5;
// console.log(x);

// let z  = null;
// console.log(z);

// let dreamCar = null;
// console.log("Right now my dream car is: " + dreamCar );
// dreamCar = "Porsche";
// console.log("Right now my dream car is: " + dreamCar );

// const a = Symbol('id');
// const b = Symbol('id');

// console.log(a === b);


// let x = BigInt(23456789012345678901234567890);

// let checkX = typeof x;



// let a = 10;
// let b = "Apple";
// let c = true;
// let d;
// let e = null;
// let f = Symbol('id');
// let g = BigInt(12345678901234567890);


// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof g);

