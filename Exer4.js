const prompt = require('prompt-sync')();

const AString = prompt('Type the valor of A: ');
const A = Number(AString);

const BString = prompt('Type the valor of B: ');
const B = Number(BString);

const CString = prompt('Type the valor of C: ');
const C = Number(CString);

const R = Math.pow(A + B,2);
const S = Math.pow(B + C,2);
const D = (S + R) / 2

console.log(`O resultado de R é ${R}, o de S é ${S}, ode D é ${D}`);