const prompt = require('prompt-sync')();

const ageString = prompt('How many days you lived ? ');
const age = Number(ageString);

const years = Math.floor(age / 365)
const months = Math.floor((age % 365) / 30)
const days = (age % 365) % 30

console.log(`You lived ${years} years, ${months} months and ${days} days.`);