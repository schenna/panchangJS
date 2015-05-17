eval(require('fs').readFileSync('./panchang.js', 'utf8'));
var k = new Date();
panchang.calculate(k, function(){
console.log("from the callback");
});
console.log(panchang);
