const express = require("express");
const router = express.Router();

router.get("/rng", (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100);
    res.json(randomNumber);
});

router.get("/time", (req, res) => {
    const date = new Date();
    res.json(date)
});

module.exports = router;