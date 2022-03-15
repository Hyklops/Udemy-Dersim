const bills = [125, 555, 44]
console.log(bills)

const calc_tip = function (bill) {
    if (bill > 50 && bill < 300) {
        return bill * 0.15


    } else return bill * 0.20
}
const tip = [calc_tip(bills[0]), calc_tip(bills[1]), calc_tip(bills[2])]
console.log(tip)
const total_payment = [tip[0] + bills[0], tip[1] + bills[1], tip[2] + bills[2]]
console.log(total_payment)
