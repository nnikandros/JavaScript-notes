const EventEmitter = require("events");
const emitter = new EventEmitter();

var url = "http://mylogger.io/log";

function log(message) {
  //send an http request
  console.log(message);
  //Raise an event. Now we added an event argument
  emitter.emit("messageLogged", { id: 1, url: "http://" });
}

module.exports = log;
// module.exports.url = url;

// console.log(module);
