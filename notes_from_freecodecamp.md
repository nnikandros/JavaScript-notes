something to change :)

# Introduction 

```js
i++ is the equivalent to 
i = i+1 or i+=1 (Python)

i-- is te equivalent to
i = i-1 or i-=1 (Python)
```

`\" \" to escape from considering as a string`

```
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	word boundary
\f	form feed

```


# String Methods

```js
let name = "Nikitas";
name.length;
```
In order to get the last letter of a string, you can subtract one from the string's length. For example, if const firstName = "Ada", you can get the value of the last letter of the string by using firstName[firstName.length - 1]. (Like python)

```js
string.toLowerCase()
"NIKITAS".toLowerCase()// ->  "nikitas" 


string.toUpperCase()
"nikitas".toUpperCase() // -> "NIKITAS"

```
Extracting String Parts

There are 3 methods for extracting a part of a string:
```js
slice(start, end)
substring(start, end)
substr(start, length)
```


# Array Methods

-Basic methods of putting and removing items

`myArray.push(-)` puts the element at the end of the array ( .append() )
```js
var x = [0,0,0] ;
x.push(1,2,3,4)  // [1,2,3,4,0,0,0]
```

```js
myArray.pop() //  its used to pop a value off of the end of an array.
myArray.shift() // It works just like .pop(), except it removes the first element instead of the last.
var x = [1,2,3,4];
x.shift() // [2,3,4]
```

 `myArray.unshift()` works exactly like `.push()`, but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
```js
let x =[1,2,4];
x.unshift(0) ;  // -> [0,1,2,4] 
```


`arr.includes(x)` // outputs true of false depnding where x is contained in arr

` let num =5 , num in x` // checks if the number 5 is an index in the array 

- `arr.splice()`

The method splice(-,-,-) has three parameters, The first parameter is the index that we start deleting and the second patamer indicates
 the number of elements to delete . For example
```js
let array = ["today", "was", "not", "so", "great"]
array.splice(2,2) // ["today", "was", "great"] deleted at index 2 and two entries.
```

Splice can be used to also add stuff
```js
let arr = [1,2,3,3,3,4,5,6];

arr.splice(0,2,"piko","tako") \\ ["piko", "tako", 3,3,...]
```

- `myArray.slice()`
Rather than modifying an array, slice() copies or extracts 
a given number of elements to a new array, leaving the array it is called upon untouched. 
Slice() takes two parameters, the first one is the index at which to begin the extraction, and the second
is the index at which to stop extraction, but not including the element at this index.

```js
let arr = ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']
let newarr = arr.slice(2,4); \\ [warm, sunny]
```

- `myArray.reverse()`
Self-explanatory

- Simple stuff using arrays

1. Finding how many times an elements occurs in an array

```js

var arr = [2, 3, 1, 3, 4, 5, 3, 1];

function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}
```

Or equivalently
```js

arr.filter(x => x === SearchValue).length; // filter gives an array with all the elements in arr with the condition that the function x => x === SearchValue is true. Then .length counts the length of the array. 
```








# Functions

- Returning Boolean Values from Functions

You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.

Sometimes people use an if/else statement to do a comparison, like this:
```js
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```

But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:
```js
function isEqual(a, b) {
  return a === b;
}
```






## Use of the Conditional (Ternary) Operator

The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is `a ? b : c`, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.
```js
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
```

This can be re-written using the conditional operator:
```js
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
```

Example : 
```js
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal"
}
checkEqual(1, 2); // -> "Not Equal
```

## Multiple ternary operator

Consider the following function:
```js
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

The above function can be re-written using multiple conditional operators:
```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
```

Another example:
```js
function checkSign(num) {
  return (num > 0)? "positive"
  : (num == 0) ? "zero"
  : "negative";
}
```

## Arrow functions

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}

const magic = () => new Date(); 
magic();

const myConcat = (arr1,arr2) => arr1.concat(arr2); 

console.log(myConcat([1, 2], [3, 4, 5]));
```

