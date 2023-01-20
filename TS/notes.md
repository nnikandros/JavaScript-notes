# Functions

- TypeScript Optional Parameter

Sometimes we would like to skip providing values to function calls.
We can declare some parameters in a function to be optional if a value is not provided for all arguments in a function.
We do this by adding a question mark symbol, `?`, after the parameter name before the colon, `:`.


```js
function greet(name?: string) {
  console.log(`Hello, ${ name || 'stranger' }!`);
}

greet(); // Prints: Hello, stranger!
```

-  Inferring Return Types

By looking at the types of the values in a function’s return statement, TypeScript can infer the return type of a function.
```js
function factOrFiction() {
  return Math.random() >= .5 ? 'true' : 'false';
}

const myAnswer : boolean = factOrFiction(); // Type 'string' is not assignable to type 'boolean'
```

-  Explicit Return Types

We can be explicit about what type a function returns by adding type annotation (: followed by the type) after a function’s closing parenthesis, ).

```js
function trueOrFalse(value: boolean): boolean {
  if (value) {
    return true;
  }

  return 'false'; // Typescript Error: Type 'string' is not assignable to type 'boolean'.
}
```

# Complex types

- Arrays

The TypeScript type annotation for array types is fairly straightforward: we put [] after the element type. In this code, names is an Array that can only contain strings:

`let names: string[] = ['Danny', 'Samantha'];`

or

`let names: Array<string> = ['Danny', 'Samantha'];`

- Tuples

Tuples have **fixed length**

```js
let mytuple : [number, number] = [1,2]
mytuple[2] = 3 // error
```

`let dogTup: [string, string, string, string] = ['dog', 'brown fur', 'curly tail', 'sad eyes'];`

`dogTup` is a tuple hence we cannot add more stuff. To make it into array use do

```js
let myArr = dogTup.concat("");
myArr[50] = "not a dog"
console.log(myArr);
```js


- Rest parameters

```js
function smush(firstString, ...otherStrings: string[]){
  /*rest of function*/
}
```

- Enums

[Enums type](https://www.typescriptlang.org/docs/handbook/enums.html)

- Type Aliases


```js
let aCompany: { 
  companyName: string, 
  boss: { name: string, age: number }, 
  employees: { name: string, age: number }[], 
  employeeOfTheMonth: { name: string, age: number },  
  moneyEarned: number
};
```
We can simplify the above by doind the following

```js
type Person = {name:string, age:number}
let aCompany: {
  companyName: string, 
  boss: Person, 
  employees: Person[], 
  employeeOfTheMonth: Person,  
  moneyEarned: number
};
```




