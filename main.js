// Lesson 18

const myBox = document.getElementById("myBox");
const moveAmount = 30;
let x = 0;
let y = 0;


// document.addEventListener("keydown", (event) => {
//   myBox.style.backgroundColor = "tomato";
//   myBox.textContent = "👾";
// });

// document.addEventListener("keyup", (event) => {
//   myBox.style.backgroundColor = "lightblue";
//   myBox.textContent = "😁";
// })

document.addEventListener("keydown", event => {

  if (event.key.startsWith("Arrow")) {

    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }

    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;

  }
})
















// const myBox = document.getElementById("myBox");
// const myButton = document.getElementById("myButton");

// myButton.addEventListener("click", () => {
//   myBox.style.backgroundColor = "tomato";
//   myBox.textContent = "OUCH 🤕";
// });

// myButton.addEventListener("mouseover", () => { // Hover effect
//   myBox.style.backgroundColor = "yellow";
//   myBox.textContent = "Don't do it 😳";
// });

// myButton.addEventListener("mouseout", () => {
//   myBox.style.backgroundColor = "lightgreen";
//   myBox.textContent = "Click Me 😁"
// })


























// const newListItem = document.createElement("li");


// newListItem.textContent = "coconut";
// newListItem.id = "coconut";
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "lightgreen";

// document.getElementById("fruits").append(newListItem);

// // const orangeItem = document.getElementById("banana");
// // document.getElementById("fruits").insertBefore(newListItem, orangeItem);




// const fruitsList = document.querySelectorAll("#fruits li"); // Nodelist
// document.getElementById("fruits").insertBefore(newListItem, fruitsList[9])

// console.log(fruitsList)

// document.getElementById("fruits").removeChild(fruitsList[0])
// document.getElementById("fruits").removeChild(fruitsList[1])
// document.getElementById("fruits").removeChild(fruitsList[2])
// document.getElementById("fruits").removeChild(newListItem);


// console.log(fruitsList)

// document.getElementById("fruits").append(fruitsList[0])
// document.getElementById("fruits").append(fruitsList[1])
// document.getElementById("fruits").append(fruitsList[2])
// document.getElementById("fruits").append(fruitsList[3])














// // Step 1
// const newH1 = document.createElement("h1");


// // Step 2
// newH1.textContent = "Hello World";
// newH1.id = "myH1";
// newH1.style.color = "tomato"
// newH1.style.textAlign = "center";


// // Step 3

// // document.getElementById('myBox').prepend(newH1);

// // document.getElementById("box1").prepend(newH1);
// // document.getElementById("box4").append(newH1);


// const box3 = document.getElementById('box1');
// document.getElementById("myBox").insertBefore(newH1, box3);

// // Step 4

// document.getElementById('myBox').removeChild(newH1);
// document.getElementById('myBox').removeChild(box3);























// const newListItem = document.createElement("li");

// newListItem.textContent = "Coconut";
// newListItem.id = "coconut";
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "lightgreen";


// // document.body.prepend(newListItem);
// document.getElementById("fruits").append(newListItem);
// // document.getElementById("fruits").prepend(newListItem);
// // const orangeItem = document.getElementById("orange");
// // document.getElementById("fruits").insertBefore(newListItem, orangeItem);


// const fruitsList = document.querySelectorAll("#fruits li");
// // document.getElementById("fruits").insertBefore(newListItem, fruitsList[2]);
// console.log(fruitsList.length );

// // document.getElementById("fruits").removeChild(fruitsList[0]);
// // document.getElementById("fruits").removeChild(fruitsList[1]);
// // document.getElementById("fruits").removeChild(fruitsList[2]);
// // document.getElementById("fruits").removeChild(fruitsList[0]);
// fruitsList[0].remove();
// fruitsList[1].remove();
// fruitsList[2].remove();
// fruitsList[3].remove();
// console.log(fruitsList);




// // Step 1
// const newH1 = document.createElement("h1");

// // Step 2
// newH1.textContent = "I am new Box";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";
// newH1.id = "myH1"

// // Step 3
// // document.body.append(newH1);
// // document.body.prepend(newH1);
// // document.getElementById("box4").append(newH1);
// // document.getElementById("box2").prepend(newH1);

// // const box2 = document.getElementById("box1");
// // document.body.insertBefore(newH1, box2);

// // const boxes = document.querySelectorAll('.box');
// // document.body.insertBefore(newH1, boxes[3]);

// // Remove HTML element

// // document.body.removeChild(newH1);
















// Lesson 17:



// const myHeading = document.querySelector("#my-heading");

// myHeading.style.backgroundColor = "tomato";
// myHeading.style.textAlign = "center"

// const container = document.getElementById('container');

