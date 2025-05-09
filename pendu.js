/* Jour 7 exercice : créer un pendu */
/* 
 📝 Consignes :
1.Crée un tableau de mots (au moins 5) que le programme pourra choisir aléatoirement.

2.Écris une fonction qui :
choisit un mot aléatoire depuis ce tableau.
masque ce mot en ne laissant visibles que la première et la dernière lettre (les autres lettres sont remplacées par des _).

3.Demande à l’utilisateur de proposer une lettre (en boucle) :
S’il propose une lettre déjà devinée, affiche un message d’erreur.
S’il propose une mauvaise lettre, réduis le nombre de tentatives restantes.
S’il propose une bonne lettre, elle s'affiche à toutes les bonnes positions dans le mot.

4.Le jeu continue jusqu’à ce que :
Le mot soit entièrement dévoilé (victoire).
Ou que le nombre de tentatives atteigne zéro (défaite).

5.À la fin de la partie, demande à l’utilisateur s’il veut rejouer.

🔧 Contraintes techniques à respecter :
Utilise des fonctions pour organiser ton code (choisirMot, masquerMot, verifierLettre, etc.).
Utiise une boucle while ou for pour gérer les tours de jeu.
Utilise un tableau pour stocker les lettres devinées. */

// fonction qui permet de choisir un mot au hasard dans un tableau
function choisirMot(){ 

    let words =["Albatros", "Ecurueil", "Ornithorynque", "Cétacés", "Félins", "Tortue", "Gorille"];
    let randomWord = words[Math.floor(Math.random()* words.length)];
    return randomWord;

}
// afficher partiellement le mot de choisirMot() en affichant la première et dernière lettre
function motCaché(motaleatoire){ 

    let hiddenWord = [];

    for (let i = 0; i < motaleatoire.length; i++){ 

        if (i === 0 || i === motaleatoire.length - 1){ 
            hiddenWord.push(motaleatoire[i]);
        } else {
            hiddenWord.push("_");
        }
    }
    return hiddenWord;
}

let mot = choisirMot();
let motDeviner = motCaché(mot);
console.log(motDeviner);