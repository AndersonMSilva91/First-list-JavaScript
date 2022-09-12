const prompt = require('prompt-sync')();

//the letters are representative of the numbers for an equation. (inversion of values)

const FString = prompt('Factory cost: ');
const f = Number(FString);

const distubuction = f*28/100
const tax = f*45/100
const car = f + distubuction + tax

console.log(`This is the valor of the car: ${Math.floor(car)}`);