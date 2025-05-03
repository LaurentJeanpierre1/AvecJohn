/* 🚲 Exercice : Gestion de location de vélos */
/* Objectif : Créer un petit programme en JavaScript qui permet de gérer la location et le retour de vélos dans une station.  */

/*🎯 Consignes
Crée un tableau velos contenant des objets représentant chaque vélo.

1. Chaque objet doit avoir :
- id (un numéro ou une chaîne unique),
- modele (ex. : "VTT", "Vélo de ville", "BMX"),
- disponible (true ou false),
- couleur.

2. Affiche la liste des vélos disponibles à chaque boucle.

3.Demande à l'utilisateur via prompt() s'il souhaite louer ou rendre un vélo.
Si l'utilisateur choisit louer :
Demande le id ou modèle du vélo souhaité.
Vérifie s'il est disponible.
Marque le vélo comme loué (disponible = false) s'il l'est.

5. Si l'utilisateur choisit rendre :
Demande le id ou modèle.
Vérifie s'il est actuellement loué.
Marque le vélo comme disponible (disponible = true).

6. Répète la boucle jusqu'à ce que l'utilisateur dise non.*/

velosDisponibles = [
    { ID : "BMX", Modèle : "BMX freestyle", Disponible : true, Couleur : "bleu" },
    { ID : "VTT", Modèle : "VTT forêt", Disponible : true, Couleur : "jaune" },
    { ID : "Vélo casual", Modèle : "Vélo de ville", Disponible : true, Couleur : "gris" },
    { ID : "Vélo casual 2", Modèle : "Vélo de ville", Disponible : true, Couleur : "blanc" },
];
let gestionLocation = "oui"

while (gestionLocation.toLowerCase() === "oui"){

    console.log("Voici les vélos actuellement disponibles en magasin :")

    let veloDisponibleMaintenant = velosDisponibles.filter(velo => velo.Disponible);
    veloDisponibleMaintenant.forEach(velo => console.log(`ID : ${velo.ID} | Modèle : ${velo.Modèle} | Couleur : ${velo.Couleur} `));

    let louerRendre = prompt("Que voulez-vous faire : louer ou rendre un vélo ?").toLowerCase();

    if (louerRendre === "louer"){
        let véloVoulu = prompt("Quel vélo voulez-vous parmi ceux disponibles ? (Tapez l'ID).").toLowerCase();
        let véloTrouvé = velosDisponibles.find(velo => velo.ID.toLowerCase() === véloVoulu);

        if (véloTrouvé && véloTrouvé.Disponible){
            véloTrouvé.Disponible = false;
            console.log(`Vous venez de louer le vélo suivant : ${véloTrouvé.ID}.`)
        } else {
            alert("Malheureusement le vélo demandé n'est actuellement pas disponible !")
        }
    } else if (louerRendre === "rendre"){
        let véloaRendre = prompt("Quel vélo souhaitez-vous rendre ?").toLowerCase();
        let véloEmprunté = velosDisponibles.find(velo => velo.ID.toLowerCase() === véloaRendre);
        
        if (véloEmprunté && véloEmprunté.Disponible === false){
            véloEmprunté.Disponible = true; 
            console.log(`Vous venez de rendre le vélo suivant : ${véloEmprunté.ID}.`)
        } else {
            alert("Le vélo que vous souhaitez n'existe pas chez nous.");
        }
    } gestionLocation = prompt("Souhaitez-vous louer ou rendre un autre vélo ?").toLowerCase();
}