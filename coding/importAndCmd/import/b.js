// import a from './a.js';
//
// let b = 'b';
// a.x+=1;
//
// console.log('this is b.jhs', a, b)
//
// export default b;

export let counter = {
  count: 1
}
console.log('b.js', counter.count)
setInterval(() => {
  console.log('modB.js-1', counter.count)
}, 1000)
