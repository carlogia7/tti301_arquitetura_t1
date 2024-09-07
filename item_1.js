require('dotenv').config();
const appid = process.env.API_WEATHER;

const axios = require("axios");

// ITEM 1
async function item_1(q) {
    const cnt = 1;
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=${cnt}&appid=${appid}`;

    const response = await axios.get(url);
    if (response.data && response.data.length > 0) {
        const { lat, lon } = response.data[0]; 
        console.log(`As coordenadas de ${q} são: lat: ${lat}, lon: ${lon}`);
        return { lat, lon }; 
    } else { 
        console.log(`${q} não foi encontrada`)
        return { lat: null, lon: null};
    }
}



item_1("Rio de Janeiro");