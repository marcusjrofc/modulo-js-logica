const prompt = require("prompt-sync")();
let tentativa = 0;
let senha;

while (senha != "caju2026") {
  let senha = prompt("digite a senha:");
  if (senha == "caju2026") {
    console.log("Acesso liberado");
    break;
  } else {
    console.log("Senha incorreta");
    tentativa += 1;
  }

  if (tentativa == 3) {
    console.log("Conta bloqueada");
    break;
  }
}
