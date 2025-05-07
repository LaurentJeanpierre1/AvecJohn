/* Jour 6 - 🎮 Mini jeu : Deviner le nombre */

/*Objectif : L’ordinateur choisit un nombre aléatoire entre 1 et 100. L’utilisateur doit le deviner.

🔧 Fonctionnalités à implémenter :
Générer un nombre aléatoire entre 1 et 100
Demander à l’utilisateur de proposer un nombre avec prompt().
Si le nombre est trop petit, afficher "C'est plus !".
Si le nombre est trop grand, afficher "C'est moins !".
Si le nombre est juste, afficher "Bravo ! Tu as trouvé en X tentatives."
Répéter jusqu’à ce que l’utilisateur trouve la bonne réponse.

🧠 Bonus si tu veux aller plus loin :
Limite à un certain nombre de tentatives (ex : 10 essais).
Affiche un message si l’utilisateur entre autre chose qu’un nombre.
Demander si l’utilisateur veut rejouer. */

let rejouer = "oui";

while (rejouer === "oui"){ // Comment se fait-il qu'en cas de mauvaise réponse dans la boucle (tentativesRestantes) on ne reparte pas d'ici car la condition est valide aussi ici ? 

    let randomNumber = Math.floor(Math.random() * 100 ) + 1; 
    let tentativesJouées = 0; 
    let tentativesRestantes = 10;   
    let userAnswer;

    while (tentativesRestantes > 0){

        let userAnswer = parseInt(prompt("Proposez un nombre entier situé entre 1 et 100."));
        
        if (isNaN(userAnswer)){
            alert("Erreur : vous ne saisissez pas un nombre.");
        } else if (userAnswer < 0 || userAnswer > 100){
            alert("Attention : veuillez saisir un entier entre 1 et 100 !");
        } else {
            tentativesJouées++;
            tentativesRestantes--;

            if (userAnswer < randomNumber){
                alert(`C'est plus ! Il ne vous reste que ${tentativesRestantes} tentatives.`);    
            } else if (userAnswer > randomNumber){
                alert(`C'est moins ! Il ne vous reste plus que ${tentativesRestantes} tentatives.`); // Lorsqu'on fait un alert() on n'a pas besoin de faire comme avec un console log pour que l'utilisateur rejoue ? C'est à dire lui demander de saisir une nouvelle réponse dans un prompt pour qu'il continue la boucle ?
            } else {
                alert(`Bravo ! Vous avez deviné le bon nombre en ${tentativesJouées} tentatives.`)
                break;
            }
        }
    }       
    if (userAnswer !== randomNumber && tentativesRestantes === 0){
        alert(`Vous avez perdu ! Le nombre a deviné était ${randomNumber}.`);
    }  
    rejouer = prompt("Voulez-vous rejouer une autre partie ?").toLowerCase();    
}




