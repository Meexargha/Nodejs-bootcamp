const eventEmitter = require('events');

class EventClass extends eventEmitter {
    SendMessgae(msg) {
        console.log("Message from EventClass: " + msg);
        this.emit('message', msg);
    }
}
const chat = new EventClass();
chat.on("message", (msg) => {
    console.log("Message received in chat: " + msg);
});

//triger
chat.SendMessgae("Hello, this is a test message!");