// const headingFours = document.querySelectorAll("h4"); // Nodelist
// headingFours.forEach(headingFour => {
//   headingFour.style.backgroundColor = "brown";
//   headingFour.style.color = "white";
// })


// for (let i = 0; i < headingFours.length; i++) {
//   headingFours[i].style.backgroundColor = "yellow";
// }

// const fruits = document.querySelector(".fruits");
// fruits.addEventListener("click", function () {
//     fruits.style.backgroundColor = "darkgreen";
//     fruits.style.color = "white";
//   })

// for (let i = 0; i < fruits.length; i++) {
//   fruits[i].style.cursor = "pointer";
//   fruits[i].addEventListener("click", function () {
//     fruits[i].style.backgroundColor = "darkgreen";
//     fruits[i].style.color = "white";
//   })
// }

// const vegetables = document.getElementsByTagName("li");

// for (let i = 0; i < vegetables.length; i++) {
//   vegetables[i].style.cursor = "pointer";
//   vegetables[i].addEventListener("click", function () {
//     vegetables[i].style.backgroundColor = "purple";
//     vegetables[i].style.color = "white";
//   })
// }


// const paragpraph = document.getElementsByTagName("p");



// for (let i = 0; i < paragpraph.length; i++) {
//   paragpraph[i].style.backgroundColor = "black";
//   paragpraph[i].style.color = "white";
// }




// const display = document.getElementById("display");

// function updateDisplay(input) {
//   display.value += input;
// }

// function clearDisplay() {
//   display.value = "";
// }

// function calculate() {
//   try {
//     display.value = eval(display.value);
//   } catch (error) {
//     display.value = "Error";
//   }
// }




// function divide(a, b) {
//   try {
//     console.log(a / b);

//     if (b == 0) {
//       throw new Error("You cannot divide by zero");
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// }


// divide(10, 0);

// function checkAge(age) {
//   try {
//     if (age < 0) {
//       throw new Error("Age cannot be a negative number");
//     }

//     if (age < 18) {
//       throw new Error("Access is denied");
//     }

//     console.log("Access granted");
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// checkAge(2)














// Lesson 16: get and set methods and a super()




// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// class Admin extends User {
//   constructor(name, email, role) {
//     super(name, email);
//     this.role = role
//   }
// }

// const admin1 = new Admin("William", "w@gmail.com", "admin");

// console.log(admin1.name)
// console.log(admin1.email)
// console.log(admin1.role)



// class Traveler {
//   speak() {
//     console.log("The traveler speaks a native language");
//   }
// }

// class InternationTraveler extends Traveler {
//   speak() {
//     super.speak();
//     console.log("This traveler has been to many countries");
//   }
// }

// const traveler = new InternationTraveler();

// traveler.speak();
// 3^4


// class User {
//   constructor(username, password, balance) {
//     this.username = username;
//     this.password = password;
//     this.balance = balance;
//   }


//   // USERNAME
//   get username() {
//     return this._username;
//   }

//   set username(value) {
//     if (value.length < 3) {
//       console.log(`Username must be at least 3 characters`);
//     } else {
//       this._username = value;
//     }
//   }
  
//   // PASSWORD
//   get password() {
//     return "******";
//   }

//   set password(value) {
//     if (value.length < 6) {
//       console.log("Password must be at least 6 characters");
//     } else {
//       this._password = value;
//     }
//   }

//   // BALANCE
//   get balance() {
//     return this._balance + "$";
//   }

//   set balance(value) {
//     if (value < 0) {
//       console.log("Balance cannot be negative.")
//     } else {
//       this._balance = value;
//     }
//   }
// }

// // Chlid class PremiumUser

// class PremiumUser extends User {
//   constructor(username, password, balance, discount) {
//     super(username, password, balance);
//     this.discount = discount;
//   }

//   get discount() {
//     return this._discount + "%";
//   }

//   set discount(value) {
//     if (value < 0 || value > 50) {
//       console.log("Discount must be between 0 and 50");
//     } else {
//       this._discount = value;
//     }
//   }

//   discountBalance() {
//     let discountAmount = this._balance * (this._discount / 100);
//     return this._balance - discountAmount + "$";
//   }
// }

// const user1 = new User("Nicolas", "123456", 100);

// console.log(user1)
// console.log(user1.username);
// console.log(user1.password);
// console.log(user1.balance);
// console.log("------------------------------------")

// const user2 = new PremiumUser("Smith", "123456798y", -1000, 70);

// user2._username = "Jonathan"
// console.log(user2._password)
// console.log(user2.username);
// console.log(user2.password);
// console.log(user2.balance);
// console.log(user2.discount);
// console.log(user2.discountBalance());





















