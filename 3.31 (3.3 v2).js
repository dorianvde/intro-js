function duplicateArrayWithArrayFrom(arr) {
  return Array.from(arr);
}

const originalArray = [1, 2, 3, 4, 5];
const duplicatedArray = duplicateArrayWithArrayFrom(originalArray);
console.log(duplicatedArray);