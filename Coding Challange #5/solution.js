
const calc_avarage = function (score_1, score_2, score_3) {
    const avarage = (score_1 + score_2 + score_3) / 3
    return avarage
}
console.log(calc_avarage(1, 2, 3))

const score_dolphins = calc_avarage(1, 23, 71)
const score_koalas = calc_avarage(500, 54, 49)

const check_winner = function (avg_koalas, avg_dolphins) {
    if (avg_koalas >= 2 * avg_dolphins) {
        console.log("koala win")
    } else if (avg_dolphins >= 2 * avg_koalas)
        console.log("dolphin win")
    else {
        console.log(`no one win koalas:${score_koalas} vs dolphins:${score_dolphins}`)
    }
}
check_winner(score_koalas, score_dolphins)
check_winner(1, 10)
