/*Créez une fonction nommée calcDistance qui prend les coordonnées de deux points différents 
A et B dans un espace 2D. Cette fonction doit renvoyer la distance entre ces deux points.
Exemples de résultats :
 Point A = [1, 1], point B = [2, 2] => 1,41 
 Point A = [1, 1], point B = [3, 1] => 2 
 Point A = [4, 1], point B = [1, 1] => 3 
 Point A = [-2, 2], point B = [2, -2] => 5,65 
 Créez un programme pour utiliser cette fonction. 
 Rédigez une documentation pour la fonction calcDistance.
  Remarque : Vous devrez probablement effectuer une recherche sur Google pour connaître la 
  formule mathématique permettant de le faire. Vous devrez probablement 
  aussi rechercher des fonctions utiles en JavaScript pour vous aider à créer
   des formules mathématiques complexes...*/

  function calcDistance(x1, x2, y1, y2) {
  let f = x1 - x2;
  let s = y1 - y2;
  let t = Math.hypot(f, s);
  return t;
}

let x1 = parseFloat(prompt("Enter the x axis of the first point : "));
let y1 = parseFloat(prompt("Enter the y axis of the first point : "));
let x2 = parseFloat(prompt("Enter the x axis of the second point : "));
let y2 = parseFloat(prompt("Enter the y axis of the second point : "));

const distance = calcDistance(x1, x2, y1, y2); 

alert("the distance between the two points is: " + distance);



//////////////////////////////A REFAIRE!!!!!!!!!!!!!!!!!!////////////////////////////////////////////////////////////



