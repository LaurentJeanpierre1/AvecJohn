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

    let words = ["Albatros", "Ecureuil", "Ornithorynque", "Cétacés", "Félins", "Tortue", "Gorille"];
    let selectWord = words[Math.floor(Math.random() * words.length)];
    return selectWord;

}

function motTrou (motaleatoire){

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

function affichageMot (motatrou){
    console.log(motatrou.join(" "));
}

let tentativesRestantes = 7;
let motaTrouver = choisirMot();
let motaTrou = motTrou(motaTrouver);

function vérifierLettre (proposition){

    let propositionsFaites = [];
    let trouvé = false;

    while(tentativesRestantes > 0 && motaTrouver !== proposition){

        let proposition = prompt("Proposez une lettre.").toLowerCase();

        if(!/^[a-z]$/.test(proposition)){
            alert(`"${proposition}" n'est pas une lettre. Veuillez saisir une lettre.`);
        } else if (propositionsFaites.includes(proposition) && !motaTrou.includes(proposition)){
            alert(`Vous avez déjà proposé la lettre "${proposition}" et elle ne fait pas partie du mot à deviner !`)
        } else if (propositionsFaites.includes(proposition)){
            alert (`Vous avez déjà deviné la lettre ${proposition}. Veuillez saisir une autre lettre.`);
        } else {

            for (let i = 0; i < motaTrouver.length; i++){
                
                if (proposition === motaTrouver[i]){
                    motaTrou[i] = proposition; 
                    trouvé = true; 
                }   
            }     
            if (trouvé){
                alert(`"${proposition}" est une bonne réponse !`)
            } else {
                tentativesRestantes--;
                alert (`Mauvaise réponse  : "${proposition} ne fait pas partie du mot. Il vous reste ${tentativesRestantes} pour trouver !`)
            }      
            propositionsFaites.push(proposition);
            affichageMot(motaTrou);        
         }      
    }

}





/* Tant que l'utilisateur à des tentatives restantes :  */

// Demander à l'utilisateur une proposition
// si la proposition est un chiffre : afficher un message d'erreur
// si la proposition est une lettre déjà devinée : afficher un message d'erreur
// si la proposition est une lettre fausse et déjà proposée : afficher un message d'erreur

/* Si aucune la proposition ne remplit aucune des conditions ci-dessus :  */

// Si la proposition n'est pas bonne => afficher un message + décompter une tentative + stocker cette proposition dans les propositions déjà faites.
// Si la proposition est bonne => afficher un message + stocker la proposition dans les propositions déjà faites + ajouter la lettre devinée
