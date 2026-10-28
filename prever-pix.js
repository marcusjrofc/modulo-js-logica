// Banco Master
let saldo = 150;
let valor = 50;

if (valor <= 0) {
    console.log("Digite um valor maior que 0!!!");
    return;
}
if (saldo >= valor) {
    saldo = saldo - valor;
    console.log("Pix enviado. Saldo: ", saldo.toFixed(2));
} else {
    console.log("Saldo insuficiente");
}
