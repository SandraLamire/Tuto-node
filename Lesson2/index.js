// Lesson 1 = présentation et installation Node.js

const fs = require("fs");

// readFileSync = lire le contenu d'un fichier
// writeFileSync = écrire un fichier avec un contenu
// Lancer le programme dans la cosole = node index.js

// fs.writeFileSync("test.txt", "Mon premier fichier")

// cls pour effacer la console
fs.writeFileSync("test.txt", "Mon second fichier");
console.log("Le fichier test.txt a été crée!");

// const fileContent = fs.readFileSync("test.txt");
// console.log(fileContent);
// renvoie un buffer car encoding non spécifié

const fileContent = fs.readFileSync("test.txt", "utf8");
console.log(fileContent);
// Le fichier test.txt a été crée!
// Mon second fichier




