const mark = {

    full_name: "Mark Miller",
    mass: 78,
    height: 1.69,
    calc_bmi: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }


}
// console.log(mark.bmi) //undefined. because we did'nt calculated.
mark.calc_bmi()
console.log(mark.bmi)

const john = {

    full_name: "John Smith",
    mass: 92,
    height: 1.95,
    calc_bmi: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}
john.calc_bmi()
console.log(john.calc_bmi())

console.log(mark.bmi > john.bmi ? `${mark.full_name}'s BMI (${mark.bmi}) is higher than ${john.full_name}'s BMI(${john.bmi})` : `${john.full_name}'s BMI (${john.bmi}) is higher than ${mark.full_name}'s BMI(${mark.bmi})`)
