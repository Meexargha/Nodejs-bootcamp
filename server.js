const express = require("express");
const app = express();
const db = require("./db"); // exported the databse with server

app.use(express.json()); // middleware from express
//const MenuItem = require("./models/menu");

const Person = require("./models/Person");

app.get("/", (req, res) => {
  res.send("welcome to my hotel");
});

// POST route to add person  from client to server
app.post("/person", async (req, res) => {
  //console.log("POST /person hit"); // check if route is hit

  try {
    const data = req.body; // data taken from req.body done by body parser
    const newPerson = new Person(data); //data filed by client data

    const savedPerson = await newPerson.save();
    console.log("Saved Person:", savedPerson);
    res.status(200).json(savedPerson);
  } catch (error) {
    console.error("❌ Error occurred:", error); // full error object
    res.status(500).json({ error: error.message || "Unknown error" });
  }
});

// get method to get the person we nedd data from database
app.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data fatched ");
    res.status(200).json(data);
  } catch (error) {
    console.error("Error saving person:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/chicken", (req, res) => {
  res.send("sure bro, I would love to serve chicken");
});
//psot method to add menu items -- post is use to add

//paramertized api
app.get("/person/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; //  in worktype we fetched the type of work as :worktype
    if (workType == "Chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("response fetched ");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "invalid work type " });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
