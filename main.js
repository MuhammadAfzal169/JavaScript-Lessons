// Lesson 5




// num / 2 === 0
// num % 2 === 0
// num % 2 == 0
// num / 2 = 0








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

const powerFour = num => {return num ** 4};

console.log(powerFour(2));
console.log(powerFour(5));

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

