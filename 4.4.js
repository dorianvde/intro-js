/*Créez une fonction pickLearner(inputAr, n) qui prend 2 paramètres. 
inputAr : Un tableau d'apprenants (celui que vous avez créé dans l'exercice 3.0 par exemple)
 n : Un nombre qui doit être supérieur à 0 et inférieur à la longueur de inputAr
  La fonction doit renvoyer un tableau d'apprenants sélectionnés au hasard.*/

 function pickLearner(inputAr, n) {
  if (n <= 0 || n > inputAr.length) {
    throw new Error("La valeur de 'n' doit être supérieure à 0 et inférieure à la longueur de inputAr.");
  }

  const randomArray = [];
  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * inputAr.length);
    const randomLearner = inputAr.splice(randomIndex, 1)[0];
    randomArray.push(randomLearner);
  }

  return randomArray;
}

const apprenants = 
["Alexandre",
    "Alexandre V",
     "Antoine",
      "Bastien",
       "Carole",
        "Dorian",
         "Elisabeth",
          "Elodie",
           "Justin",
            "Justine F",
             "Justine L",
              "Kimi",
               "Layla",
                "Lidwine",
                 "Lucas",
                  "Marie",
                   "Mathias",
                    "Okly",
                     "Pierre",
                      "Robin",
                       "Rosalie",
                        "Stephane",
                         "Tim",
                          "Thomas",
                           "Valentin",
                             "Virginie"];
const n = parseInt(prompt("Enter the number of people desired : "));
const result = pickLearner(apprenants, n);
console.log(result);

/* VERSION 1 (ECHEC INVERSION DES NOMBRES 1VOULU 26 SORTIS/ 26 VOULUS  1 SORTI)

function pickLearner(inputAr, n) {

inputAr = [
    "Alexandre",
    "Alexandre V"
     "Antoine",
      "Bastien",
       "Carole",
        "Dorian",
         "Elisabeth",
          "Elodie",
           "Justin",
            "Justine F",
             "Justine L",
              "Kimi",
               "Layla",
                "Lidwine",
                 "Lucas",
                  "Marie",
                   "Mathias",
                    "Okly",
                     "Pierre",
                      "Robin",
                       "Rosalie",
                        "Stephane",
                         "Tim",
                          "Thomas",
                           "Valentin",
                             "Virginie"];

n = prompt ("enter a desired number : ");
randomArray = [];
for (n > 0; n < inputAr.length; n++) {
let n = inputAr[Math.floor (Math.random () * inputAr.length) ];
randomArray.push (n)
}
console.log(randomArray);
}
pickLearner ();

*/


