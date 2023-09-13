/*En réutilisant la fonction rand10() créée dans l'exercice 2,
 écrivez une fonction nommée multiRand(n) qui renvoie un tableau de n nombres 
 compris entre 1 et 10. Vous ne devez rien modifier dans rand10() pour y parvenir.*/

 function multiRand(n) {

    let array = [];
    for (let i = 0; i < n; i++)
 {
        array.push(rand10());
 }
 return array;
}

let a = prompt("Give me a number");
let multiArray = multiRand(a);
alert("Your numbers are : " + multiArray);



/* AUTRE CODE SANS PROMPT

function multiRand(n) {
  const randomNumbers = [];
  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Génère un nombre aléatoire entre 1 et 10
    randomNumbers.push(randomNumber); // Ajoute le nombre au tableau
  }
  return randomNumbers;
}

// Exemple d'utilisation de la fonction pour générer un tableau de 5 nombres aléatoires :
const result = multiRand(5);
console.log(result); // Affiche un tableau de 5 nombres aléatoires entre 1 et 10

*/
