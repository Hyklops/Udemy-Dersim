const weightMark = 78
const heightMark = 1.69
const weightJohn = 92
const heightJohn = 1.95

let bmiMark = weightMark / heightMark ** 2
let bmiJohn = weightJohn / heightJohn ** 2
const markHigherBMI = bmiMark > bmiJohn
console.log(markHigherBMI)
console.log(bmiMark, bmiJohn);
