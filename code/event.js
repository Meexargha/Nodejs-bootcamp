const EventEmitter = require("node:events");

const myEmitter = new EventEmitter();

// event is used to listen to the event and it will listen to the event multiple times
myEmitter.on("event", (username) => {
  console.log("hello " + username + ", a baby event occurred!");
});

// once event is used to listen to the event only once and after that it will not listen to the event again
myEmitter.once("onceEvent", (username) => {
  console.log("hello " + username + ", a once event occurred!");
});
myEmitter.emit("event","baddy");
myEmitter.emit("onceEvent","baddy");
myEmitter.emit("onceEvent")


const myListener = ()=>{
    console.log("heyyyyyy baddy, a listener event occurred!");
}
myEmitter.on("listenerEvent", myListener);
myEmitter.emit("listenerEvent");
myEmitter.removeListener("listenerEvent", myListener);
myEmitter.emit("listenerEvent");