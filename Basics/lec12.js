 const score = 400
// console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));
//precision value -fixed

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));
// precision range 1-21 and give in string

let m = 0.00123456;

m.toPrecision(2); // "0.0012"
m.toPrecision(3); // "0.00123"
m.toPrecision(4); // "0.001235"

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  abs convert neg to posi
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); top
// console.log(Math.floor(4.9)); floor value
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());//always btw 0-1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)