const prompt = require('prompt-sync')();

const yearString = prompt('how many years you lived ? ');
const year = Number(yearString);

const monthString = prompt('how many months ? ');
const month = Number(monthString);

const dayString = prompt('How many days ? ');
const day = Number(dayString);

const day2 = ((year * 365) + (month * 30) + day);

console.log(`You already live ${day2} days`)