# Objects (JSON) aka dictionaries
```js
const myDog= {
name: "Fritz",
legs: 4,
tails:1
}
```
access with `myDog.name` or `myDog["name"]`. Even if key was "name"
still we acess it with ``myDog.name`. If the key value has empty spaces or to be used 
as variable you *have* to use `myDog[name]`

-Checking if a key exists in a JSON

Sometimes it is useful to check if the property (key) of a given object (dict) exists or not. We can use the `.hasOwnProperty(propname)` method of objects to determine if that object has the given property name. `.hasOwnProperty()` returns `true` or `false` if the property is found or not.

Example
```js
const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top"); // return true
myObj.hasOwnProperty("middle"); //return false
```
Equivalently we can use the `in`  keyword
` "top" in myObj ` 

## Prevent Object Mutation 

As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function `Object.freeze` to prevent data mutation.

Any attempt at changing the object will be rejected, *with an error thrown if the script is running in strict mode.*
```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
```

The `obj.review` and `obj.newProp` assignments will result in errors, because our editor runs in strict mode by default, and the console will display the value { name: "FreeCodeCamp", review: "Awesome" }.

Works with arrays also.

```js
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS)

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```


# Loops 

- for loops

```js
const ourArray = [];
for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
```

Silly way to iterate though an array:
```js
let x=[1,3,5,6,7]
for (let i=0; i< x.length; i++){
	console.log(x[i]);
}
```
There are much better ways to do this.

Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. In this case the last iteration is i === 4 i.e. when i becomes equal to arr.length - 1 and outputs 6 to the console. Then i increases to 5, and the loop terminates because i < arr.length is false.

- do.... while
The next type of loop you will learn is called a do...while loop. It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.
```js
const ourArray = [];
let i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

# Random numbers

`Math.random()` gives a random number in [0,1)

`Math.floor(Math.random() * 20); // retarted way to make a random integer between [0,19)`

`Math.floor(Math.random() * (myMax - myMin + 1) + myMin); Random whole number betten myMin and myMax inclusive`

# parseInt()

the parseInt() function parses a string and returns an integer. Here's an example:

`const a = parseInt("007");`

The above function converts the string 007 to the integer 7. If the first character in the string can't be converted into a number, then it returns NaN.

parseInt(,) has second variable
And here's an example:

`const a = parseInt("11", 2);`

The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.

`parseInt("1A",16)`






# Rest parameter and Spread Operator

## Use the Rest Parameter with Function Parameters

In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

Check out this code:
```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```
The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..

The rest parameter eliminates the need to check the args array and allows us to apply `map()`, `filter()` and `reduce()` on the parameters array.
```js
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
```

## Spread operator

ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```
maximus would have a value of 89.
```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line
console.log(arr2);
```

- Another use of the spread operator
```js
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander']; 

thatArray // ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
```





# Destructuring

Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

Consider the following ES5 code:
```
const user = { name: 'John Doe', age: 34 };
const name = user.name;
const age = user.age;
```js

`name` would have a value of the string John Doe, and age would have the number 34.

Here's an equivalent assignment statement using the ES6 destructuring syntax:

`const { name, age } = user;`

IT creates two variables name and age with name = "John Doe" and age = 23

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today ,tomorrow } = HIGH_TEMPERATURES;
console.log(today) // 77
console.log(tomorrow) // 80
```

## array destructiring
```js
// we have an array with the name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith
```
To extract the valew from an array we can do the following:
```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

a // 1
b // 2
```
and using commas 
```js
[a,b,,,c]

a //1
b// 2
c // 2
```

Lastly we can Destructure arrays via spread (...)
```js
const [a,b, ...arr] = [1,2,3,4,5,6];
a //1
b// 2
arr [3,4,5,6]
```

Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

Using the same object from the last example:

`const user = { name: 'John Doe', age: 34 };`

Here's how you can give new variable names in the assignment:

`const { name: userName, age: userAge } = user;`

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const {today: highToday, tomorrow:highTomorrow} = HIGH_TEMPERATURES

