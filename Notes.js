1. Alert
alert is a simple pop-up box that displays a message to the user.

javascript
Copy code
alert('This is an alert box!');




2. Console.log
console.log() is used for debugging, and it outputs messages to the browser's console.

javascript
Copy code
console.log('Hello, Console!');



3. Prompt
prompt() is used to take input from the user. It shows an input box where the user can type something.

javascript
Copy code
let name = prompt('What is your name?');
console.log('Your name is: ' + name);




4. Confirm
confirm() displays a dialog box with "OK" and "Cancel" buttons. It returns a boolean value.

javascript
Copy code
let answer = confirm('Are you sure?');
console.log(answer); // true if OK, false if Cancel




5. JS Variables, Data Types, and Objects (key
)
Variables: Declared using var, let, or const.
Data Types: string, number, boolean, object, array, etc.
Objects: Collections of key-value pairs.
javascript
Copy code
let myName = 'Sujal'; // String
let myAge = 21; // Number
let isStudent = true; // Boolean

let person = {
    name: 'Sujal',
    age: 21,
    profession: 'Student'
};

console.log(person.name); // 'Sujal'




6. typeof, let vs const vs var
typeof: Used to determine the type of a variable.
let: Block-scoped variable, can be reassigned.
const: Block-scoped, cannot be reassigned.
var: Function-scoped, can be reassigned (older syntax).
javascript
Copy code
let age = 21;
const name = 'Sujal';
var country = 'India';

console.log(typeof age); // 'number'
console.log(typeof name); // 'string'
console.log(typeof country); // 'string'





7. If-Else, Else-If Ladder
Conditional statements to execute code based on conditions.

javascript
Copy code
let num = 10;

if (num > 10) {
    console.log('Greater than 10');
} else if (num === 10) {
    console.log('Equal to 10');
} else {
    console.log('Less than 10');
}








8. Ternary Operator
A compact way to write conditional statements.

javascript
Copy code
let a = 5;
let b = 10;
let result = a > b ? (a - b) : (b - a);
console.log(result); // 5







9. Loops
Different types of loops to iterate over data.

For Loop:
javascript
Copy code
for (let i = 0; i < 5; i++) {
    console.log(i);
}
For-In Loop:
Used for iterating over properties of an object.
javascript
Copy code
let obj = { name: 'Sujal', age: 21 };
for (let key in obj) {
    console.log(key + ': ' + obj[key]);
}
For-Of Loop:
Used for iterating over iterable objects like arrays.
javascript
Copy code
let arr = [10, 20, 30];
for (let value of arr) {
    console.log(value);
}
While Loop:
javascript
Copy code
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
Do-While Loop:
javascript
Copy code
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);









10. Functions and Return
Functions are blocks of code designed to perform a particular task.

javascript
Copy code
function add(a, b) {
    return a + b;
}

console.log(add(5, 10)); // 15
11. Arrow Functions
A shorter syntax to write functions.

javascript
Copy code
const add = (a, b) => a + b;
console.log(add(5, 10)); // 15







12. Strings
Template Literals:
Allows embedded expressions.
javascript
Copy code
let name = 'Sujal';
let greeting = `Hello, ${name}!`;
console.log(greeting); // 'Hello, Sujal!'
Escape Sequence:
Used to include special characters in a string.
javascript
Copy code
let text = 'He said, \"Hello!\"';
console.log(text); // 'He said, "Hello!"'
Slice:
Extracts a part of a string.
javascript
Copy code
let str = 'Hello, World!';
let result = str.slice(0, 5);
console.log(result); // 'Hello'
Replace:
Replaces a part of a string.
javascript
Copy code
let str = 'Hello, World!';
let newStr = str.replace('World', 'Sujal');
console.log(newStr); // 'Hello, Sujal!'









13. Immutability
Strings in JavaScript are immutable, meaning once created, their content cannot be changed. Operations on strings return new strings.

javascript
Copy code
let str = 'Hello';
str[0] = 'J'; // This will not change the string
console.log(str); // 'Hello'