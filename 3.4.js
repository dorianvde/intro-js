function findMinMax(arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  };
}

const array = [3, 1, 7, 2, 8, 4, 5];
const { min, max } = findMinMax(array);

console.log(`Minimum element: ${min}`);
console.log(`Maximum element: ${max}`);