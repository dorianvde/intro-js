function duplicateArrayWithPush(arr) {
  const duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    duplicate.push(arr[i]);
  }
  return duplicate;
}

const originalArray = [1, 2, 3, 4, 5];
const duplicatedArray = duplicateArrayWithPush(originalArray);
console.log(duplicatedArray);