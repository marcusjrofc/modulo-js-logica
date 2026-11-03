const saldoInicial = 500;
const movimentos = [200, -900, 100, -50];
let saldoAtual = saldoInicial;
let menorSaldo;

for (let i = 0; i < movimentos.length; i++) {
  saldoAtual = saldoAtual + movimentos[i];
  if (i === 0 || saldoAtual < menorSaldo) {
    menorSaldo = saldoAtual;
  }
}
console.log(menorSaldo);
