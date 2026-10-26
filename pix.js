// n1


let saldo = 150
let valor = 200

if (valor < 0) {
    console.log('digite um valor maior que 0')
    return
}
if (valor <= saldo) {
    saldo = saldo - valor
    console.log('pix realizado com sucesso, saldo:', saldo)
}


