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
```
    slice(start, end)
    substring(start, end)
    substr(start, length)
```


# Array Methods

```js
 myArray.push(-) // puts the element at the end of the array ( .append() )
 myArray.pop() // is used to pop a value off of the end of an array.
 myArray.shift() // It works just like .pop(), except it removes the first element instead of the last.
 myArray.unshift() // works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
myArray.includes(x) // Boolean return x is an entry in the array
```




# Functions






Use the Conditional (Ternary) Operator

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
```
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}```

Example : 
```
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal"
}
checkEqual(1, 2); // -> "Not Equal
```
