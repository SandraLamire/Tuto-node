// Utilisation d'API pour récupérer des images de chats et chiens
// API Chien: https://thedogapi.com => request = https://api.thedogapi.com/v1/images/search
// API Chat: https://thecatapi.com => request = https://api.thecatapi.com/v1/images/search
// Run l'appli avec node Lesson9/index.js

require('dotenv').config({ path: '../TUTO-NODE/.env' });
// npm i postman-request
const req = require('postman-request');
const apiKey = process.env.MY_DOG_API_KEY;

// Nécessite une clé API
// npm install dotenv
// Vérifier si la clé API est définie
if (!apiKey) {
    console.error('La clé API pour The Dog API n\'est pas définie.');
    process.exit(1);
  }
  
  // Utiliser la clé API dans la requête
  req(`https://api.thedogapi.com/v1/images/search?api_key=${apiKey}`, (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }
    const dogPicture = JSON.parse(body);
    console.log(dogPicture[0].url);
  });


// Pas de clé API nécessaire
req("https://api.thecatapi.com/v1/images/search", (error, response, body) => {
    const catPicture = JSON.parse(body);
    console.log("URL image de chat:", catPicture[0].url);
})

