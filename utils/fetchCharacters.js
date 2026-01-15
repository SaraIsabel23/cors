const axios   = require("axios");
const urlBase = "https://rickandmortyapi.com/api/character";


async function fetchCharacters(name = null) {
    try{
        const url = name ? `${urlBase}/?name=${name}` : urlBase
        const response = await axios.get(url)
        console.log(response.data.results)
        return response.data.results
    } catch(error) {
        console.error.apply(error)
        return{error: `character not found ${error}`}
    }
}

module.exports = fetchCharacters