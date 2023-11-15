// API https://weatherstack.com/

require('dotenv').config({ path: '../TUTO-NODE/.env' });
const apiKey = process.env.MY_WEATHER_API;

const parameters = {
    access_key: apiKey,
    query: "Rennes",
    units: "m",
}

// fetch(`http://api.weatherstack.com/current?access_key=${parameters.access_key}&query=${parameters.query}&units=${parameters.units}&language=${parameters.lang}`)
fetch(`http://api.weatherstack.com/current?access_key=${parameters.access_key}&query=${parameters.query}&units=${parameters.units}`)
    .then(res => res.json())
    .then(data => {
        if(data.success === false) {
            console.log(`Error ${data.error.code}: ${data.error.info}`)     
            // renvoie Error 101: You have not supplied an API Access Key. [Required format: access_key=YOUR_ACCESS_KEY] si access_key invalide
            // renvoie Error 601: Please specify a valid location identifier using the query parameter si query vide
            // renvoie Error 606: You have specified an invalid unit. Please try again or refer to our API documentation si mauvaise units
        } else {
            // console.log(data);
            const { current, location, request } = data;
            console.log(`WITHOUT CALLBACK:\nThe city is ${location.name}. The country is ${location.country}. The current temperature ${current.temperature}°C, The feeling is ${current.feelslike}°C and the weather is ${current.weather_descriptions[0]}.\n`);
        }
        
    })
    .catch(error => console.error(error));

// ################################################################################################################################################################################################
// Données de plusieurs villes grâce à une callback :

const weather = (location, unit, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${parameters.access_key}&query=${encodeURIComponent(location)}&units=${unit}`
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if(data.success === false) {
                // Callback (err, data) = renvoie l'erreur ou les datas
                // ici undefined = datas
                callback(`Impossible de renvoyer vos informations. Error ${data.error.code}: ${data.error.info}`, undefined) 
            } else {
                const { current, location, request } = data;
                // ici undefined = error
                callback(undefined, `The city is ${location.name}. The country is ${location.country}. The current temperature ${current.temperature}°C, The feeling is ${current.feelslike}°C and the weather is ${current.weather_descriptions[0]}.\n`);
            }
        });
}

weather("Rennes", "m", (err, data) => {
    console.log("WITH CALLBACK: ");
    console.log("Erreur:", err);
    console.log("Data:", data);
});
weather("Paris", "m", (err, data) => {
    console.log("WITH CALLBACK: ");
    console.log("Erreur:", err);
    console.log("Data:", data);
});

weather("New York", "m", (err, data) => {
    console.log("WITH CALLBACK: ");
    console.log("Erreur:", err);
    console.log("Data:", data);
});