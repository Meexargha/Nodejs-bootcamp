const express = require("express");
const app = express();
const db = require("./db");

app.use(express.json()); // middleware from express

const Person = require("./models/Person");

app.get("/", (req, res) => {
  res.send("welcome to my hotel");
});

// POST route to add person
app.post("/person", async (req, res) => {
  try {
    const data = req.body;

    // Create a new person document
    const newPerson = new Person(data); // <-- FIXED

    // Save the new person to the database
    const savedPerson = await newPerson.save();

    console.log("Data saved successfully");
    res.status(200).json(savedPerson);
  } catch (error) {
    console.error("Error saving person:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/chicken", (req, res) => {
  res.send("sure bro, I would love to serve chicken");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
