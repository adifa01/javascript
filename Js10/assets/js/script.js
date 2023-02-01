// Saisir la taille du tableau
let taille = prompt("Veuillez saisir la taille du tableau :");

// Initialisation du tableau
let tableau = [];

// Boucle pour remplir le tableau avec les valeurs entrées par l'utilisateur
for (let i = 0; i < taille; i++) {
  tableau[i] = prompt("Veuillez saisir la valeur n°" + (i+1) + " :");
}

// Contenu du tableau
document.write("Contenu du tableau : [ " + tableau.join(", ") + " ]");




































































