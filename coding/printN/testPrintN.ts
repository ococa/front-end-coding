import { printN, printNRecursion, testPrintN } from "./printN";


function _test() {
  // for (let i = 10; i < 1000; i = i * 10){
    let i = 10000
    console.log('test——i', i)
    testPrintN(printN, i);
    testPrintN(printNRecursion, i);
  // }
  return 'end'
}

// _test();

export {
  _test as testPrintN
}
