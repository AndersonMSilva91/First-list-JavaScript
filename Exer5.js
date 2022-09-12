const prompt = require('prompt-sync')();

//Here are numbers and weights n and p, mul is multiplication and the rest explains itself.

const n1String = prompt('Insert the firt note ');
const n1 = Number(n1String);

const n2String = prompt('Insert the secund note ');
const n2 = Number(n2String);

const n3String = prompt('Insert the third note ');
const n3 = Number(n3String);

const p1String = prompt('Insert the first weight ');
const p1 = Number(p1String);

const p2String = prompt('Insert the secunds weight ');
const p2 = Number(p2String);

const p3String = prompt('Insert the third weight ');
const p3 = Number(p3String);

//Data processing

const mul1 = n1*p1
const mul2 = n2*p2
const mul3 = n3*p3

const plusM = mul1 + mul2 + mul3
const plusP = p1 + p2 + p3

const average = plusM / plusP

//Data output

console.log(`The student grade is ${average}`)

