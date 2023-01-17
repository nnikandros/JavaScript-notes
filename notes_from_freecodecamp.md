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

```js
 myArray.push(-) // puts the element at the end of the array ( .append() )
 myArray.pop() // is used to pop a value off of the end of an array.
//Example :
let x = [1,2,3]
x.pop()

let z= x.pop() // z has the value of 3

 myArray.shift() // It works just like .pop(), except it removes the first element instead of the last.
 myArray.unshift() // works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
myArray.includes(x) // Boolean return x is an entry in the array
```




# Functions






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




