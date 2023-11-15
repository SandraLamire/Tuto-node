// API https://weatherstack.com/

require('dotenv').config({ path: '../TUTO-NODE/.env' });
const apiKey = process.env.MY_WEATHER_API;

const parameters = {
    access_key: apiKey,
    query: "Rennes",
    units: "m",
    lang: "fr"          // non utilisé car renvoie : TypeError: Cannot read properties of undefined (reading 'name')
}

// fetch(`http://api.weatherstack.com/current?access_key=${parameters.access_key}&query=${parameters.query}&units=${parameters.units}&language=${parameters.lang}`)
fetch(`http://api.weatherstack.com/current?access_key=${parameters.access_key}&query=${parameters.query}&units=${parameters.units}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const { current, location, request } = data;
        console.log(`The city is ${location.name}. The country is ${location.country}. The current temperature ${current.temperature}°, The feeling is ${current.feelslike}°C and the weather is ${current.weather_descriptions[0]}.`);
    })
    .catch(error => console.error(error));