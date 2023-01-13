# Chapter 1

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






## Use the Conditional (Ternary) Operator

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

# Destructuring