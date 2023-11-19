// ATTENTION: THIS IS CODE FROM THE YOUTUBE CRASH COURSE. IT IS NOT MEANT TO RUN, IT IS JUST FOR LEARNING PURPOSES //

// LOGGING OUTPUT
// alert('Hello World'); // Do not use for debugging. Stops script and only strings
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');


// VARIABLES - var, let, const
let age = 30;

// let can be re-assigned, const can not
age = 31;


// DATA TYPES - String, Number, Boolean, null, undefined
const name = 'Brad';
const cAge = 37;
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined

// Check type
console.log(typeof z);


// STRINGS

// Concatenation
console.log('My name is ' + name + ' and I am ' + cAge);
// Template String (better)
console.log(`My name is ${name} and I am ${cAge}`);

// String methods & properties
const s = 'Hello World';
let val;
// Get length
val = s.length;
// Change case
val = s.toUpperCase();
val = s.toLowerCase();
// Get sub string
val = s.substring(0, 5);
// Split into array
val = s.split('');

// Split using a ', ' separator
const str = 'technology, computers, it, code';
console.log(str.split(', '));



// ARRAYS - Store multiple values in a variable
const numbers = [1,2,3,4,5];
const fruits = ['apples', 'oranges', 'pears', 'grapes'];
console.log(numbers, fruits);

// Arrays cannot be reassigned - the following sentence raises a runtime error
// numbers = []

// Arrays can hold multiple data types
const arr = ['apples', 'oranges', 'pears', 10, true];
console.log(arr)

// Get one value - Arrays start at 0
console.log(fruits[1]);

// Add value
fruits[4] = 'blueberries';

// Add value using push()
fruits.push('strawberries');

// Add to beginning
fruits.unshift('mangos');

// Remove last value
fruits.pop();

// // Check if array
console.log(Array.isArray(fruits));

// // Get index
console.log(fruits.indexOf('oranges'));



// OBJECT LITERALS
const person = {
  firstName: 'John',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  }
}

// Get single value
console.log(person.firstName)

// Get array value
console.log(person.hobbies[1]);

// Get embedded object
console.log(person.address.city);

// ES6 Feature - destructuring
const { firstName, lastName, address: { city }} = person;

console.log(firstName);

// Add property
person.email = 'jdoe@gmail.com';

// Array of objects
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isComplete: false
  },
  {
    id: 2,
    text: 'Dinner with wife',
    isComplete: false
  },
  {
    id: 3,
    text: 'Meeting with boss',
    isComplete: true
  }
];

// Get specific object value
console.log(todos[1].text);

// Format as JSON
console.log(JSON.stringify(todos));


// LOOPS

// For
for(let i = 0; i <= 10; i++){
  console.log(`For Loop Number: ${i}`);
}

// While
let i = 0
while(i <= 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

// Loop Through Arrays
// For Loop
for(let i = 0; i < todos.length; i++){
  console.log(` Todo ${i + 1}: ${todos[i].text}`);
}

// For...of Loop
for(let todo of todos) {
  console.log(todo.text);
}



// HIGH ORDER ARRAY METHODS (show prototype)

// forEach() - Loops through array
todos.forEach(function(todo) {
  console.log(todo.text);
});

// map() - Loop through and create new array
const todoTextArray = todos.map(function(todo) {
  return todo.text;
});

console.log(todoTextArray);

// filter() - Returns array based on condition
const todo1 = todos.filter(function(todo) {
  // Return only todos where id is 1
  return todo.id === 1; 
});

const todoCompleted = todos.filter(function(todo) {
  return todo.isComplete == true;
}).map(function(todo) {
  return todo.text;
})

console.log(todoCompleted);



// CONDITIONALS

// Simple If/Else Statement
const ie = 30;

// '==' compares only values. '===' compares also data types. So ie == '30' is true, but ie === '30' is false.

if(ie === 10) {
  console.log('ie is 10');
} else if(ie > 10) {
  console.log('ie is greater than 10');
} else {
  console.log('ie is less than 10')
}

const w = 4;
const q = 11;

if ( w > 5 || q > 10 ) {
  console.log('w is more than 5 or q is more than 10');
}



// Ternary operator / Shorthand if
color = 'blue';

const colorNum = color === 'red' ? 10 : 20;



// Switch
switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:  
    console.log('color is not red or blue');
    break;
}



// FUNCTIONS
function addNums(num1 = 1, num2 = 1)
{
  return num1 + num2;
}

console.log(addNums(5, 5));

function greet(greeting = 'Hello', name) {
  if(!name) {
    // console.log(greeting);
    return greeting;
  } else {
    // console.log(`${greeting} ${name}`);
    return `${greeting} ${name}`;
  }
}

console.log(greet('Hi'));



// ES6 - ARROW FUNCTIONS

// /* Same as above */
// const addNums = (num1 = 1, num2 = 1) => {
//   return num1 + num2;
// }

// console.log(addNums(5, 5));

// const addNums = num1 => num1 + num2;
// console.log(addNums(5, 5));

const es6Greet = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;



// OOP

// Constructor Function
function Person(firstName, lastName, dob) {
  // Set object properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); // Set to actual date object using Date constructor
  // this.getBirthYear = function(){
  //   return this.dob.getFullYear();
  // }
  // this.getFullName = function() {
  //   return `${this.firstName} ${this.lastName}`
  // }
}

// Prototypes(better)

// Get Birth Year
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
}

// Get Full Name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}


// Instantiate an object from the class
const person1 = new Person('John', 'Doe', '7-8-80');
const person2 = new Person('Steve', 'Smith', '8-2-90');

console.log(person2);


console.log(person1.getBirthYear());
console.log(person1.getFullName());


// Built in constructors
const personName = new String('Kevin');
console.log(typeof personName); // Shows 'Object'
const num = new Number(5);
console.log(typeof num); // Shows 'Object'


// ES6 CLASSES - syntactic sugar(better than prototypes)
class ES6Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  // Get Birth Year
  getBirthYear() {
    return this.dob.getFullYear();
  }

  // Get Full Name
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const es6Person = new ES6Person('John', 'Doe', '7-8-80');
console.log(person1.getBirthYear());

// Window - a global object variable
console.log(window);

//pops up an alert message
// alert(1);



// ELEMENT SELECTORS

// Single Element Selectors
console.log(document.getElementById('my-form'));
const form = document.getElementById('my-form');
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));


// For each
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));



// MANIPULATING THE DOM
// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';



// EVENTS

// Mouse Event
// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(e.target.className);
//   document.querySelector('#my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark');
//   // document.querySelector('.items').lastElementChild.innerHTML = '<h1>Changed</h1>';
// });

// Keyboard Event
// const nameInput = document.querySelector('#name');
// nameInput.addEventListener('input', e => {
//   document.querySelector('.container').append(nameInput.value);
// });



// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const domNameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if (domNameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');

    // Adding a message (better)
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${domNameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    domNameInput.value = '';
    emailInput.value = '';
  }
}