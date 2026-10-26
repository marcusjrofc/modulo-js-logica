// n1
/* let saldo = 150
let valor = 200

if (valor < 0) {
    console.log('digite um valor maior que 0')
    return
}
if (valor <= saldo) {
    saldo = saldo - valor
    console.log('pix realizado com sucesso, saldo:', saldo)
} */


//n2
/* const prompt = require('prompt-sync')()

let saldo = Number(prompt('digite o saldo:'))
let valor = Number(prompt('digite o valor:'))
let hora = parseInt(prompt('digite a hora:'))
let limite = 5000


if (valor <= 0) {
    console.log('digite um valor maior que 0')
    return
}
if (hora < 0 || hora > 23) {
    console.log('hora invalida')
    return
}
if (hora >= 20) {
    limite = 1000
}
if(saldo < valor){
    console.log('saldo insuficiente')
    return
}
if (valor > limite) {
    console.log('valor excedeu o limite noturno')
    return
} else {
    saldo = saldo - valor
    console.log('saldo:', saldo)
}
if (valor <= saldo) {
    saldo = saldo - valor
    console.log('pix realizado com sucesso, saldo:', saldo)
}
 */

//n3
const prompt = require('prompt-sync')()

let saldo = Number(prompt('digite o saldo: '))
let valor = Number(prompt('digite o valor: '))
let hora = parseInt(prompt('digite a hora: '))
let limite = 5000

if (valor <= 0) {
    console.log('digite um valor maior que 0')
    return
}
if (hora < 0 || hora > 23) {
    console.log('hora invalida')
    return
}
if (hora >= 20 || hora <= 6) { // atualização no limite noturno
    limite = 1000
}
if (saldo < valor) {
    console.log('saldo insuficiente')
    return
}
if (valor <= saldo ) {
    if (valor > limite) {
        console.log('valor excedeu o limite noturno')
    } else {
        saldo = saldo - valor
        console.log('pix realizado com sucesso, saldo: ', saldo)
    }
}

