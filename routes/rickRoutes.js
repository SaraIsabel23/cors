const express = require("express");
const route   = express.Router();
const fetchCharacters = require("../utils/fetchCharacters")


route.get("/", async (req, res) => {
    const data = await fetchCharacters()
    res.json(data)
});

route.get("/:name", async (req, res) => {
    const name = req.params.name
    const data = await fetchCharacters(name)
    res.json(data)
});

module.exports = route