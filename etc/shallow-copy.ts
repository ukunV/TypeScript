const arr1 = [1, 2, 3, 4];
const arr2 = arr1;
const arr3 = [...arr1];

arr2[0] = 5;

console.log(arr1);
console.log(arr2);
console.log(arr3);
