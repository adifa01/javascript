//EXO1

let under20 = 0;
let over40 = 0;
let between20and40 = 0;

while (true) {
  let age = prompt("Entrez l'âge de la personne :");
  
  if (age >= 100) {
    // supérieur ou égal à 100, on arrête le comptage (vieillard)
    over40++;
    alert('Vous etes vieux')
    break;
  } else if (age < 20) {
    //inférieur à 20 ans
    under20++;
    alert('Vous etes jeune')
  } else if (age > 40) {
    //  supérieur à 40 ans
    over40++;
    alert('Vous etes senior')
  } else {
    //la catégorie "entre 20 et 40 ans"
    between20and40++;
    alert('Vous etes adulte')
  }
}

console.log("Personnes de moins de 20 ans : " + under20);
console.log("Personnes de plus de 40 ans : " + over40);
console.log("Personnes entre 20 et 40 ans : " + between20and40);


//EXO2

var N = parseInt(prompt("Choisir le chiffre de la table de multiplication",""));
function TableMultiplication(X) {
var i = 0;
var txt = "Table de "+N;

while (i < 5)
{
   i++;
   var mul = i*X;
   var pop = i+" x "+X+" = "+mul;
   var txt = txt+"\n"+pop;
}
return txt;
}
alert(TableMultiplication(N));


//EXO3

var tab = ["audrey", "aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"];
var nom = prompt("Saisissez un nom à rechercher:");
var found = false;

for (var i = 0; i < tab.length; i++) {
    if (tab[i] === nom) {
        found = true;
        for (var j = i; j < tab.length - 1; j++) {
            tab[j] = tab[j + 1];
        }
        tab[tab.length - 1] = "";
        break;
    }
}

if (!found) {
    alert("Nom introuvable .");
} else {
    console.log(tab);
    alert(" Super il est dans le tableau .");
}

//EXO4

// saisie des données
PU = (prompt("Entrez le prix unitaire : "))
QTECOM = (prompt("Entrez la quantité commandée : "))

// calcul du total
TOT = PU * QTECOM

// calcul de la remise
if (TOT >= 100 & TOT <= 200){
    REM = TOT * 0.05
}
 if (TOT > 200){
    REM = TOT * 0.1
}
else
    REM = 0

// calcul du prix remisé
TOT = TOT - REM

// calcul des frais de port
if (TOT > 500){
    PORT = 0
}else
    PORT = max(TOT * 0.02, 6)

// calcul du prix total à payer
var PAP = TOT + PORT
alert(PAP);



//EXO5 

// Verification de la formule

document.getElementById("user").addEventListener("input", function(){
var inputValue = this.value;
if(inputValue === ""){
document.getElementById("error").innerHTML = "Le nom est requis";
} else {
document.getElementById("error").innerHTML = "";
}
});



