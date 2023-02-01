
//EXO1
var num = window.prompt("Donnez un nombre : ");
if (num % 2 == 0) {
    alert("Nombre est pair")
}
else {
    alert("Nombre est impair")
}

//EXO
// Année en cours
const currentYear = new Date().getFullYear();
// On demande à l'utilisateur son année de naissance
const birthYear = prompt("En quelle année êtes-vous né ?");
// je calcule l'age de l'utilisateur
const age = currentYear - birthYear;
// Je determine s'il est adulte (18 ans ou plus)
const isAdult = age >= 18;
// J'affiche l'âge de l'utilisateur et s'il est majeur
document.write(`Vous avez  ${age} ans.`);
document.write(`Vous êtes ${isAdult ? "un majeur" : "un mineur"}.`);


//EXO3

var num1 = parseInt(prompt("Entrez le premier nombre entier:"));
var num2 = parseInt(prompt("Entrez le deuxième nombre entier:"));
// la saisie de l'opérateur
var operator = prompt("Entrez l'opérateur (+, -, *, /):");
//la variable pour stocker le résultat
var result;
// Opération à saisir en fonction de l'opérateur 
switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        // Je prévois le cas de la division par 0
        if (num2 === 0) {
            alert("Erreur: division par 0");
        } else {
            result = num1 / num2;
        }
        break;
    default:
        // Un message d'erreur si l'opérateur est incorrect
        alert("Erreur: opérateur incorrect");
}
// Ici résultat si l'opération a été effectuée avec succès
if (result !== undefined) {
    alert("Résultat: " + result);
}