// class Student {
//   constructor(name) {
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(newName) {
//     this._name = newName;
//   }
// }

// const student1 = new Student("Alex");



// student1.lastname = "Smith";
// console.log(student1.name);
// console.log(student1);

// student1.name = "Bob";

// console.log(student1.name);
// console.log(student1);


// class Animal {
//   constructor(species, age, name) {
//     this.species = species;
//     this.age = age;
//     this.name = name;
//   }

//   info() {
//     console.log(`${this.species} is ${this.age} years old and it is a ${this.name}.`)
//   }
// }





// class Elephant extends Animal {
//   constructor(species, age, name, weight, height) {
//     super(species, age, name)
//     this.weight = weight;
//     this.height = height
//   }

//   extraInfo() {
//     console.log(`${this.name} weights ${this.weight}kg and it is ${this.height}m tall.`)
//     this.info()
//   }
// }



// const animal1 = new Animal("mammal", 12, "wolf");
// const elephant = new Elephant("Mammal", 20, "Elephant", 500, 4)

// elephant.extraInfo();

// animal1.info();



// Lesson 15: Classes


// Constructor

// function Car(brand, model, year, color) {
//   this.brand = brand,
//   this.model = model,
//   this.year = year,
//   this.color = color,
//   this.advertisement = function () {
//     console.log(`${brand} is the best brand for the model ${model}`);
//   }
// }

// const car1 = new Car("BMW", "X7", 2025, "Black");

// console.log(car1.brand)
// console.log(car1.model)
// console.log(car1.year)
// console.log(car1.color)
// car1.advertisement();

// Class

// class Product {
//   constructor(name, price) {
//     this.name = name,
//     this.price = price
//   }

//   displayProduct() {
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: $${this.price}`);
//   }
// }

// const product1 = new Product("Yogurt", 12.95);
// const product2 = new Product("Watermelon", 10.55);

// product1.displayProduct();
// product2.displayProduct();


// Class with static keyword

// Math.round()
// Math.floor()
// Math.PI

// class MathTools {
//   static PI = 3.14;

//   static getDiameter(radius) {
//     return radius * 2;
//   }

//   static getCircumference(radius) {
//     return 2 * this.PI * radius;
//   }

//   static getArea(radius) {
//     return this.PI * radius * radius;
//   }
// }

// console.log(MathTools.PI);
// console.log(MathTools.getDiameter(10));
// console.log(MathTools.getCircumference(10));
// console.log(MathTools.getArea(10));



// class User {
//   static userCount = 0;

//   constructor(username) {
//     this.username = username;
//     User.userCount++;
//   }

//   sayHello() {
//     console.log(`Hello ${this.username}`);
//   }

//   static getUserCount() {
//     console.log(`There are ${User.userCount} users`);
//   }
// }

// const user1 = new User("Alex");
// const user2 = new User("William");

// console.log(user1.username)
// user1.sayHello();
// user2.sayHello();
// console.log(User.userCount);
// User.getUserCount();


// Class inheritance


// // Parent class
// class Animal {
//   alive = true;

//   eat() {
//     console.log(`This ${this.name} is eating`);
//   }
  
//   sleep() {
//     console.log(`This ${this.name} is sleeping`);
//   }
// }



// // Child 1
// class Rabbit extends Animal {
//   name = "rabbit";

//   hop() {
//     console.log(`This ${this.name} is hopping`);
//   }
// }



// // Child 2
// class Fish extends Animal {
//   name = "fish";

//   swim() {
//     console.log(`This ${this.name} is swimming`);
//   }
// }



// // Child 3
// class Eagle extends Animal {
//   name = "eagle";

//   fly() {
//     console.log(`This ${this.name} is flying`);
//   }
// }


// const rabbit = new Rabbit();
// const fish = new Fish();
// const eagle = new Eagle();

// console.log(rabbit.alive);
// console.log(fish.alive);
// console.log(eagle.alive);
// rabbit.eat();
// fish.eat();
// eagle.eat();
// rabbit.sleep();
// fish.sleep();
// eagle.sleep();
// rabbit.hop();
// fish.swim();
// eagle.fly();
























// HW

// Question: 1

// document.getElementById('submitBtn1').addEventListener("click", function () {
//   const today = new Date();
//   const year = today.getFullYear();
//   const month = (today.getMonth() + 1).toString().padStart(2, "0"); 
//   const day = today.getDate().toString().padStart(2, "0");

//   const randomNumber = Math.floor(Math.random() * 100) + 1; // 1 - 100

//   document.getElementById("output1").textContent = `Today: ${year}-${month}-${day}, Random: ${randomNumber}`;
// })

// // Question: 2

// document.getElementById("submitBtn2").addEventListener("click", function() {
//   const now = new Date();
//   const hoursNow = now.getHours();
//   const hoursLeft = 24 - hoursNow;

//   document.getElementById("output2").textContent = `Hours left until midnight: ${hoursLeft}`;
// })

// // Question: 3

// const btn3 = document.getElementById("submitBtn3");
// btn3.addEventListener("click", function() {
//   const year = Number(document.getElementById("birthYear").value);
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - year;

//   const box = document.getElementById("output3");
//   box.textContent = `You are ${age} years old`;

//   if (age < 18) {
//     box.style.backgroundColor = "yellow";
//   } else {
//     box.style.backgroundColor = "lightgreen";
//   }
// })

// // Question: 4

// const btn4 = document.getElementById("submitBtn4");
// const inputField = document.getElementsByTagName("input"); // [1, 2, 3, 4, 5]

// for (let i = 0; i < inputField.length; i++) {
//   inputField[i].style.width = "200px";
// }

// btn4.addEventListener("click", function() {
//   const celcius = Number(document.getElementById("celciusInput").value);
//   const farenheit = (celcius * 9/5) + 32;

//   const tips = ["Wear a jacket!", "Carry an umbrella", "Wear a t-shirt"];

//   const tip = tips[Math.floor(Math.random() * tips.length)];

//   document.getElementById("output4").textContent = `Farenheit: ${farenheit}. Tip: ${tip}`;
// })

// // Question: 6





































































// Constructor
// function Car (brand, model, year, color) {
//   this.brand = brand,
//   this.model = model,
//   this.year = year,
//   this.color = color,
//   this.message = function () {
//     console.log(`This is the brand`, brand)
//   }
// }

// const car1 = new Car("Volvo", "V8", 2015, "pink");

// console.log(car1);
// car1.message();

// Class

// class Product {
//   constructor(name, price) {
//     this.name = name,
//     this.price = price
//   }

//   displayProduct() {
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: $${this.price}`);
//   }
// }

