eval(require('fs').readFileSync('./panchang.js', 'utf8'));
var k = new Date();
panchang.calculate(k);
console.log(panchang);
