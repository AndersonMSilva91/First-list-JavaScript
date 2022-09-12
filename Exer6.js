const prompt = require('prompt-sync')();

//Data entry (distance calculation by equation)

const x1String = prompt('Insert the valor of x1: ');
const x1 = Number(x1String);

const x2String = prompt('Insert the valor of x2: ');
const x2 = Number(x2String);

const y1String = prompt('Insert the valor of y1: ');
const y1 = Number(y1String);

const y2String = prompt('Insert the valor of y2: ');
const y2= Number(y2String);

//Processing (below is the equation)

const D = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y2-y1, 2), 2);

//Result and completion

console.log(`This is distance of them: ${Math.floor(D)}`);

