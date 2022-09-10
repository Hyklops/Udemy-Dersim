const bill = 40
const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
console.log(`bill is ${bill} and the tip is ${tip}. The total payment is ${(bill + tip)}`)