// const product1 = new Product("Yogurt", 12.89);
// const product2 = new Product("Beef", 20.30.toFixed(2));

// product1.displayProduct();
// product2.displayProduct();




// class MathUtil {
//   static PI = 3.14;

//   static getDiameter(radius) {
//     return radius * 2;
//   }

//   static getCircumference(radius) {
//     return 2 * this.PI * radius;
//   }
  
//   static getArea(radius) {
//     return this.PI * radius * radius;
//   }
// }

// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));



// class User {
//   static userCount = 0;

//   constructor(username) {
//     this.username = username;
//     User.userCount++;
//   }

//   sayHello() {
//     console.log(`Hello ${this.username}`);
//   }

//   static getUserCount() {
//     console.log(`There are ${User.userCount} users`);
//   }
// }


// const user1 = new User("Alex");
// const user2 = new User("Timothe");
// const user3 = new User("Jacob");

// console.log(user1.username)
// console.log(user2.username)
// console.log(user3.username)
// console.log(User.userCount)
// user1.sayHello();
// user2.sayHello();
// user3.sayHello();

// User.getUserCount();



// inheritance


// class Animal {
//   alive = true;

//   eat() {
//     console.log(`This ${this.name} is eating`);
//   }

//   sleep() {
//     console.log(`This ${this.name} is sleeping`);
//   }
// }

// class Frog extends Animal {
//   name = "Frog";

//   hop() {
//     console.log(`This ${this.name} is hopping`);
//   }
// }

// class Shark extends Animal {
//   name = "Shark";
// }

// class Hawk extends Animal {
//   name = "Hawk";
// }

// const frog = new Frog();
// const shark = new Shark();
// const hawk = new Hawk();

// console.log(shark.alive);
// frog.hop();
// shark.eat();
// shark.sleep();







// Lesson 14: Math & Date Objects


// function updateCount() {
//   const now = new Date();
//   let hours = now.getHours();
//   let meridiem;

//   if (hours >= 12) {
//     meridiem = "PM";
//   } else {
//     meridiem = "AM";
//   }

//   hours = hours % 12 || 12
//   hours = hours.toString().padStart(2, 0);


//   const minutes = now.getMinutes().toString().padStart(2, 0);
//   const seconds = now.getSeconds().toString().padStart(2, 0);

//   const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
//   document.getElementById("clock").textContent = timeString;
// }

// updateCount();
// setInterval(updateCount, 1000)



































// const date = new Date();

// console.log(date);
// console.log("Year is", date.getFullYear());
// console.log("Month is", date.getMonth());
// console.log("Day of the month is", date.getDate());
// console.log("Day of the week is", date.getDay());
// console.log("Hour is", date.getHours());
// console.log("Minute is", date.getMinutes());
// console.log("Seconds is", date.getSeconds());
// console.log("Miliseconds is", date.getMilliseconds());


// const customDate = new Date(2025, 11, 23, 15, 5, 8);
// let hour = customDate.getHours();
// console.log(customDate);
// console.log(hour);
// hour = hour.toString().padStart(3, 0);
// console.log(hour);

// function greeting() {
//   console.log("Hello")
// }

