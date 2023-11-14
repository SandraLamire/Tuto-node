// npm install = npm i
// Installer module Chalk : changer les couleurs du terminal
// Installer une version spécifique (4.1.2) et seulement pour le dev
// nmp install chalk@4.1.2 -D

// Ajouter "type": "module", au dessus des dépendances dans package.json pour utiliser import au lieu de require
const chalk = require("chalk");

const log = console.log;

// Combine styled and normal strings
log(chalk.blue("Hello") + 'World' + chalk.red('!'));


log(chalk.bgRed("Erreur!"));                     // background rouge
log(chalk.green.bold("Succès!"));                // écrit en gras et vert
log(chalk.yellow.underline("Avertissement!"));   // écrit en jaune et souligné

// Installer globalement Nodemon pour redémarrer automatiquement l'appli après modif du code
// npm i nodemon -g 
// Si erreurs à l'install de Nodemon, regarder FAQ Nodemon



