import {promiseTest} from './MyPromise/myPromise';


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