// setInterval(greeting, 100);

// const countLabel = document.getElementById("countLabel");
// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// let count = 0;


// decreaseBtn.addEventListener("click", function () {
//   count--;
//   countLabel.textContent = count;
// });

// resetBtn.addEventListener("click", function () {
//   count = 0;
//   countLabel.textContent = count;
// });

// increaseBtn.addEventListener("click", function () {
//   count++;
//   countLabel.textContent = count;
// });





// const submitBtn = document.getElementById("submitBtn");


// submitBtn.addEventListener("click", function() {
//   const username = document.getElementById("username").value;
//   document.getElementById("welcome-msg").textContent = `Hello ${username}`;
// })



// let x = 10.2;
// let z = Math.trunc(x);
// console.log(z)

// Math.pow()
// let x = 5;
// let y = 3;
// let z = Math.pow(x, y);
// console.log(`${x} to the power of ${y} is ${z}`);


// // Math.sqrt()
// let a = 20;
// let b = Math.sqrt(a);
// console.log(`The square root of ${a} is ${Math.round(b)}`);


// Math.abs()

// let x = 10;
// let y = 20;
// console.log(`${x} - ${y} = ${x-y}. This is the value without the abs method`)
// console.log(`${x} - ${y} = ${Math.abs(x-y)}. This is the value with the abs method`)

// Math.random()

// 0 - 0.999999
// console.log(Math.floor(Math.random() * 10) + 1);


// Math.min & Math.max

// console.log(Math.max(2, 5, 10, 1, 2, 45, 6, 2, 3));
// console.log(Math.min(2, 5, 10, 1, 2, 45, 6, 2, 3));









// const fruits = document.getElementsByClassName("fruits");

// console.log(fruits); // ["Apple", "Kiwi", "Banana"]

// fruits[0].textContent;














// Lesson 13: DOM continuation


// let count = 0;

// for (let i = 1; i <= 200; i++) {
//   if (i % 4 === 0) {
//     count++;
//   }
// }

// console.log(count);


// let num = Number(prompt("Enter a number: "));
// let count = 0;

// while (num > 0) {
//   num-=3;
//   count++;
// }

// console.log("Subtractions: " + count);



// for (let i = 1; i <= 100; i++) {
//   if (i % 10 === 7) {
//     console.log(i);
//   }
// }




















// Lesson 12: DOM

// const input   = document.getElementById("commentInput");
//     const button  = document.getElementById("postBtn");
//     const comments = document.getElementById("comments");

//     button.addEventListener("click", () => {
//       const value = input.value;

//       // This is the problem:
//       comments.innerHTML += `<div class="comment">${value}</div>`;

//       input.value = "";
//     });


// function changeRed() {
//   document.getElementById("box").style.backgroundColor = "red";
// }






// function changeText() {
//   document.getElementById("message").innerHTML = "You clicked this button!";
// }

// function showName() {
//   let name = document.getElementById("username").value;
//   document.getElementById("output").innerHTML = "Hello, " + name;
// }





// const name = document.getElementById("name1");

// console.log(name);

// const fruits = document.getElementsByClassName("fruit");

// console.log(fruits);

// const veggies = document.getElementsByClassName("veggie");

// console.log(veggies)


// document.getElementById("centralDiv").innerHTML = "It is going to be an interesting topic.";
// document.getElementById("prompt").innerHTML = "Welcome to the school";
// document.getElementById("sentance").innerHTML = "Hello my name is Jack"


















// Lesson 11: 


// Ask the user for a number using prompt(), and print the multiplication table from 1 to 10 for that number.

// let numberInput = Number(prompt("Please enter a number: "));

// for (let n = 1; n < 11; n++) {
//   console.log(`${numberInput} * ${n} = ${numberInput * n}`)
// }

// let num = 1;

// while (num <= 10) {
//   console.log(num);
//   num++;
// }

// console.log("-------------------")

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }


// let password = "1234";
// let passwordInput = prompt("Please enter your password: ");

// while (passwordInput != password) {
//   console.log("Your password is incorrect!");
//   passwordInput = prompt("Please enter your password again: ");
// }

// console.log("Your Password is Correct!")


// let symbol = prompt("Enter symbol:")
// let num1 = Number(prompt("Enter 1st number"));
// let num2 = Number(prompt("Enter 2st number"));
// let input = true;

// while (input) {
//   switch (symbol) {
//     case "+":
//       console.log(`${num1} + ${num2} = ${num1 + num2}`);
//       input = false;
//       break;
//     case "-":
//       console.log(`${num1} - ${num2} = ${num1 - num2}`);
//       input = false;
//       break;
//     default:
//       symbol = prompt("Incorrect symbol enter it again:");
//   }
// }



// let num = 1;


// while (num < 5) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// } while (num < 5);

