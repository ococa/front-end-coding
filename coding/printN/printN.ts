/**
 * printN 打印 1 - n的所有正整数
 */

const printN = (n: number) => {
  for (let i = 1; i <= n; i ++) {
    console.log('n:', i, '\n');
  }
}

const printNRecursion = (n: number) => {
  if(n > 0) {
    printNRecursion(n - 1);
    console.log('n: ', n, '\n');
  } else {
    return;
  }
}

const testPrintN = (func: (n: number) => void, n: number) => {
  console.log('test start')
  console.time(func.name)
  func(n);
  console.log('test end')
  console.timeEnd(func.name)
}

export {
  printN,
  printNRecursion,
  testPrintN,
};
