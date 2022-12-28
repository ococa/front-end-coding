import { testPrintN } from "./printN/testPrintN";
import { testPolynomiaSum } from "./polynomialSum/_text";
import {promiseTest} from './MyPromise/myPromise';

const dom = document.getElementById('root');


if(dom) {
  testPolynomiaSum()
  dom.innerHTML = testPrintN();
}

console.log('start');

const promiseResult = promiseTest('promise');
const myPromiseResult = promiseTest('myPromise');

console.log('promise result', promiseResult)
console.log('myPromise result', myPromiseResult)

setTimeout(() => {
  console.log('promise result', promiseResult)
  console.log('myPromise result', myPromiseResult)
}, 1000)

console.log('end');

export  {

}