// let message = "hello";

// function greet() {
//   let message = "Hi";
//   console.log("Local: " + message);
// }

// greet();

// console.log(`Global: ${message}`);



// let number = 2;

// if (number == 2) {
//   let num2 = 5;
//   console.log(number+num2);
// } else {
//   let num1 = 10;
//   console.log(number+ num1);
// }

// console.log(num1);
// console.log(num2);


// greet();

// function greet() {
//   console.log("Hello World!")
// }



// let battery = 100;
// let appInput = prompt("Enter the app that you are using: ")


// while (battery > 0) {
//   appInput = prompt("Enter the app that you are using: ")

//   if (appInput == "Instagram") {
//     battery-=10;
//     console.log(`You used instagram. Your batter is ${battery}%`);
//   } else if (appInput == "YouTube") {
//     battery-=20;
//     console.log(`You used YouTube. Your batter is ${battery}%`);
//   } else if (appInput == "Google") {
//     battery-=15;
//     console.log(`You used Google. Your batter is ${battery}%`);
//   } else {
//     console.log("Invalid app")
//   }
// }

// console.log(`Phone is dead!`);


// Menu

// let plov = 25;
// let chickenSoup = 15;
// let tea = 5;

// let check = 0;

// let choice = prompt(`Enter a number from 1-3. Type exit to leave.`);

// do {
//   choice = prompt(`Enter a number from 1-3. Type exit to leave.`)
//   if (choice == 1) {
//     check+=25;
//     console.log(`Add: ${plov}$`);
//   } else if (choice == 2) {
//     check+=15;
//     console.log(`Add: ${chickenSoup}$`)
//   } else {
//     check+=5;
//     console.log(`Add: ${tea}$`)
//   }
// } while (choice != "exit");


// console.log(`Your total is ${check}$`)



// let num = prompt(`Enter a number to guess: `);
// let input;

// do {
//   input = prompt(`Please enter a number 0 - 10:`);
//   if (input != num) {
//     console.log(`Number ${input} is wrong.`);
//   }
// } while (num != input)

// console.log(`You got it right ${num} = ${input}`);

// let input = Number(prompt("Enter a non-negative integer:"));
// let factorial = 1;
// let k = input;

// while (k > 1) {
//   factorial *= k;
//   k--;
// }

// console.log("Factorial of " + input + " is " + factorial);
























// Lesson 10: Switch and For Loop


// let bossHP = 300;
// let playerHP = 150;
// let heals = 3;

// // Player Action Function

// function playerAction(action) {
//   switch (action) {
//     case "punch":
//       console.log("You punched! -15 HP to the Boss");
//       bossHP-=15;
//       break;

//     case "kick":
//       console.log("You kicked! -20 HP to the Boss");
//       bossHP-=20;
//       break;

//     case "fire":
//       console.log("FIRE BLAST! -35 HP to the Boss");
//       bossHP-=35;
//       break;

//     case "heal":
//       if (heals > 0) {
//         console.log("You healed +25 HP");
//         playerHP+=25;
//         heals--;
//       } else {
//         console.log("No heals left!");
//       }
//       break;

//     case "run":
//       console.log("You ran away... Game Over.");
//       break;
    
//     default:
//       console.log("Invalid action.")
//   }
// }

// // Boss Attack Function
// function bossAttack() {

//   let damage = Math.floor(Math.random() * 26) + 15;

//   console.log(`Boss attacks you for ${damage} HP!`);
//   playerHP -= damage;
// }


// for (let round = 1; round <= 20; round++) {
//   console.log(`================== ROUND ${round} ================`);

//   let action = prompt("Choose your move (punch, kick, fire, heal, run): ");

//   console.log("You chose: " + action);
//   playerAction(action);

//   if (bossHP <= 0) {
//     console.log("You defeated THE BOSS");
//     break;
//   }
  
//   if (action == "run") {
//     break;
//   }

//   if (playerHP > 0) {
//     bossAttack();
//   }


//   if (playerHP <= 0) {
//     console.log("You died! The BOSS wins...");
//     break;
//   }

//   // Show stats
//   console.log(`Your HP: ${playerHP}`);
//   console.log(`Boss HP: ${bossHP}`);
//   console.log(`Heals left: ${heals}`);
//   console.log(`--------------------------`);
// }

// // End Game Results
// if (playerHP > 0 && bossHP <= 0) {
//   console.log(`Final Result: You WIN!`);
// } else if (playerHP <= 0) {
//   console.log(`Final Result: You LOST.`);
// } else {
//   console.log(`You escaped.`);
// }


























//              0         1.      2         3
// const names = ["Jack", "Steve", "Thomas", "Elsa"];

// for (let i = 0; i < names.length; i++) {
//   console.log(`Hello my name is = ${names[i]}.`);
// }

