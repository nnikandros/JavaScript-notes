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