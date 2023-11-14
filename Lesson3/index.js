// Importer toutes les fonctions dans module.exports depuis functions.js
const f = require("./functions");
const { chain } = require("mathjs");

// Importer une seule fonction
// const { multiply } = require("./functions")

// Importer plusieurs fonctions
// const { multiply, divide } = require("./functions")

console.log(f.multiply(5, 2));
console.log(f.divide(10, 2));

// Utilisation npm : 
// npm init pour initialiser nmp sur le projet (créer fichier package.json)
// Installation package math et ses dépendances dans node_modules : npm i mathjs
// Les dépendances d'un module installés sont visibles dans package-lock.json

console.log(chain(5)
    .add(5)
    .multiply(2)
    .divide(20)
    .done())
// (5 + 5) * 2 / 20 = 1

// Désinstaller un module :
// npm uninstall mathjs





