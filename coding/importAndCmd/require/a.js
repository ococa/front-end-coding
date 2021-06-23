let b = require('./b');

b += 1;

const a = { x: 'a' };
console.log('this is a.js', a, b)

module.exports = a;
