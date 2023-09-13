/* Écrivez un programme qui ajoutera tous les éléments d'un tableau. Testez-le avec les tableaux suivants :
 [1, 2, 3, 4, 5] => 15
[100, 101, 102] => 303 */

function calculateSum(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [100, 101, 102];

const sum1 = calculateSum(array1);
const sum2 = calculateSum(array2);

console.log(`Sum of [1, 2, 3, 4, 5] => ${sum1}`);
console.log(`Sum of [100, 101, 102] => ${sum2}`);
