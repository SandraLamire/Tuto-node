// changer de dossier dans la console : cd ../TUTO-NODE/Lesson8

console.log("1");
console.log("2");
console.log("3");
// node index.js affiche 1 2 3

// ASYNCHRONICITE grâce à setTimeOut

console.log("1 - Je suis lancé de suite!");
// Si pas d'argument à passer dans la fonction = parenthèses vides (ou _) avant la =>
// 3000 = 3 secondes d'attente avant le callback
setTimeout(() => {
    console.log("2 - Et après 3 secondes, c'est moi qui suis exécuté!");
}, 3000)
console.log("3 - Après, c'est moi!");
// node index.js affiche 1 3 2

// ASYNCHRONICITE grâce à async/await (vu + tard)