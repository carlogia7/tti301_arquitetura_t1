const axios = require("axios");

require('dotenv').config();
const appid = process.env.API_WEATHER;


// ITEM 1
async function item_1(q) {
    const cnt = 1;
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=${cnt}&appid=${appid}`;

    const response = await axios.get(url);
    if (response.data && response.data.length > 0) {
        const { lat, lon } = response.data[0]; 
        console.log(`ITEM A: lat: ${lat}, lon: ${lon}`);
        return { lat, lon }; 
    } else {
        console.log(`${q} não foi encontrada`)
        return { lat: null, lon: null};
    }
}

// ITEM 2
async function item_2(lat, lon) {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=metric`; 

    try {
        const response = await axios.get(url);
        const feelsLike = response.data.main.feels_like;
        const description = response.data.weather[0].description;
        return `ITEM B: A sensação térmica é ${feelsLike}°C e o tempo está ${description}`;
    } catch (error) {
        return `Erro ao buscar a sensação térmica: ${error.message}`;
    }
}

// função principal
async function getWeatherInfo(city) {
    const result = await item_1(city);
    if (result.lat && result.lon) {
        const feelsLike = await item_2(result.lat, result.lon);
        console.log(feelsLike);
    } else if (result.message) {
        console.log(result.message); 
    }
}

getWeatherInfo("Rio de Janeiro");