console.log(highToday) // 77
console.log(highTomorrow) // 80
```
## Use Destructuring Assignment to Assign Variables from Nested Objects

You can use the same principles from the previous two lessons to destructure values from nested objects.

Using an object similar to previous examples:
```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

Here's how to extract the values of object properties and assign them to variables with the same name:

`const { johnDoe: { age, email }} = user;`

again here 
```js
console.log(age) ; // 34
console.log(email) ; // johnDoe@....
```
And here's how you can assign an object properties' values to variables with different names:
```js
const { johnDoe: { age: userAge, email: userEmail }} = user;

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const {today:{low:lowToday, high:highToday } } = LOCAL_FORECAST;

const {today:{low:lowtoday, high:hightoday }, tomorrow:{low:lowtom, high:hightom}  }=  LOCAL_FORECAST

console.log(lowtoday) // 64
console.log(hightoday) // 77
```


## Use Destructuring Assignment to Pass an Object as a Function's Parameters

When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.
```js
const profileUpdate = ({ name, age, nationality, location }) => {
//code here

}
```


Example: 
```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max,min}) => (max + min) / 2.0; 
```

## Write Concise Declarative Functions with ES6 (inside Objects)

When defining functions within objects in ES5, we have to use the keyword function as follows:
```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```
With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:
```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
```

# Export, Import

Imagine a file called math_functions.js that contains several functions related to mathematical operations. One of them is stored in a variable, add, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to export it.
```js
export const add = (x, y) => {
  return x + y;
}
```
The above is a common way to export a single function, but you can achieve the same thing like this:
```js
const add = (x, y) => {
  return x + y;
}

export { add }; // exporting multiple functions
```

When you export a variable or function, you can import it in another file and use it without having to rewrite the code. You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example, like this:
`export { add, subtract };`



import allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported add from the math_functions.js file. Here's how you can import it to use in another file:
import { add } from './math_functions.js';

Here, import will find add in math_functions.js, import just that function for you to use, and ignore the rest. The ./ tells the import to look for the math_functions.js file in the same folder as the current file. The relative file path (./) and file extension (.js) are required when using import in this way.
You can import more than one item from the file by adding them in the import statement like this:
import { add, subtract } from './math_functions.js';

## Use * to import everything from a module

Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the import * as syntax. Here's an example where the contents of a file named math_functions.js are imported into a file in the same directory:
import * as myMathModule from "./math_functions.js";

The above import statement will create an object called myMathModule. This is just a variable name, you can name it anything. The object will contain all of the exports from math_functions.js in it, so you can access the functions like you would any other object property.


# Create a Javascript Promise 

A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. 
When the task completes, you either fulfill your promise or fail to do so. 
Promise is a constructor function, so you need to use the new keyword to create one. 
It takes a function, as its argument, with two parameters - resolve and reject. 
These are methods used to determine the outcome of the promise. The syntax looks like this:
```js
const myPromise = new Promise((resolve, reject) => {
	\\ code here
});
```

## Complete a promise with resolve and reject

A promise has three states: *pending, fulfilled, and rejected*. 
The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. 
The resolve and reject parameters given to the promise argument are used to do this. 
resolve is used when you want your promise to succeed, and reject is used when you want it to fail. 
These are methods that take an argument, as seen below.

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) { //For example some request is successful
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

The example above uses strings for the argument of these functions, but it can really be anything. 
Often, it might be an object, that you would use data from, to put on your website or elsewhere

## Handle a fulfilled promise with then

Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), 
often a server request. When you make a server request it takes some amount of time, 
and after it completes you usually want to do something with the response from the server.
 This can be achieved by using the then method. 
The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:
```js
myPromise.then(result => {
	\\ code here  
});
```
result comes from the argument given to the resolve method.
```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
    makeServerRequest.then(result => console.log(result) );
  } else {  
    reject("Data not received");
  }
});
```
## Handle a Rejected Promise with catch

catch is the method used when your promise has been rejected. 
It is executed immediately after a promise's reject method is called. Here’s the syntax:
```js
myPromise.catch(error => {
  \\ code here
});
```



