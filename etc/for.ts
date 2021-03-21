const arr: string[] = ["a", "b", "c"];

for (let i in arr) {
  console.log(`arr[${i}] = ${arr[i]}`);
}

for (let i of arr) {
  console.log(i);
}
