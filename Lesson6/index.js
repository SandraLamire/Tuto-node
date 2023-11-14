const { readFileSync, writeFileSync } = require("fs");

// Transformer du JSON en objet :
const jsonToObject = JSON.parse(readFileSync('./data.json', 'utf8'));

console.log(jsonToObject);      // { name: 'Sandra', age: 45, legal: true }
console.log(jsonToObject.name); // Sandra
console.log(jsonToObject.age);  // 45
console.log(jsonToObject.legal);// true 

// pour ne récupérer que le nom et l'âge par exemple (legal alors non disponible = undefined)
const { name, age } = JSON.parse(readFileSync('./data.json', 'utf8'));
console.log(name);              // Sandra
console.log(age);               // 45

// Créer un objet
const myData = {
    name: "Gigi",
    age: 69,
    legal: true
}

const objectToJson = JSON.stringify(myData);
console.log(objectToJson);      // {"name":"Gigi","age":69,"legal":true}
// Sauvegarder ce nouvel object dans un fichier :
writeFileSync('./myData.json', objectToJson);
// Formater avec clic droit + formatter dans le nouveau fichier json

// Utiliser les 2 fonctions simultanéement
// Importer myData2.json (copie de myData.json), le tranformer en objet js, le modifier, le retransformer en JSON et le renvoyer dans myData
const myData2 = JSON.parse(readFileSync('./myData2.json', 'utf8'));
console.log(myData2);            // { name: 'Gigi', age: 69, legal: true }
myData2.name = "JP";
const objectToJson2 = JSON.stringify(myData2);
writeFileSync('./myData2.json', objectToJson2);
// myData2.json contient maintenant {"name":"JP","age":69,"legal":true}