// let sum = 0;
// let n = 100;

// for (let i = 6; i > 5; i++) {
//   console.log(i);
// }

// console.log(`Sum: ${sum}`);

// let i = 10;

// for(let i = 0; i<5; i++) {
//   console.log("Hello World");
// }


// let trafficLight = "black";
// checkLight("yellow");
// checkLight("yellow");

// function checkLight(trafficLight) {
//   switch (trafficLight) {
//     case "red":
//       console.log("Stop");
//       break;
//     case "yellow":
//       console.log("Wait");
//       break;
//     case "green":
//       console.log("Drive");
//       break;
//     default:
//       console.log("Invalid traffic light!");
//   }
// }



// let age = 18;

// switch (age) {
//   case (age >= 18):
//     console.log("Number (number type)");
//     break;
// }

// if (day === 1) {
//   console.log("Number (number type)");
// } else {
//   console.log("Number (string type)");
// }



// if (trafficLight == "red") {
//   console.log("Stop");
// } else if (trafficLight == "yellow") {
//   console.log("Wait");
// } else if (trafficLight == "green") {
//   console.log("Drive");
// } else {
//   console.log("Invalid");
// }





// Function Declaration:
// function checkAge(age) {
//   if (age < 14) {
//     console.log("You are a kid");
//   } else if (age < 21) {
//     console.log("You are a teen")
//   } else if (age < 65) {
//     console.log("You are a middle age")
//   } else {
//     console.log("You are a grandpa")
//   }
// }

// checkAge(13);
// checkAge(20);
// checkAge(21);
// checkAge(65);
// checkAge(105);


// 0 - 13 kid, 13 - 20 teen, 21 adult, grandpa 65- 125











// Lesson 9

       


// const person = {
//   name: "Jack",
//   age: 18,
//   "b-year": 2007,
//   greet: function() {
//     console.log("Hello");
//   }
// }

// console.log(person);

// delete person.greet;
// delete person.age;

// console.log(person);

// const library = {
//   books: [
//     {title: "Harry Potter", author: "Morrison"}, 
//     {title: "Persy Jackson", author: "James"}
//   ]
// }
// const users = [  
//   { name: "Ali", age: 18 },  
//   { name: "Sara", age: 22 },  
//   { name: "John", age: 19 } 
// ];

// name, age, b-year = keys
// "Jack", 18, 2007 = 




// function Car(brand, type, model, year, color = "White") {
//   this.brand = brand || "unknown";
//   this.type = type || "suv";
//   this.model = model || "x6";
//   this.year = year || null;
//   this.color = color;
// }

// const bmw = new Car();


// console.log(Car());
// console.log(bmw);

// // ----

// let sum = 50;

// function greet() {
//   let sum = 10;
//   return console.log("Hello 1");
// }

// greet();

// console.log(sum) // 




// const wallet = ["library card", 'Id', 'School ID', "DMV card"]
// console.log(wallet);
// console.log(wallet[0]);
// console.log(wallet[wallet.length - 1]);

// arrayName[arrayName.length - 1]










// Lesson 8: Objects



// const student = {
//   "student-name": "John",
//   "student age": 20
// }

// console.log(student["student age"]);

// console.log(student);
// console.log(student.name);
// console.log(student.age);

// const user = {
//   userName: "Alex",
//   password: 1234,
//   dateBirth: 2005
// }

// const car = ["BMW"];

// const car = {
//   company: "BMW",
//   model: "amg",
//   year: 2025,
//   color: "red",
// }

// const hobby = ["Reading", "Dancing", "Singing"];
// console.log(hobby);
// hobby[1] = "Cooking";
// console.log(hobby);

// const person = {
//   name: "Jack", 
//   hobby: "Singing"
// }

// console.log(person.hobby);
// person.hobby = "Dancing";
// console.log(person.hobby);

// console.log(person);
// person.city = "New York";
// person.age = 27;
// person.id = 23415;
// console.log(person);

// const airplane = {
//   name: "Uzbek Airlines",
//   year: 2012,
//   numSeats: 100,
//   passengers: 73
// }

// airplane.passengers = 85;
// console.log(airplane.passengers);

// airplane.color = "white";
// console.log(airplane);
// delete airplane.color;
// console.log(airplane);

// const person = {
//   name: "Peter",
//   age: 20,
//   bYear: 2007,
//   cYear: 2025,
//   calculate: function() {
//     console.log(this.name + " is " + (this.cYear - this.bYear) + " old.");
//   },
//   greet: function() {
//     console.log(`Hello my name is ${this.name} and I am ${this.age} old.`);
//   }
// }

// person.calculate();
// person.greet();

// person.greet();
// console.log(person);
// person.application = function() {
//   console.log("Peter has submitted his application");
// }
// console.log(person);
// person.application();


// ---------------- Practice -------------------


