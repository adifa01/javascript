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
var nom = document.formulaireContact.nom;
var prenom = document.formulaireContact.prenom;
var dateNaissance = document.formulaireContact.dateNaissance;
var codePostal = document.formulaireContact.codePostal;
var adresse = document.formulaireContact.adresse;
var ville = document.formulaireContact.ville;
var email = document.formulaireContact.email;
var sujet = document.formulaireContact.sujet;
var message = document.formulaireContact.message;
var conditions = document.formulaireContact.conditions;
if(nom.value == ""){
  nom.nextElementSibling.style.display = "block";
  nom.style.border = "1px solid #f00";
  return false
}else{
  nom.nextElementSibling.style.display = "none";
  nom.style.border = "1px solid transparent";
}
if(prenom.value == ""){
  prenom.nextElementSibling.style.display = "block";
  prenom.style.border = "1px solid #f00";
  return false
}else{
  prenom.nextElementSibling.style.display = "none";
  prenom.style.border = "1px solid transparent";
}
if(dateNaissance.value == ""){
  dateNaissance.nextElementSibling.style.display = "block";
  dateNaissance.style.border = "1px solid #f00";
  return false
}else{
  dateNaissance.nextElementSibling.style.display = "none";
  dateNaissance.style.border = "1px solid transparent";
}
if(codePostal.value == ""){
  codePostal.nextElementSibling.style.display = "block";
  codePostal.style.border = "1px solid #f00";
  return false
}else{
  codePostal.nextElementSibling.style.display = "none";
  codePostal.style.border = "1px solid transparent";
}
if(!adresse.value.match(/^\(?([0-9]{1})\)?([0-9]{9})$/) || adresse.value == ""){
  adresse.nextElementSibling.style.display = "block";
  adresse.style.border = "1px solid #f00";
  return false
}else{
  adresse.nextElementSibling.style.display = "none";
  adresse.style.border = "1px solid transparent";
}
if(ville.value == ""){
  ville.nextElementSibling.style.display = "block";
  ville.style.border = "1px solid #f00";
  return false
}else{
  ville.nextElementSibling.style.display = "none";
  ville.style.border = "1px solid transparent";
}
if(!email.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) || email.value == ""){
  email.nextElementSibling.style.display = "block";
  email.style.border = "1px solid #f00";
  return false
}else{
  email.nextElementSibling.style.display = "none";
  email.style.border = "1px solid transparent";
}
if(sujet.value == ""){
sujet.nextElementSibling.style.display = "block";
sujet.style.border = "1px solid #f00";
return false
}else{
sujet.nextElementSibling.style.display = "none";
sujet.style.border = "1px solid transparent";
}
if(message.value == ""){
message.nextElementSibling.style.display = "block";
message.style.border = "1px solid #f00";
return false
}else{
message.nextElementSibling.style.display = "none";
message.style.border = "1px solid transparent";
}
if(conditions.checked == false){
conditions.nextElementSibling.style.display = "block";
conditions.style.border = "1px solid #f00";
return false
}else{
conditions.nextElementSibling.style.display = "none";
conditions.style.border = "1px solid transparent";
}

function validateButton(button, regex) {
if (!button.value.match(regex) || button.value === "") {
button.nextElementSibling.style.display = "block";
button.style.border = "1px solid #f00";
return false;
} else {
button.nextElementSibling.style.display = "none";
button.style.border = "1px solid transparent";
return true;
}
}