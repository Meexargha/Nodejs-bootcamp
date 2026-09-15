const mongoose = require('mongoose');


//define the persons schema  
 
//note
/*A schema is like a blueprint or structure for your data in MongoDB.
It tells Mongoose how a particular type of document should look  */

 const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
            type: Number,


    },
    work:{
        type: String,
        enum: ['Chef', 'waiter', 'manager'],
        required : true
    },
    mobile:{
        type: String,
        required: true,

    },
    email:{
        type:String,
        required: true,
        unique: true

    },
    address:{
        type: String,
    },
    salary:{
        type: Number,
        required: true
    }

 });


 //create person
const Person = mongoose.model("Person", personSchema);
module.exports = Person;
