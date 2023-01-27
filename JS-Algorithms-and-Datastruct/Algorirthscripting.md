# Sum All Numbers in a Range

```js
function sumAll(arr) {
  return (arr[0]+arr[1]) * (Math.max(arr[0],arr[1])- Math.min(arr[0], arr[1]) +1  ) /2
}
```



///
```js
function sumAll(arr){
    let startingindex = Math.min(arr[0], arr[1]);
    let lastindex = Math.max(arr[0], arr[1]);
    let sum = 0
    for (let i = startingindex; i <= lastindex; i++  ){
        sum += i 
    }
    return sum ;
}
```

# Symmetric difference of Arrays.

My solution :
```js
function diffArray(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let symmetricdiffernce = []
    for (let element of set1) {
        if (!set2.has(element)) {
            symmetricdiffernce.push(element);
        }
    }
    for (element of set2) {
        if (!set1.has(element)) {
            symmetricdiffernce.push(element);
        }
    }
    return symmetricdiffernce
}
```

///
```js
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
```

///
```js
function diffArray(arr1, arr2) {
  const difference = new Set(arr1);
  arr2.forEach((ele) =>
    difference.has(ele) ? difference.delete(ele) : difference.add(ele)
  );
  return Array.from(difference);
}
```

# Seek and Destroy

```js
function destroyer(arr) {
    let numberofarguments = Object.keys(arguments).length // how many arguments we are putting in a function
    let listofrest = [] \\make a list of the arguments except the first one.
    for (let i = 1 ; i <= numberofarguments - 1; i++  ){
        listofrest.push(arguments[i]);
    }
    let filtered = arr.filter( (element) => !listofrest.includes(element)    ); //filter the argument
    return filtered;
}
```

///
```js
function destroyer(arr, ...valsToRemove) {  // use the spread operator to unpack the other arguments
  return arr.filter(elem => !valsToRemove.includes(elem));
}
```

# DNA Pairing

```js
function pairElement(str) {
  const pairs = {
    A:"T",
    T:"A",
    C:"G",
    G:"C"
  }
  let splited = str.split("")
  for (let index in splited){
    splited[index] = [splited[index], pairs[splited[index]]]
  }
  return splited;
}

// a bit more functiona and better
let splited = str.split("");
  return splited.map( n => [n,pairs[n]] ) 

pairElement("GCG");
```




