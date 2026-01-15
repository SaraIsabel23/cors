const express = require("express");
const axios   = require("axios");
const cors    = require("cors");
const app     = express();
const PORT    = 3000;

app.use(cors());


app.get("/characters", async (req, res) => {
    const url = "https://rickandmortyapi.com/api/character"
    try {
        response = await axios.get(url)
        res.json(response.data)

    } catch(error) {
        res.status(404).json({error: "Error al obtener los personajes"})
    }
});

app.get("/characters/:name", async (req, res) => {
    const name = req.params.name
    const url  = `https://rickandmortyapi.com/api/character/?name=${name}`

    try {
        const response = await axios.get(url)
        const {name, status, species, gender, origin, image} = response.data

        res.json({name, status, species, gender, origin, image})
        
    }catch (ERROR) {
        res.status(404).json({Error: "Personaje no encontrado"})
    }
})

app.listen(PORT, () => console.log(`El puerto está escuchando en el puerto http://localhost:${PORT}`));
