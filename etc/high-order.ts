const add1 = (a: number): ((number) => number) => (b: number): number => a + b;

const result = add1(1)(2);

console.log(result);

// ------------------------------------------------------------------

type NumberToNumberFunc = (number) => number;

const add2 = (a: number): NumberToNumberFunc => {
  const _add2: NumberToNumberFunc = (b: number): number => {
    return a + b; // 클로저
  };
  return _add2;
};

console.log(add2(1)(2));
