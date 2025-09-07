const express = require("express");
const router = express.Router();
router.get("/person/:workType", async (req, res) => {
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

    app.post("/person", async (req, res) => {
      //console.log("POST /person hit"); // check if route is hit

      try {
        const data = req.body; // data taken from req.body done by body parser
        const newPerson = new Person(data); //data filed by client data

        const savedPerson = await newPerson.save();
        console.log("Saved Person:", savedPerson);
        res.status(200).json(savedPerson);
      } catch (error) {
        console.error("Error occurred:", error); // full error object
        res.status(500).json({ error: error.message || "Unknown error" });
      }
    });
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
