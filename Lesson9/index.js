// Utilisation d'API pour récupérer des images de chats et chiens
// API Chien: https://thedogapi.com => request = https://api.thedogapi.com/v1/images/search
// API Chat: https://thecatapi.com => request = https://api.thecatapi.com/v1/images/search


// npm i postman-request
const req = require("postman-request");

// Nécessite une clé API
// req("https://api.thedogapi.com/v1/images/search", (error, response, body) => {
//     const dogPicture = JSON.parse(body);
//     console.log(dogPicture.message);
//     console.log(dogPicture.status);
// })


// Pas de clé API nécessaire
req("https://api.thecatapi.com/v1/images/search", (error, response, body) => {
    const catPicture = JSON.parse(body);
    console.log(catPicture[0].url);
})

