/* Exercice : le juste nombre */

/* 🎯 Objectif :
L’utilisateur doit deviner un nombre aléatoire choisi par l’ordinateur. Il reçoit des indices ("trop grand", "trop petit") jusqu’à trouver la bonne réponse ou épuiser ses tentatives.

📝 Consignes :
Le programme choisit un nombre aléatoire entre 1 et 100 (ou 1 et 50 si tu préfères une version plus simple).
L’utilisateur a un nombre limité de tentatives (par exemple 7).

À chaque tentative :
L’utilisateur entre un nombre.

Le programme indique si le nombre est :
Trop grand
Trop petit
Juste

Si la réponse est juste : victoire 🎉
Si les tentatives sont épuisées : défaite 😢
À la fin de la partie, demande si l'utilisateur veut rejouer.

Gère les erreurs (si l’utilisateur entre autre chose qu’un nombre, ou un nombre hors des limites).
🔧 Contraintes techniques :
Utilise des fonctions (ex: genererNombre, verifierProposition, rejouer, etc.)
Utilise une boucle (while ou for) pour gérer le déroulement des tentatives.
Stocke les propositions de l’utilisateur dans un tableau pour :
Lui interdire de rejouer le même chiffre.
Lui rappeler ses essais précédents si tu veux aller plus loin.

Optionnel : Affiche le nombre de tentatives restantes.

✨ Bonus (si tu veux aller plus loin) :
Ajoute un niveau de difficulté (facile : 10 tentatives, difficile : 5, etc.)
Ajoute un score ou un système de high score. */

/* -------------- Algorithmie pour réussir à concevoir ce jeu -------------------- */
// 1. Créer une fonction pour générer un nombre aléatoire entre 1 et 100 => utilisation de Math.random 
// 2. Créer une fonction de vérification de la proposition => tableau.includes ou if (tableau[i] === answer) et stocker les propositions faites pour l'empêcher de les rejouer ou de lui rappeler ce qu'il a fait. 
// 3. Créer une fonction rejouer tant que le nombre de proposition n'est pas épuisé 
// 4. Définir un nombre limite de tentatives en créant une variable et en stockant 7. 


/* Création d'une fonction générant un nombre aléatoire compris entre 1 et 100 */

function numberHard(){
    let attempts = 7;
    let attemptsPlayed = 0;
    let numbersTried = [];

    randomNumber = Math.floor(Math.random()*100 + 1);
    return randomNumber;
}
function numberMedium(){
    let attempts = 10;
    let attemptsPlayed = 0;
    let numbersTried = [];

    randomNumber = Math.floor(math.random() * 70 + 1);
    return randomNumber;
}
function numberEasy(){
    let attempts = 10;
    let attemptsPlayed = 0;
    let numbersTried = [];

    randomNumber = Math.floor(math.random() * 50 + 1);
    return randomNumber;
}

/* Lancement d'une partie */ 

let jouer = "oui";

while (jouer.toLowerCase() === "oui") {
    // On demande au joueur quel niveau de difficulté il veut en fonction de sa réponse on modifie le nombre d'essai et l'interval du nombre mystère.
    let level = prompt("Quel niveau de difficulté voulez-vous : facile, moyen, difficile ?").toLowerCase();
    
    // Si la réponse du joueur est facile on appelle la fonction numberEasy : 

    if (level === "facile"){
        numberEasy();
    } else if (level === "medium"){
        numberMedium();
    } else if (level === "difficile"){
        numberHard();
    }
    //On initialise les conditions qui permettent au joueur d'effectuer des tentatives
    while(attempts > 0){

         let guess = parseInt(prompt("Essayez de deviner le nombre mystère entre 1 et 100"));

        // Limitation des erreurs de réponses avant de comptabiliser une partie
        if (isNaN(guess)) {
            alert(`Il faut rentrer impérativement des chiffres et non des lettres ! ${guess} n'est pas un chiffre.`);
        } else if (guess < 1 || guess > 100){
            alert("Le nombre saisi n'est pas compris entre 1 et 100 inclus.");
        } else if (numbersTried.includes(guess)){
            alert (`Vous avez déjà essayé le nombre "${guess}". Essayez un autre nombre.`)
            let attemptsTried = prompt("Voulez-vous voir la liste des numéros que vous avez déjà essayé ?").toLowerCase();
            if(attemptsTried === "oui"){
                alert(`Voici les numéros que vous avez déjà essayé : ${numbersTried}.`);
            }  
        // On définit le comportement en fonction des réponses du joueur.
        } else {      
            if(guess > randomNumber){
               attempts --;
               attemptsPlayed ++;
               numbersTried.push(guess);        
               alert(`C'est moins que "${guess}". Il vous reste encore ${attempts} tentatives.`);

                if (attempts === 0){
                    alert(`Vous avez perdu ! Le bon nombre était : ${randomNumber}.`)
                    jouer = prompt("Voulez-vous rejouer une partie ?").toLowerCase();
                }

            } else if (guess < randomNumber){
                attempts --;
                attemptsPlayed ++;
                numbersTried.push(guess);
                alert(`C'est plus que "${guess}". Il vous reste encore ${attempts} tentatives.`)

                 if (attempts === 0){
                    alert(`Vous avez perdu ! Le bon nombre était : ${randomNumber}.`)
                    jouer = prompt("Voulez-vous rejouer une partie ?").toLowerCase();
                }
                
            } else {
                alert (`Vous avez trouvé le bon nombre en ${attemptsPlayed} tentatives ! `)
                jouer = prompt("Voulez-vous rejouer une partie ?").toLowerCase();
            }
        }
    }
}

