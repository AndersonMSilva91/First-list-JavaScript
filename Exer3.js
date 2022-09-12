const prompt = require('prompt-sync')();

const totalSecString = prompt('Put the time in secunds: ');
const totalSecs = Number(totalSecString);

const hours = Math.floor(totalSecs / 3600)
const minutes = Math.floor((totalSecs % 3600) / 60)
const secs = (totalSecs % 3600) % 60

console.log(`The event spent ${hours} hours, ${minutes} minutes and ${secs} secunds.`);