// const player = {
//   name: "Ali",
//   score: 0,
//   increase: function(points) {
//     this.score += points;
//   },
//   showScore: function() {
//     console.log(this.name + "'s score is " + this.score);
//   }
// };

// player.showScore();
// player.increase(10);
// player.showScore();
// player.increase(25);
// player.showScore();


// const calculator = {
//   add: function(a, b) {
//     return a + b;
//   },
//   subtract: function(a, b) {
//     return a - b;
//   },
//   multiply: function(a, b) {
//     return a * b;
//   },
//   divide: function(a, b) {
//     return a / b;
//   }
// }

// console.log(calculator.add(4, 3));
// console.log(calculator.subtract(4, 3));
// console.log(calculator.multiply(4, 3));
// console.log(calculator.divide(4, 3));


// const car = {
//   brand: "Toyota",
//   speed: 0,
//   start: function() {
//     console.log("Car started");
//   },

//   accelerate: function(amount) {
//     this.speed += amount;
//     console.log("Speed is now " + this.speed + " mil/hour");
//   },

//   stop: function() {
//     this.speed = 0;
//     console.log("Car stopped");
//   }
// };

// car.start();
// car.accelerate(50);
// car.accelerate(24);
// car.stop();


// const bankAccount = {
//   owner: "Jack", 
//   balance: 5000,
//   deposit: function(amount) {
//     this.balance += amount;
//     console.log("Deposited $" + amount + ". New balance is $" + this.balance);
//   },

//   withdraw: function(amount) {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//       console.log("Withdrew $" + amount + ". New balance $" + this.balance);
//     } else {
//       console.log("Insufficient amount of money!");
//     }
//   }
// };

// console.log("Balance: " + bankAccount.balance);
// let money = Number(prompt("Please input amount of money: "));
// bankAccount.deposit(Number(prompt("Please input amount of money: ")));
// bankAccount.withdraw(Number(prompt("Please input amount of money: ")));
// bankAccount.withdraw(Number(prompt("Please input amount of money: ")));
// bankAccount.withdraw(Number(prompt("Please input amount of money: ")));

// const car = [];
// console.log(car);

// car.unshift(prompt("Please enter your car: "));
// car.unshift(prompt("Please enter your car: "));
// car.unshift(prompt("Please enter your car: "));
// car.push(prompt("Please enter your car: "));
// console.log(car);


// const user = {
//   name: "Jack",
//   email: "jack@gmail.com",
//   loggedIn: false,
//   login: function() {
//     this.loggedIn = true;
//     console.log(`${this.name} just logged in.`);
//   },
//   logout: function() {
//     this.loggedIn = false;
//     console.log(`${this.name} just logged out.`);
//   }
// };

// user.login();
// console.log(user.loggedIn);
// user.logout();
// console.log(user.loggedIn);
// user.loggedIn;





// Lesson 7: Array Methods


// let playlist = ["Shape of you", "Turn TV off", "Let Down", "Everybody knows", "Now or Never", "Hello", "German", "Brule"];

// function addNewSongs(song) {
//   playlist.unshift(song);
//   console.log(`Added ${song} to the start`);
// }

// function addOldSongs(song) {
//   playlist.push(song);
//   console.log(`Added ${song} to the end`);
// }

// function removeFirstSong() {
//   let removed = playlist.shift();
//   console.log(`Removed first song: ${removed}`)
// }

// function removeLastSong() {
//   let removed = playlist.pop();
//   console.log(`Removed last song: ${removed}`)
// }

// function findSong(song) {
//   if (playlist.includes(song)) {
//     console.log(`${song} is in the playlist`);
//   } else {
//     console.log(`${song} is not in the playlist`)
//   }
// }

// function replaceSong(oldSong, newSong) {
//   let index = playlist.indexOf(oldSong);
//   if (index !== -1) {
//     playlist.splice(index, 1, newSong);
//     console.log(`Replaced ${oldSong} with ${newSong}`)
//   } else {
//     console.log(`Could not find ${oldSong} to replace`)
//   }
// } 

// function showShortSongs() {
//   let shortSongs = playlist.filter(function(song) {
//     return song.length <= 10;
//   });
//   console.log("Short Songs:");
//   console.log(shortSongs.join("\n"));
// }

// function sortSongs() {
//   playlist.sort();
//   console.log("Songs sort A - Z");
//   console.log(playlist.join("\n"));
// }

// // ----- Run ------

// console.log(playlist);
// removeFirstSong();
// removeLastSong();
// addNewSongs("Warriors");
// addOldSongs("Till I Collapse");
// findSong("Let Down");
// findSong("Enemies");
// replaceSong("Turn TV off", "Bad Day");
// showShortSongs();
// sortSongs();
// console.log(playlist);




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










// Lesson 6: Array

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

