# Functions

- TypeScript Optional Parameter

```js
function greet(name?: string) {
  console.log(`Hello, ${ name || 'stranger' }!`);
}

greet(); // Prints: Hello, stranger!
```