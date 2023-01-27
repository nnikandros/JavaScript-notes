# Useful modules

1. os
2. fs
3. events
4. http
5.

# Modules

module is not a global object.
`console.log(module)`

WIll output an object like this

```js
Module {
  id: '.',
  path: 'C:\\Users\\nnika\\mygit\\javascript-notes\\mosh-notes',
  exports: {},
  filename: 'C:\\Users\\nnika\\mygit\\javascript-notes\\mosh-notes\\mosh-node.js',
  loaded: false,
  children: [],
  paths: []}
```

one of the properties is the exports. Anything we add to exports will be exported from this module and it will be available out of this module.

We could export a function named `log` by and a constant variable with a string `url` as follows

```js
module.exports.log = log;
module.exports.url = url;
```

We could rename it like `module.exports.piko = log`.

To load a module we call

```js
const logger = require("./logger"); // node assumes this is .js and adds the ext automatically.
```

If we `console.log(module)` we wil see that we have put on the exports property a key: value pair. Key is log and the value if the function it self.

To call a module :

```js
const logger = require("./logger"); // import the module

logger.log("message"); // will output "message"
```

We might want to export a single function/string whatever rather than an _object_ i.e. many stuff. In this case we can export a single function called log by

```js
module.exports = log;
```

So we set the exports value to be the function itself, rather than a key:value pair with the `module.exports.log= log ` way. In this way instead of calling the function

```js
logger.log("message"); // we are acessing the property log of the logger module which is a function

log("message");
```

## Wrapper

node wraps the module in a function , the module wrapper function
`(function(exports,require, module, __filename,__dirname){}  )`

exports is a shorthand for module.exports
So we can write `exports.log = log ` instead of `module.exports.log=log`. **But** we can not write `exports = log`!.

```js
console.log(__filename);
console.log(__dirname);
```

Will output the filename and the directory name.

# Path module

- path.parse

```js
const path = require("path");

const pathObj = path.parse(__filename);

console.log(pathObj);
```

This will output an object like this

```js
{
  root: 'c:\\',
  dir: 'c:\\Users\\nnika\\MyGit\\JavaScript-notes\\mosh-notes',
  base: 'mosh-node.js',
  ext: '.js',
  name: 'mosh-node'
}
```

so w can access them string as normal, `pathObj.root` etc...

# fs module- file system

- Sychronous way aka blocking

```js
const files = fs.readdirSync("./");

console.log(files);
```

will output the names of the files in an array of strings

- Asynch way

`fs.readdir` has now two arguments. the path and a callbck function

```js
fs.readdir("./", (err, files) => {
  if (err) console.log(`Error: ${err}`); //
  else console.log(`Result:${files}`);
});
```

Always prefer Asynch methods.

# os module - operating system

- `var total = os.totalmem();` //total memory

- `var free = os.freemem();` // free memort

# Events module

```js
const EventEmitter = require("events"); //import the Class EventEmitter

const emitter = new EventEmitter(); //create a new instance of the class EventEmitter

//register a listener

emitter.on("messageLogged", () => console.log(`listener called`)); //same as emitter.addListener

//Raise an event
emitter.emit("messageLogged");
```

After this we script will output the message `listener called`.
Here we have a function- a listener- that was waiting for someone to emit `messageLogged`. when we raised an event - we emitted something the callback function was called.
Order is important here:
If we had `emitter.emit()` before the `emitter.on` nothing would happen.

## event arguments

`emitter.emit("messageLogged", {id:1, url:"http://"});`

The callback function of `emitter.on("messageLogged, function(){})  ` has access to the event arguments, so we could write ``emitter.on("messageLogged, function(arg){})  `

# http module

```js
const http = require("http");
const server = http.createServer();
```

# Notes from REST API and Express.js

to add nodemon on put on `package.json ` these

```js
"scripts": {
    "start": "node restapitutorial",
    "dev": "nodemon restapitutorial"}
```

## hello world for express

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => console.log(`listening on port 3000`));
```

Adding the following:

```js
app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});
```

So when we enter `http://localhost:3000/api/course/`, the server responds to the get request by sending a list `[1,2,3]`

Usin the enviroment variable:
`const port = process.env.PORT || 3000;`

We can `set PORT = 5000` to change the port dynamically

# Reading parameters

[req.params](https://expressjs.com/en/4x/api.html#req.params)

This property is an object containing properties mapped to the named route “parameters”.
For example, if you have the route /user/:name, then the “name” property is available as req.params.name. This object defaults to {}.

Suppose we make a request with a paramter `:id`

```js
app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});
```

the server will respond my sending the `id` it self. Essential the identity function. `htttp://localhost:3000/api/courses/malakas` will return `malakas`. If we do
`res.send(req.params)` it would send the object `{"id": id }` where `id` is whatever we pass

Suppose we had two parameters for example we make a request `"api/posts/:year/:month"`. So

```js
app.get("api/posts/:year/:month", (req, res) => {
  res.send(req.params); // just send the parameters. This will return an object
});
```

For example `"http:localhost:3000/posts/2018/1  "  ` the server will respond with the object `{year: 2018, month:1  }`. If we wanted to send just the year, that is, the value and not the whole object we could have set `res.send(req.params.year)`.
Similarly if we reqiested `"http:localhost:3000/posts/foo/bar` it would respond my sending the object `{year:"foo", month:"bar"}`.

# Reading queries

Making a query by putting a `?` at the end like `"http://localhost:3000/api/posts/2018/1?sortBy=name"`. The query parameters are stored in the Request object ,`req`
and to send back the query paramateres we need to pass `res.send(req.query)`.

Example :

```js
app.get("/api/:year/:month", (req, res) => res.send(req.query));
```

and requesting at `"http://localhost:3000/api/posts/2018/1?sortBy=name"` it would respond by sendin the object `{sortBy: name}`

# reading from a database

In real case scenario we would have a database

```js
const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === Number(req.params.id)); // find which element of the array courses has the property courses.id === req.params.id. parseInt is needed because req.params.id is a string.
  if (!course) {
    res.status(404).send("The course with the  given id was not found"); // if course is falsy, that is , does not exist, send status code 404 and a message
  }
  res.send(course);
});
```

# post requests

For example

```js
app.post("/api/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name, // the post request needs to have a name proprty in the body
  };
  courses.push(course);
  res.send(course);
});
```

For this to wrk it is essential the post request to have a "name" property in the body. The above will add the new course in the database and also send back to the user the info of the new course

Goin to postman and sending a post request with body `{"name": "newcourse"}`

# Input validation

before actually doing the above we could have some input validation. For example
if req.body.name is not given at all or it is smaller than 3 charachers. Other validations could be that it's not a string etc etc.
So before doind the above we could add the following

```js
app.post("/api/courses", (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    res
      .status(400)
      .send("Name is required and shoyld be minimum 3 charachers long");
    return; // to make sure to end the function early and the rest of the code doesnt run.
  } // then continue as above.
```

We could use `npm joi` for input validation
