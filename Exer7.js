const prompt = require('prompt-sync')();

//the letters are representative of the numbers for an equation. (inversion of values)

const AString = prompt('Type the value of A: ');
const A = Number(AString);

const BString = prompt('Type the value of B: ');
const B = Number(BString);

const CString = prompt('Type the value of C: ');
const C = Number(CString);

const DString = prompt('Type the value of D: ');
const D = Number(DString);

const EString = prompt('Type the value of E: ');
const E = Number(EString);

const FString = prompt('Type the value of F: ');
const F = Number(FString);

const X = ((C*E)-(B*F)) / ((A*E)-(B*D));
const Y = ((A*F)-(C*D)) / ((A*E)-(B*D));

//Result and completion

console.log(`This is the valor of X: ${X}`);
console.log(`This is the valor of Y: ${Y}`);
