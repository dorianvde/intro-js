function calculateAverage(arr) {
  if (arr.length === 0) {
    return null; 
  } else {
    const total = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = total / arr.length;
    return average;
  }
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [100, 101, 102];

const average1 = calculateAverage(array1);
const average2 = calculateAverage(array2);

console.log(`Average of [1, 2, 3, 4, 5] => ${average1}`);
console.log(`Average of [100, 101, 102] => ${average2}`);
