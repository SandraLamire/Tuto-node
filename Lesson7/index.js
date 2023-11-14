// Utiliser le débugger Node avec Chrome

const { readFileSync, writeFileSync } = require("fs");

const newData = {
    name: "Gigi",
    age: 69,
    legal: true
}

const objToJson = JSON.stringify(newData);
// Sauvegarder ce nouvel object dans un fichier :
writeFileSync('./myData.json', objToJson);
// Formater avec clic droit + formatter dans le nouveau fichier json

// Utiliser les 2 fonctions simultanéement
// Importer myData.json, le tranformer en objet js, le modifier, le retransformer en JSON et le renvoyer dans myData
const myData = JSON.parse(readFileSync('./myData.json', 'utf8'));

// Insérer une erreur : nane au lieu de name donc Gigi n'est plus remplacer par JP
myData.nane = "JP";
const objectToJson = JSON.stringify(myData);
writeFileSync('./myData.json', objectToJson);

// Solution n°1 : Ajout d'un console.log
// console.log(objectToJson);
// renvoie {"name":"Gigi","age":69,"legal":true,"nane":"JP"} donc l'erreur est visible ici

// Mot clé Node pour utiliser le debugger de Node (pas celui de VSCode) dans chrome :
debugger
// puis dans la console : node inspect .\index.js puis lancer chrome://inspect 
// puis selectionner inspect sous :
    // Target (v20.9.0)
    // trace
    // ._index.js
    // file:///C:/_Users_Sandra_OneDrive_Documents_Training_node_Tuto-node_Lesson7_index.js
// echap ouvre la console et on peut y saisir des variables pour obtenir leur contenu
// relancer le debugger en tapant restart derrière debug> dans la console de VSCode

console.log(myData.name);





