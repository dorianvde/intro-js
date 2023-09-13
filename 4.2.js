/*Créez une fonction nommée rand10() qui renvoie un entier aléatoire compris entre 1 et 10. 
Créez un programme qui affichera le résultat de cette fonction à chaque fois qu'elle sera exécutée.
 Écrivez une documentation pour la fonction rand10(). */

 function rand10() 
 {
    return Math.floor(Math.random() * 10 + 1);
 }

 let random = rand10();
 alert("Random number generator : " + random);