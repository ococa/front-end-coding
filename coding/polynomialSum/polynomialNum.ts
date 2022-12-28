/**
 * 多项式求和
 * f（x） =  a0 + a1x + ... + a(n-1)x^(n-1) + anx^n
 */

function pow(x: number, i: number) {
  return x ^ i;
}

const f1 = (n: number, a: number[], x: number) => {
  let p = a[0];
  for (let i = 1; i <= n; i ++) {
    p += (a[i] * pow(x, i) )
  }
  return p;
}

const f2 = (n: number, a: number[], x: number) => {
  let p = a[n];
  for (let i = n; i > 0; i --) {
    p = a[i - 1] + x*p
  }
  return p
}

export {
  f1,
  f2
}
