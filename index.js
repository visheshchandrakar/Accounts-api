const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Account = require("./models/Account.model"); // Assuming the schema is saved in models/Account.model.js

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Backend API for Account Section 💻");
});

app.post("/account", async (req, res) => {
  try {
    const { email } = req.body;

    console.log("Checking email:", email);

    // Check if email already exists
    const existingAccount = await Account.findOne({ "contacts.email": email });
    console.log("Existing account:", existingAccount);

    if (existingAccount) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newAccount = new Account(req.body);
    await newAccount.save();
    res.status(201).send(newAccount);
  } catch (error) {
    console.error("Error creating account:", error); // Added error logging
    res.status(400).send({ message: "Failed to create account", error });
  }
});

mongoose
  .connect(
    "mongodb+srv://visheshchandrakar17:HL8lhzNxxau2KH7i@cluster0.dd6g1.mongodb.net/")
  .then(() => {
    console.log("Connected to database");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
