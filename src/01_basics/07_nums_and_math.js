const score=400
// console.log(score, " and type of", typeof(score));
const balance=new Number(100)
// console.log(balance, " and type of", typeof(balance));

console.log(balance.toFixed(2));// isme value ke agae zero lag jate hy like 100.00
const otherNum=232.8999
// console.log(otherNum.toPrecision(3));// ye kitne num lane hy  example and output : 233
const hundred=10000000
// console.log(hundred.toLocaleString("en-PK"));// ye apko apke comma me vlaue lekar ati hy and en pk ye apke country ke hisab se value set karta hy

/// +++++++++++++++++++ Math +++++++++++++++++

// console.log(Math);
// console.log(Math.round(4.5)); // ye value ko round kar dega like output: 5
// console.log(Math.round(4.4)); // ye value ko round kar dega like output: 4
// console.log(Math.abs(-4)); // ye sirf negative value ko positive me karega output: 4
// console.log(Math.ceil(4.2)); // agar 4.1 bah hoga toh upper value ke taraf roundoff  karega output: 5
// console.log(Math.floor(4.9)); // ye lower value ke taraf round off karega output 4

// But mostly math.round use 
console.log(Math.random());
console.log((Math.random()*6)+1);
console.log(Math.floor(Math.random()*6)+1);

const min=10
const max=20

console.log(Math.random()*(max-min+1)+min);











