function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}


// Nécessité d'exporter la fonction pour la rendre disponible pour d'autres fichiers
module.exports = {
    multiply,
    divide
}

