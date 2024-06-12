const express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello From the Backend!");
});

module.exports = router;
