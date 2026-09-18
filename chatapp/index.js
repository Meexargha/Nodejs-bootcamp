import chatroom from "../chatapp/chatRoom.js";

const chat = new chatroom();

chat.on("join", (user) => {
  console.log(`${user} has joined the chat`);
});

chat.on("message", (user, message) => {
  console.log(`${user}: ${message}`);
});

chat.on("leave", (user) => {
  console.log(`${user} has left the chat`);
});

// Simulation
chat.join("Rahul");
chat.join("Priya");

chat.sendMessage("Rahul", "Hello everyone!");
chat.sendMessage("Priya", "Hi Rahul!");

chat.leave("Rahul");

chat.sendMessage("Rahul", "Can I still send messages?");
