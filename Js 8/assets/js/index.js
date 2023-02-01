// Exo1 
var cpt = 1;

for (let i = 0; i < 1; ++i){
    console.log("Olivier:  "+cpt);
    cpt++;
    console.log("Damien: "+cpt);
    cpt++;
    console.log("Paul : "+cpt);
    cpt++;
}



// Exo2
var N = prompt("Entrez un nombre inférieur à N");
var txt = N;
var inf =N;

do 
{
   inf --;
   var txt = txt+", "+inf;
   
} while (inf > 0);

alert(txt);


//Exo3 

var sum = 0;
var count = 0;
let input;

do {
  input = parseInt(prompt("Saisissez un entier (0 pour arrêter) :"));
  if (input !== 0) {
    sum += input;
    count++;
  }
} while (input !== 0);

if (count > 0) {
  alert("Somme : " + sum);
  alert("Moyenne : " + (sum / count));
} else {
  console.log("Aucun nombre saisi");
}
/* Juste à titre de rappel pour moi même j'utilise la boucle "do-while" pour demander à l'utilisateur de saisir des entiers
 jusqu'à ce qu'il saisisse la valeur 0. La variable "sum" est utilisée pour stocker la somme des entiers saisis, et la variable "count" 
 est utilisée pour compter le nombre d'entiers saisis.*/

// EXO4
var N = prompt("Choisir un nombre positif non nul","");
var y = prompt("Combien de multiples de ce nombre ?","");

var i =0;
var txt =" ";

do 
{
   i++;
   var mul = i*N;
   var pop = i+" x "+N+" = "+mul;
   var txt = txt+"\n"+pop;

} while (i < y);

alert(txt);


//Exo5


var word = prompt("Saisir un mot :");
var count = 0;
var vowels = "aeiouy";

for (var i = 0; i < word.length; i++) {

    if (vowels.indexOf(word[i]) !== -1) {
        
        count++;
    }
}

alert("Le mot " + word + " contient " + count + " voyelles.");


