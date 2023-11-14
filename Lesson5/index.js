// Installer 2 modules (parseurs) pour récupérer l'input de l'utilisateur
// npm i yargs minimist 

// 3 façons de récupérer des arguments :

// 1 - Récupération des arguments via Node
const { argv } = require("process");

// console.log(process.argv); + node index.js Sandra
// renvoie un tableau avec Sandra en 3ème argument
// = const options = argv[2]; 
const options = argv[2];

if (options === "foo") {
    console.log("foo");
} else if (options === "bar") {
    console.log("bar");
} else {
    console.log("default");
}
// si saisie node index.js foo dans la console => renvoie foo, si bar => renvoie bar, si autre => renvoie default


// 2 - avec Parser minimist
const argv2 = require("minimist")(process.argv.slice(2));
// Si saisie node index.js -n Sandra -a 45
console.log(argv2);     // renvoie un objet : { _: [], n: 'Sandra', a: 45 }
console.log(argv2.n);   // Sandra
console.log(argv2.a);   // 45
// Si nom composé : node index.js -name="Sandra L" -a 45
// + console.log(argv2.name);



// 3 - avec Parser Yargs
const argv3 = require("yargs/yargs")(process.argv.slice(2))
    .usage('Usage: $0 <command> [options]')
    .command('count', 'Count the lines in a file')
    .example('$0 count -f foo.js', 'count the lines in the given file')
    .alias('f', 'file')
    .nargs('f', 1)
    .describe('f', 'Load a file')
    .demandOption(['f'])
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2019')
    .argv;

const fs = require('fs');
const s = fs.createReadStream(argv3.file);

let lines = 0;
s.on('data', function (buf){
    lines += buf.toString().match(/\n/g).length;
});

s.on('end', function() {
    console.log(lines);
})
// node index.js affiche toutes ces commandes/options
// node index.js count -f index.js donne le nombre de lignes dans index.js

