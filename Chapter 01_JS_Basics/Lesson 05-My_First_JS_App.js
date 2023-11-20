const prompt = require('prompt-sync')();

// lesson 05 - My first JS App   - user input

food = Number(prompt("how much was the food: "))

tipPercentage = Number(prompt('tip %:')) / 100
tipAmount = food * tipPercentage
total = food + tipAmount

console.log('tipAmount:', tipAmount)
console.log('total:', total)