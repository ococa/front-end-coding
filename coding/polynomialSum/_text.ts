import { f1, f2 } from "./polynomialNum";

let loopTimes = 10000000;

const main = () => {
  console.log('testPolynomiaSum start')
  let maxN = 10;
  let arr = [];
  for (let i = 0; i < maxN; i ++) {
    arr[i] = i;
  }
  _testF(maxN - 1, arr, 1.1)(f1, loopTimes)
  _testF(maxN - 1, arr, 1.1)(f2, loopTimes)
  console.log('testPolynomiaSum end')

}

const _testF = (n: number, a: number[], x: number) => (func: (n: number, a: number[], x: number) => number, loopTimes: number) => {
  console.time(func.name);
  for (let i = 0; i < loopTimes; i ++ ) {
    f1(n, a, x);
  }
  console.timeEnd(func.name);
}

export {
  main as testPolynomiaSum
}
