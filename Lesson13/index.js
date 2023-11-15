// Créer son propre serveur web avec Express
// npm i express
const express = require("express");
const app = express();
const port = 3000;      // port 80 en prod, 3000 en dev

// Page racine
app.get("/", (req, res) => {
    // Affiche Racine sur la page
    res.send("<h1>Racine</h1>");
});

// Page about
app.get("/about", (req, res) => {
    // Affiche About sur la page
    // res.send("About");
    // Mais peut aussi renvoyer du JSON
    res.send({
        "name": "Sandra",
        "age": "? ans"
    })
});

// Permettre de lancer le serveur web
app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
})

// Lancer ensuite l'app avec node Lesson13/index.js
// Aller sur localhost:3000 pour voir la page racine
// localhost:3000/about pour voir la page About
