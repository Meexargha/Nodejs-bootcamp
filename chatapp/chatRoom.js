import EventEmitter from "node:events";

class chatroom extends EventEmitter {
  //A constructor is a special method that automatically runs when you create an object using new.
  constructor() {
    // Because your class inherits from EventEmitter so we need to have initialize the parent class
    super();
    //set which stores unique value thsi reffer to the current object
    this.users = new Set();
  }
  // users is the set 
  join(user) {
    this.users.add(user);
    this.emit("join", user);
  }
  sendMessage(user, messsage) {
    if (this.users.has(user)) {
      this.emit("message", user, messsage);
    } else {
      console.log(`${user}is not allowed`);
    }
  }
  leave(user) {
    if (this.users.has(user)) {
        this.users.delete(user)
        this.emit("leave",user)
           
    }else{
    console.log('user not in the chat')

            }
    }
}

export default chatroom

