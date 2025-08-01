const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/hotels";
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
     useUnifiedTopology:true //thsis is important to connect with the url for connection new mongodb version 
})

const db = mongoose.connection; // Monitor or manage the connection between your app and MongoDB. bridge to connect node and mongodb 



//define event listnner for database connection 
db.on("connected", () => {
  console.log("✅ MongoDB connected successfully!");
});

// Listen for disconnection
db.on('disconnected', () => {
  console.log('❌ MongoDB disconnected!');
});

// Listen for errors
db.on('error', (err) => {
  console.error('⚠️ MongoDB connection error:', err);
});


//export the databse connection 
module.exports =db;