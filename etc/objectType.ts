interface temp {
  name: string;
  age: number;
}

const tt: temp = { name: "aa", age: 11 };

console.log(tt);
console.log(tt.name);

const person: object = { name: "bb", age: 22 };

console.log(person);
console.log((<{ name: string }>person).name);
