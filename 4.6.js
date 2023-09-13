/*Créez une fonction factorielle(a) qui renvoie la factorielle d'un nombre. 
Cette fonction doit être récursive.*/

function calcDistance(pointA, pointB) {
 
  if (pointA.length !== 2 || pointB.length !== 2) {
    throw new Error("Les coordonnées doivent être fournies sous la forme [x, y].");
  }

  const deltaX = pointA[0] - pointB[0];
  const deltaY = pointA[1] - pointB[1];
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  return distance;
}

function getCoordinatesFromUser(pointName) {
  const x = parseFloat(prompt(`Entrez la coordonnée x pour le point ${pointName}:`));
  const y = parseFloat(prompt(`Entrez la coordonnée y pour le point ${pointName}:`));
  if (isNaN(x) || isNaN(y)) {
    throw new Error("Veuillez entrer des coordonnées numériques valides.");
  }
  return [x, y];
}

const pointA = getCoordinatesFromUser("A");
const pointB = getCoordinatesFromUser("B");


const distance = calcDistance(pointA, pointB);

console.log(`La distance entre A(${pointA[0]}, ${pointA[1]}) et B(${pointB[0]}, ${pointB[1]}) est ${distance.toFixed(2)}`);


/* 
function calcDistance(pointA, pointB) {

  if (pointA.length !== 2 || pointB.length !== 2) {
    throw new Error("Les coordonnées doivent être fournies sous la forme [x, y].");
  }

  const deltaX = pointA[0] - pointB[0];
  const deltaY = pointA[1] - pointB[1];
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  return distance;
}


const point1 = [1, 1];
const point2 = [2, 2];
const distance1 = calcDistance(point1, point2);
console.log(`Distance entre point1 et point2 : ${distance1.toFixed(2)}`);

const point3 = [1, 1];
const point4 = [3, 1];
const distance2 = calcDistance(point3, point4);
console.log(`Distance entre point3 et point4 : ${distance2.toFixed(2)}`);
*/

