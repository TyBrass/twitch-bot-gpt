"use strict";

const express = require("express");
const path = require("path");
const app = express();
const runBot = require("./bot");

// ==== Serve the frontend ====
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.use((req, res) => {
    res.status(200).send("Hello, world!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// ==== Run the bot ====
runBot();
