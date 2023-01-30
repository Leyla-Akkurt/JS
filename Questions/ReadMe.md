Exercise - Variables Naming 
Write a better names for variables where it's necessary.

let _name = 'mario';
let *surname = 'Rossi';
let 1age = 20;
let ?isMarried = false;
let job? = 'developer';
let isGraduated2 = false;

Exercise - Primitives
Create the variables firstName, lastName and fullName.
Assign them a value and print in the console the full name


Exercise - Type Conversion
Create a variable and set it as true.
Print the value in the console and the data type.
Convert it to a numeric data type, print the value and the data type.
Convert it to string data type, print the value and the data type.
Finally, convert it to a boolean data type, print the value and the data type.


Exercise - Variables Comparison
Try to predict the output of the comparisons before printing them in the console.

const name = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

name == lastname
age <= average
firstYearCompleted == lastname
yearsCompleted == firstYearCompleted
firstYearCompleted === yearsCompleted
examsCompleted < age
isGraduated > yearsCompleted


Exercise - Logical Operators
Complete the expressions inside the console.log(), by using the correct logical operator.

const question1 = 101 < 67;
const question2 = 1 == true;
const question3 = true != 1
const question4 = 4 <= 4

console.log(question1 ... question2) //the result must be true
console.log(question1 ... question2) //the result must be false
console.log(question3 ... question2) //the result must be true
console.log(question4 ... question4) //the result must be false
console.log(question2 ... question4) //the result must be false


Exercise - Conditional Operator
Create a variable called age and assign it a numeric value. Use the Conditional (ternary) operator. If the variable is grater or equal to 18, print You can drive a car. If the variable is less than 18, print You are too young to drive.


Exercise - If/else statement
Create a variable called age and assign it a numeric value. Use the if/else statement. If the variable is grater or equal to 18, print You can drive a car. If the variable is less than 18, print You are too young to drive.

Exercise - If/else statement
Rewrite the code below, by using the ternary operator.

let number = 7;

if (number > 0) {

console.log("The number is positive");

} else console.log("The number is negative");


Exercise - If/else statement
Create a variable called password. If the password length is between 4 and 6, print the message Password length is correct, otherwise print the message Password not valid.


Exercise - Switch statement.
Print in the console the price of the room according to the following scheme:

Price for Basic Room --> 50€
Price for Junior Suite Room --> 80€
Price for Master Suite --> 100€


Exercise - Loops.
Print in the console the numbers from 1 to 10.


Exercise - Loops.
Print in the console the numbers from 1 to 10.


Exercise - Loops.
Use a for loop to print all the numbers from 0 to 10 and their sum. The output should be:

0
1
2
3
4
5
6
7
8
9
10
55


Exercise - Functions
Write a function called sayHelloName that takes in one parameter. The function must return the concatenation of two strings (the output should be: "Hello Cosimo"). In this case "Cosimo" is the string passed as parameter.

The function takes in one parameter.
The function returns "Hello" plus the name.
The output printed in the console must be: "Hello name"


Exercise - Callback
Create two functions: the first one is called sayHelloName and takes is as parameter another function (the second one) called printName.
The printName function should just execute the console.log() method and print the name. The sayHelloName that takes in the callback as parameter, must execute the console.log() of the "Hello" string and after that invoke the function passed as parameter.


Exercise - Callback
Starting from the previous exercise, we want to print the "Hello" "Name" strings after one second. In order to achieve this, we can use the setTimeout() JavaScript function. This function takes in two parameters: the first one is a function, the second one is the delay time.


Exercise - Arrow Functions
Replace the function below with arrow function.

function sum() {
return 5 + 5;
}

console.log(sum());
The output of the function doesn't have to change.


Exercise - Arrow Functions
Starting from the function below, create an arrow function that takes in two numbers as parameters and returns the sum.

function sum() {
return 5 + 5;
}

console.log(sum());


Exercise - Scope
If you run this function, you'll get an error. Fix the function and explain briefly what's wrong.

``` function canPlay() { let sport = " Football";

if (true) { let personName = "Cosimo"; }

console.log(personName + sport); }

canPlay() ```;


Exercise - Closure
Try writing your first closure. Write a function called printName and declare inside it a variable called helloName, the value of this variable will be: "Hello John". Also declare a function named inner and return the helloName variable. The purpose is printing "Hello John" in the console.


Exercise - Closure
Write a new closure: create a function called multiplyByTwo that takes is one parameter. Inside the multiplyByTwo function, create a function called inner. This function will take care of multiplying the parameter passed as input by the variable named number Print in the console the function output.

function multiplyByTwo(value) {
  let number = 2;
//....

}


Exercise - Value VS Reference
In the code below we have an object literal called user tha has two properties: name and age. If we try to create a newUser starting from user and, after that, we try to change the name, you'll notice that even the original user has been modified. How can we modify the name of newUser without changing the name of user?

let user = {
name: "Cosimo",
age: 30,
};

let newUser = user;

newUser.name = "Paolo";

console.log(newUser);
console.log(user);



Exercise - Object Functions
Do you know any other way to copy the user object without changing its properties?

let user = {
  name: "Matteo",
  age: 30,
};

let newUser = user;

newUser.name = "Paolo";

console.log(newUser);
console.log(user);


Exercise - Constructor Functions
Create a constructor function called Smartphone that takes in 3 parameters: brand,name, price. To create an object from a constructor function, we use the new keyword. Create two different objects.



Exercise - Array
Given the following array:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Print the first element of the array.
Print the last element of the array.
Print the array length.
Print the twentieth element of the array and explain the output.


Exercise - Array
Given the following array:

const students = [
{ id: 1, name: "Luca", surname: "Rossi", age: 20 },
{ id: 2, name: "Mario", surname: "Bianchi", age: 24 },
{ id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];
Print all the elements of the array.

Exercise - Array Methods
Given the following array:

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

Remove the element Giovanni.
Add a new element called Pippo at the end of the array.
Add the element Giovanni to the beginning of the array.


Exercise - Array Methods
Given the following array:

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

Add a hyphen after each element of the array. The output should something like this: Luca-Marco-Vittorio-Giovanni

Exercise - Array Methods Advanced
Create a function called adultFilter that takes in an array of people and returns the ones who are of age.

  function adultFilter(persons) {
  // ...
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);


Exercise - Array Methods Advanced
Create a function called nicknameMap that takes in an array of people and returns an array of nicknames. The nickname should be composed in this way: <name>-<age>.

Example:

{ name: 'Paul', age: 21 } => Paul-21

Exercise - Array Methods Advanced
Create a function called ageAverage that takes in an array of people and returns the average age.

function calculateAverageAge(persons) {
  // ...
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);



Exercise - Array Methods Advanced
Create a function called uncompletedNotes that returns only not completed todos.

function uncompletedNotes(notes) {
  // ...
}

const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];

uncompletedNotes(notes);